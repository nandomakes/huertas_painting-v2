// Vercel Function: receives a free-estimate request from any page's form and
// emails it to Huerta's Painting via Resend. Lives outside src/ because the
// Astro site is fully static — Vercel deploys /api/* as functions alongside it.

const MAX_FIELD = 3000;

const json = (status, body) =>
  new Response(JSON.stringify(body), {
    status,
    headers: { 'content-type': 'application/json' },
  });

const esc = (s) =>
  s.replace(/[&<>"']/g, (c) => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' })[c]);

const field = (form, name) => String(form.get(name) ?? '').trim().slice(0, MAX_FIELD);

export async function POST(request) {
  const apiKey = process.env.RESEND_API_KEY;
  const to = process.env.ESTIMATE_NOTIFY_EMAIL;
  const from = process.env.ESTIMATE_FROM_EMAIL || "Huerta's Painting Website <onboarding@resend.dev>";
  if (!apiKey || !to) {
    console.error('estimate: RESEND_API_KEY or ESTIMATE_NOTIFY_EMAIL is not set');
    return json(500, { error: 'The form is temporarily unavailable.' });
  }

  let form;
  try {
    form = await request.formData();
  } catch {
    return json(400, { error: 'Invalid submission.' });
  }

  // Honeypot: bots fill every field. They still get a 200 so they don't
  // retry, and the drop is logged so a real lead caught by it is visible.
  if (field(form, 'hp_website_confirm')) {
    console.warn('estimate: honeypot triggered', { ua: request.headers.get('user-agent') });
    return json(200, { ok: true });
  }

  const name = field(form, 'name');
  const phone = field(form, 'phone');
  const email = field(form, 'email');
  if (!name || !phone || !email) {
    return json(400, { error: 'Please add your name, phone and email.' });
  }
  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
    return json(400, { error: 'Please enter a valid email address.' });
  }

  const service = field(form, 'service') || 'Not specified';
  const rows = [
    ['Name', name],
    ['Phone', phone],
    ['Email', email],
    ['Service', service],
    ['City', field(form, 'city') || '—'],
    ['State', field(form, 'state') || '—'],
    ['Zip', field(form, 'zip') || '—'],
    ['Message', field(form, 'message') || '—'],
  ];
  const html = `
    <h2 style="font-family:sans-serif">New free-estimate request</h2>
    <table style="font-family:sans-serif;font-size:14px;border-collapse:collapse">
      ${rows
        .map(
          ([k, v]) =>
            `<tr><td style="padding:6px 12px 6px 0;color:#666;vertical-align:top"><b>${k}</b></td><td style="padding:6px 0;white-space:pre-wrap">${esc(v)}</td></tr>`
        )
        .join('')}
    </table>
    <p style="font-family:sans-serif;font-size:12px;color:#999">Sent from huertaspaintingllc.com. Reply to this email to answer the customer directly.</p>
  `;

  const sendError = 'We could not send your request.';
  let res;
  try {
    res = await fetch('https://api.resend.com/emails', {
      method: 'POST',
      headers: { Authorization: `Bearer ${apiKey}`, 'Content-Type': 'application/json' },
      body: JSON.stringify({
        from,
        to: to.split(',').map((s) => s.trim()).filter(Boolean),
        reply_to: email,
        subject: `Estimate request: ${service} — ${name}`,
        html,
      }),
    });
  } catch (err) {
    console.error('estimate: Resend request failed', err);
    return json(502, { error: sendError });
  }

  const text = await res.text();
  let body;
  try {
    body = JSON.parse(text);
  } catch {
    body = { raw: text };
  }

  if (!res.ok) {
    console.error('estimate: Resend error', res.status, body);
    return json(502, { error: sendError });
  }
  console.log('estimate: sent', { id: body.id, service });
  return json(200, { ok: true, id: body.id });
}
