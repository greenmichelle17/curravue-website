# Curravue Premium Storefront

## Structural layout blueprint

1. Sticky Header
   - Curravue logo
   - Browse Prompts
   - Features
   - Licensing
   - Support
   - Primary browse CTA

2. Hero
   - Core value proposition
   - Two CTAs
   - Secure-delivery and protected-IP messaging
   - Abstract workflow preview, with no prompt text exposed

3. Value Metrics
   - Repetitive setup reduction
   - Output consistency
   - Professional use positioning

4. Product Catalog
   - Filterable card grid
   - Product abstraction only
   - Tier selector
   - Dynamic price
   - Dynamic license label
   - Checkout button
   - No proprietary prompt source in client files

5. Why Curravue
   - Structured prompt architecture
   - Instructional design logic
   - Protected intellectual property
   - Tiered licensing

6. Licensing
   - Solo Educator
   - Professional
   - Department

7. Support
   - support@curravue.com

8. Footer
   - Logo
   - Navigation
   - Terms of Service
   - Privacy Policy
   - Support email

## Files

- `index.html` storefront
- `styles.css` production CSS
- `app.js` filtering, tier pricing, responsive navigation, and checkout behavior
- `privacy.html` privacy policy
- `terms.html` terms of service
- `assets/curravue-logo.png` Curravue logo

## Checkout configuration

Open `app.js` and edit the `productConfig` object.

Each product and tier has:
- `price`
- `license`
- `url`

Example:

```js
math: {
  basic: {
    price: "$29",
    license: "1 educator",
    url: "https://whop.com/curravue/ai-powered-math-educator-playbook"
  }
}
```

The existing Math Educator Playbook links to the current Whop product.
Products without a checkout URL route the buyer to `support@curravue.com`.

## IP protection architecture

Do not place proprietary prompt source text in `index.html`, `app.js`, JSON files, hidden elements, HTML comments, or browser storage. Front-end code is visible to visitors.

Use Whop, Gumroad, or an authenticated backend to deliver the protected prompt only after payment or verified access.

## Deployment

This package works as a static site on:
- GitHub Pages
- Netlify
- Cloudflare Pages
- Any basic web host

Upload the full folder so the HTML, CSS, JavaScript, logo, and legal pages keep the same relative paths.
