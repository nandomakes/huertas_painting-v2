// One-off generator for brand assets derived from the client's logo/photos.
// Run with `node scripts/build-brand-assets.mjs` after replacing the sources.
//  - src/assets/images/logo-huertas-painting-light.png: the logo with its black
//    lettering turned white, so it reads on the dark header/footer. The red
//    roof and yellow sun/brush keep their colors.
//  - public/favicon-{32,180,512}.png: the roof + sun mark on the brand charcoal.
//  - public/og-image.jpg: 1200×630 social card from the hero photo.
import sharp from 'sharp';

const IMG = 'src/assets/images';

// 1) Light logo: any dark, low-saturation pixel (the wordmark + rule) → white.
{
  const { data, info } = await sharp(`${IMG}/logo-huertas-painting.png`)
    .ensureAlpha()
    .raw()
    .toBuffer({ resolveWithObject: true });
  for (let i = 0; i < data.length; i += 4) {
    const [r, g, b, a] = [data[i], data[i + 1], data[i + 2], data[i + 3]];
    if (a === 0) continue;
    const max = Math.max(r, g, b);
    const min = Math.min(r, g, b);
    // Dark and gray (not the red roof): flip to white, keep its alpha.
    if (max < 120 && max - min < 40) {
      data[i] = data[i + 1] = data[i + 2] = 255;
    }
    // The four window panes are dark gray too — they flip with the text,
    // which reads correctly (lit windows) on a dark background.
  }
  await sharp(data, { raw: info }).png().toFile(`${IMG}/logo-huertas-painting-light.png`);
}

// 2) Favicons: crop the house/sun mark (top-left of the logo) onto charcoal.
{
  const mark = await sharp(`${IMG}/logo-huertas-painting.png`)
    .extract({ left: 0, top: 0, width: 175, height: 95 })
    .toBuffer();
  const markLight = await sharp(`${IMG}/logo-huertas-painting-light.png`)
    .extract({ left: 0, top: 0, width: 175, height: 95 })
    .resize(440, null)
    .toBuffer();
  void mark;
  const base = sharp({
    create: { width: 512, height: 512, channels: 4, background: '#192124' },
  }).composite([{ input: markLight, gravity: 'center' }]);
  const png512 = await base.png().toBuffer();
  await sharp(png512).toFile('public/favicon-512.png');
  await sharp(png512).resize(180).toFile('public/favicon-180.png');
  await sharp(png512).resize(32).toFile('public/favicon-32.png');
}

// 3) OG image: hero photo, cover-cropped to 1200×630.
await sharp(`${IMG}/huertas-painting-truck-hero.jpg`)
  .resize(1200, 630, { fit: 'cover', position: 'centre' })
  .jpeg({ quality: 82 })
  .toFile('public/og-image.jpg');

console.log('brand assets written');
