# Open AR Cloud Website

The public website for the Open AR Cloud Association, hosted at [openarcloud.github.io](https://openarcloud.github.io).

Built with [Eleventy (11ty)](https://www.11ty.dev/) and deployed to GitHub Pages.

## Project Structure

```
src/
  _includes/layouts/
    base.njk          # Main layout template (header, nav, footer)
  css/
    style.css         # All site styles
  img/                # Images and headshots
  index.md            # Homepage
  platform.md         # OSCP Platform overview
  about.md            # About, team members
  partners.md         # Partners listing
  github.md           # GitHub repos listing
  contact.md          # Contact info and form
  testbeds.md         # Testbed program
  oscp/               # OSCP demo/tutorial pages
```

All content pages are Markdown with a YAML front matter block specifying the layout:

```yaml
---
layout: layouts/base.njk
title: Page Title
---
```

## Local Development

```bash
# Install dependencies
npm install

# Start local dev server (http://localhost:8080)
npm run serve

# Build for production
npm run build

# Clean build output
npm run clean
```

## Making Content Changes

1. Edit the relevant `.md` file in `src/`.
2. For layout or navigation changes, edit `src/_includes/layouts/base.njk`.
3. For styling changes, edit `src/css/style.css`.
4. Images go in `src/img/`.

## Deploying to Live

The site deploys automatically when changes are pushed to the `main` branch.

### If you're editing directly on GitHub

1. Navigate to the file you want to change on [github.com/OpenArCloud/openarcloud.github.io](https://github.com/OpenArCloud/openarcloud.github.io).
2. Click the pencil icon to edit.
3. Make your changes and click **Commit changes** (commit directly to `main`).
4. The site will rebuild and deploy automatically within a few minutes.

### If you're working locally

```bash
git checkout main
git pull origin main

# Make your changes...

git add <changed-files>
git commit -m "Description of changes"
git push origin main
```

The GitHub Actions workflow (`.github/workflows/deploy.yml`) will build the site and deploy it. You can monitor the deployment at [Actions](https://github.com/OpenArCloud/openarcloud.github.io/actions).

### If you're working on a branch (recommended for larger changes)

```bash
git checkout -b my-changes
# Make your changes, commit them...
git push -u origin my-changes
```

Then create a Pull Request on GitHub and merge it to `main`. The site deploys after the merge.

## Deployment Details

- **Hosting**: GitHub Pages
- **Build tool**: Eleventy 3.x
- **Node version**: 20
- **Deploy action**: `peaceiris/actions-gh-pages@v3`
- **Build output**: `_site/` (generated, gitignored)
- **Deploy branch**: `gh-pages` (managed automatically by the deploy action)

After pushing to `main`, allow 2-3 minutes for the build and CDN propagation. If changes don't appear, try a hard refresh (Ctrl+Shift+R / Cmd+Shift+R).
