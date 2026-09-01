# Deploying Online Keel

This package is configured for Netlify as a Next.js site.

## Recommended: GitHub + Netlify

1. Unzip this folder.
2. Create a GitHub repository and upload the folder contents, not the outer ZIP file.
3. In Netlify, choose **Add new project** and **Import an existing project**.
4. Connect the GitHub repository.
5. Netlify should read the included `netlify.toml` automatically:
   - Build command: `npm run build`
   - Publish directory: `.next`
6. Deploy the site.
7. In Netlify's domain settings, connect `onlinekeel.com` and follow its DNS instructions.

## Before the public launch

- Confirm that `hello@onlinekeel.com` exists. The inquiry form opens an email draft addressed to it.
- Replace any pricing or wording you want changed.
- Test every page on a phone and desktop.
- Keep the domain and Netlify billing in the owner's account.

Do not use Netlify's manual drag-and-drop area for this source ZIP. Connect the project through Git so Netlify can install dependencies and build the Next.js application.
