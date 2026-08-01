# ihribernik.ar

Personal portfolio built with React, TypeScript, Vite, Tailwind CSS, and nginx.

## Local development

```bash
npm ci
npm run dev
```

Local production container:

```bash
docker compose up --build
```

Open `http://localhost:3000`.

## Production

Production URL: `https://ihribernik.ar`. Traefik runs as shared VPS ingress and routes traffic to this app through external Docker network `proxy`. Portfolio publishes no host port.

Deployment flow:

1. Push to `main` runs lint and build.
2. GitHub Actions publishes `ghcr.io/ihribernik/ihribernik.ar:sha-<commit>`.
3. Workflow copies production Compose manifest to VPS.
4. VPS pulls exact SHA and waits for healthy container.
5. Failed health or public request restores previous SHA.

Create GitHub environment named `production` with secrets:

- `VPS_HOST`
- `VPS_USER` (`deploy`)
- `VPS_SSH_PRIVATE_KEY`
- `VPS_KNOWN_HOSTS`

Set environment variable `VPS_SSH_PORT` to `22`. Record `VPS_KNOWN_HOSTS` from trusted VPS host-key fingerprint, not from an unverified deployment connection.

First GHCR publication may require package visibility changed to public in GitHub package settings. Production VPS then pulls anonymously.

Manual rollback: run **Build and deploy** workflow with an existing `sha-<40-character-commit>` image tag.

Shared Traefik configuration and VPS bootstrap instructions live in [`ihribernik/ihribernik-vps`](https://github.com/ihribernik/ihribernik-vps), keeping ingress lifecycle separate from portfolio releases.
