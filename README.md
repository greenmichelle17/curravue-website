# Curravue Website

Static website package for GitHub + Cloudflare Pages.

## Upload these files to the ROOT of your GitHub repository

- `index.html`
- `privacy.html`
- `terms.html`
- `404.html`
- `favicon.svg`
- `robots.txt`
- `sitemap.xml`
- `assets/curravue-logo.jpg`

Keep the `assets` folder exactly as shown because the HTML files reference it.

## Important before launch

Open `index.html` and search for:

`Paste your Whop Product Checkout Link Here`

Replace each nearby `href="#"` with the correct Whop checkout URL for that product.

Example:

```html
<a href="https://whop.com/your-product-link" target="_blank" rel="noopener noreferrer">
  Unlock Prompt Engine
</a>
```

## Cloudflare Pages

For a plain static site:

- Framework preset: None
- Build command: leave blank
- Build output directory: `/` or repository root, depending on the Cloudflare Pages setup screen
- Production branch: usually `main`

## Security

Do not upload customer ZIP files, master prompts, owner packages, or paid product downloads to a public GitHub repository. Keep protected Curravue products inside Whop.
