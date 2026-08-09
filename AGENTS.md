<!-- BEGIN:nextjs-agent-rules -->
# This is NOT the Next.js you know

This version has breaking changes — APIs, conventions, and file structure may all differ from your training data. Read the relevant guide in `node_modules/next/dist/docs/` before writing any code. Heed deprecation notices.
<!-- END:nextjs-agent-rules -->

## Cursor Cloud specific instructions

This is a single Next.js 16.2.1 landing page (not a monorepo). No databases, APIs, auth, or external services are required.

### Services

| Service | Command | Notes |
|---|---|---|
| Dev server | `npm run dev` | Serves on `localhost:3000`. Uses Turbopack. |

### Common commands

See `package.json` scripts — standard Next.js commands:
- **Lint:** `npm run lint` (ESLint 9)
- **Build:** `npm run build`
- **Dev:** `npm run dev`

### Caveats

- The project uses **Next.js 16** with the App Router and Turbopack — some APIs differ from earlier Next.js versions. Consult `node_modules/next/dist/docs/` before making changes.
- No `.env` files are needed; there are no environment variables to configure.
- The static asset `/public/card-image.png` is present in the repo and renders a photo card with neon glow effects.
