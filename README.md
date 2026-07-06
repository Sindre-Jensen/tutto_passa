# Tutto Passa

A premium Mediterranean lifestyle site — curated destinations, editorial stories, rankings, and slow living.

Built with **Next.js 16**, **MDX content files**, and **Tailwind CSS**. No CMS required.

## Quick start

```bash
npm install
cp .env.example .env.local   # then fill in values
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Environment variables

| Variable | Required | Purpose |
|----------|----------|---------|
| `NEXT_PUBLIC_SITE_URL` | Production | Sitemap and social share URLs |
| `BUTTONDOWN_API_KEY` | Production | Newsletter subscriber storage |
| `NEWSLETTER_DEV_MODE` | Local only | Set `true` to test form without Buttondown |

See [`.env.example`](.env.example) for details.

## Deploy (Vercel)

1. Push this repo to GitHub
2. Import at [vercel.com/new](https://vercel.com/new)
3. Add environment variables in Vercel project settings
4. Connect your domain in Vercel → Domains

Full guide: [`docs/OPERATIONS.md`](docs/OPERATIONS.md)

## Edit content

| What | Where |
|------|-------|
| City guides | `content/destinations/*.mdx` + scores in `content/rankings/coastal-towns.json` |
| Journal articles | `content/stories/*.mdx` |
| Rankings | `content/rankings/*.json` |
| Pulse bubble quotes/facts | `content/pulse/*.json` |
| Images | `public/images/` |
| Hero video | `public/videos/hero.mp4` |
| Social links | `lib/site-config.ts` |
| Philosophy page | `app/philosophy/page.tsx` |

## Scripts

```bash
npm run dev      # local preview
npm run build    # production build test
npm run start    # run production build locally
npm run lint     # ESLint
```

## Design system

See [`references/design-analysis.md`](references/design-analysis.md) for brand tokens and UI principles.

## Documentation

- **[Operations guide](docs/OPERATIONS.md)** — launch checklist, content templates, troubleshooting
- **New to this?** Start with the [Operations guide](docs/OPERATIONS.md) — written for beginners.
