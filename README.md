# Online Keel Website

Project label: **OKW8/31/26**

Launch-ready source for [onlinekeel.com](https://onlinekeel.com), built with Next.js and configured for Netlify.

## Deploy with Netlify

1. In Netlify, choose **Add new project** → **Import an existing project**.
2. Select this GitHub repository.
3. Netlify will use the included `netlify.toml` configuration:
   - Build command: `npm run build`
   - Publish directory: `.next`
4. Deploy, then connect `onlinekeel.com` in Netlify's domain settings.

## Local development

```bash
npm ci
npm run dev
```

The production site contains Home, Services, Work, Process, About, and Contact pages.
