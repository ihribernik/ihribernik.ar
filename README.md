# ihribernik.ar

Bilingual personal portfolio built with Astro, TypeScript, and Tailwind CSS. Spanish is served at `/` and English at `/en/`; the production output is fully static and served by nginx.

## Local development

```bash
npm ci
npm run dev
```

Astro starts at `http://localhost:4321`. Other validation commands:

```bash
npm run lint
npm run check
npm run build
npm run test:e2e
```

Install Chromium once before running browser tests locally:

```bash
npx playwright install chromium
```

To exercise the production container, run `docker compose up --build` and open `http://localhost:3000`.

## Content

Future projects and articles are typed Astro Content Collections. Add Markdown or MDX files below `src/content/projects/{es,en}/` or `src/content/writing/{es,en}/`. Entries default to draft status and do not generate public pages until `draft: false` is set. See `src/content.config.ts` for required frontmatter.

Spanish project and article URLs use `/proyectos/` and `/articulos/`; English URLs use `/en/projects/` and `/en/writing/`. Set the same optional `translationKey` on related entries to enable alternate-language metadata.

## Production

Pushes to `main` run linting, type checks, a static build, and Chromium smoke tests. GitHub Actions then publishes `ghcr.io/ihribernik/ihribernik.ar:sha-<commit>` and deploys it to the VPS through the external `proxy` network. The deployment verifies both localized homepages and rolls back on failure.

Required `production` environment secrets are `VPS_HOST`, `VPS_USER`, `VPS_SSH_PRIVATE_KEY`, and `VPS_KNOWN_HOSTS`; `VPS_SSH_PORT` defaults to `22`. Manual rollback uses the **Build and deploy** workflow with an existing `sha-<40-character-commit>` image tag.
