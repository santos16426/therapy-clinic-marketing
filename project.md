# clinic-marketing — Sunshine Learning Hub

Public marketing site for Sunshine Learning Hub (Angeles City). Static Next.js App Router landing page. No auth, no API calls.

## Job

Convert visitors into inquiries (call / visit). Product name + programs + location + sample day + CTA.

## Stack

| Piece | Choice |
| --- | --- |
| Framework | Next.js **14.2** App Router (`output: "standalone"`) |
| UI | Custom CSS (`app/globals.css`), Google fonts (Fraunces / Caveat / DM Sans) |
| Motion | GSAP + ScrollTrigger, Motion, Lenis |
| 3D | Three.js via `@react-three/fiber` + `@react-three/drei` |
| Package manager | npm |
| Deploy | Railway Dockerfile → production only |

## Routes

| Path | Notes |
| --- | --- |
| `/` | Single-page marketing composition (Hero → Programs → Place → Day → Voices → CTA) |

No other app routes. No env secrets required at runtime.

## Commands

```bash
npm install
npm run dev      # http://localhost:3000
npm run build
npm start        # after build; or `node server.js` from standalone output
```

## Git & deploy

- Remote: `https://github.com/santos16426/therapy-clinic-marketing.git`
- **Production only** — no UAT/develop Railway envs for this site (same content everywhere).
- Default branch: `main`. Railway production watches `main`.
- Custom domain: `sunshine-learning.com` (+ `www` if attached)
- Railway project: same Sunshine / `diplomatic-vision` project as API + backoffice; service `clinic-marketing`
- Guide: [`../docs/GIT-AND-DEPLOY.md`](../docs/GIT-AND-DEPLOY.md)

## Constraints

- No PHI, no clinic API coupling
- Photo placeholders in `components/Place.jsx` — swap for real images under `public/` when ready
- Sample parent quotes in `lib/data.js` — replace before claiming as testimonials
- Do not invent metrics or social proof beyond what `lib/data.js` already ships as sample copy
