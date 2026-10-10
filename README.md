# dapurprofit landing page

Responsive Indonesian landing page with the 11 requested sections, Tailwind CSS browser utilities, custom styling, recipe category filters, FAQ accordions, and a mobile sticky CTA.

## Preview

Run `node server.mjs` and visit http://localhost:3000.

## Files

`dist/index.html`, `dist/styles.css`, and `dist/app.js` form a static website with no build step.

## Deploy on Vercel

Import this repository with Root Directory set to the repository root (`.`). The included `vercel.json` uses the Other framework preset, skips installation and build commands, and serves the existing `dist` directory. Keep Root Directory at the repository root so Vercel reads this configuration. Deploy the latest `main` commit; an existing deployment does not change when configuration is updated.

## Content notes

The reference website could not be retrieved. The implementation follows the supplied structure and copy rather than claiming a pixel-exact match. Food photography and avatars are placeholders. WhatsApp cards are clearly marked illustrations and must be replaced with verified screenshots. The countdown is a static placeholder. The final purchase button opens a preview notice; replace it with a real payment destination before accepting orders. Fonts, photos, and Tailwind utilities load from external CDNs.
