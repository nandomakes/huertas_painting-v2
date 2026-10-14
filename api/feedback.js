// Vercel Function: the review funnel's "I had a bad experience" form
// (/thanks-for-your-feedback/). Emails the message privately to Huerta's
// Painting via Resend — same env vars as api/estimate.js.

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
    console.error('feedback: RESEND_API_KEY or ESTIMATE_NOTIFY_EMAIL is not set');
    return json(500, { error: 'The form is temporarily unavailable.' });
  }

  let form;
  try {
    form = await request.formData();
  } catch {
    return json(400, { error: 'Invalid submission.' });
  }

  if (field(form, 'hp_website_confirm')) {
    console.warn('feedback: honeypot triggered', { ua: request.headers.get('user-agent') });
    return json(200, { ok: true });
  }

  const name = field(form, 'name');
  const email = field(form, 'email');
  const message = field(form, 'message');
  if (!name || !email || !message) {
    return json(400, { error: 'Please add your name, email and message.' });
  }
  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
    return json(400, { error: 'Please enter a valid email address.' });
  }

  const rows = [
    ['Name', name],
    ['Email', email],
    ['Phone', field(form, 'phone') || '—'],
    ['Message', message],
  ];
  const html = `
    <h2 style="font-family:sans-serif">Private feedback from a client</h2>
    <p style="font-family:sans-serif;font-size:14px;color:#444">Sent from the review page after choosing "I had a bad experience".</p>
    <table style="font-family:sans-serif;font-size:14px;border-collapse:collapse">
      ${rows
        .map(
          ([k, v]) =>
            `<tr><td style="padding:6px 12px 6px 0;color:#666;vertical-align:top"><b>${k}</b></td><td style="padding:6px 0;white-space:pre-wrap">${esc(v)}</td></tr>`
        )
        .join('')}
    </table>
    <p style="font-family:sans-serif;font-size:12px;color:#999">Reply to this email to answer the client directly.</p>
  `;

  const sendError = 'We could not send your message.';
  let res;
  try {
    res = await fetch('https://api.resend.com/emails', {
      method: 'POST',
      headers: { Authorization: `Bearer ${apiKey}`, 'Content-Type': 'application/json' },
      body: JSON.stringify({
        from,
        to: to.split(',').map((s) => s.trim()).filter(Boolean),
        reply_to: email,
        subject: `Client feedback — ${name}`,
        html,
      }),
    });
  } catch (err) {
    console.error('feedback: Resend request failed', err);
    return json(502, { error: sendError });
  }

  if (!res.ok) {
    console.error('feedback: Resend error', res.status, await res.text());
    return json(502, { error: sendError });
  }
  const body = await res.json().catch(() => ({}));
  console.log('feedback: sent', { id: body.id });
  return json(200, { ok: true });
}
