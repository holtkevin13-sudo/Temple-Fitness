# Temple Fitness

A gentle, growing fitness companion — **Strength · Grace · Endurance**.

A private, installable web app (PWA). All data stays on the device. Works offline.

## What's inside
- **index.html** — the entire app (self-contained; works even on its own)
- **sw.js** — service worker for offline use
- **manifest.webmanifest** — install metadata (name, colors, icons)
- **icons/** — app icons, favicons, and social-share image

## How to host (GitHub Pages)
1. Create a new repository (e.g. `Temple-Fitness`).
2. Upload **all** these files and the **icons** folder to the repo root, keeping the structure:
   ```
   index.html
   sw.js
   manifest.webmanifest
   icons/...
   ```
3. In the repo: **Settings → Pages → Build from branch → main / root → Save**.
4. Wait ~1 minute, then open the Pages URL on her phone.

## Add to her phone (iPhone)
1. Open the site in **Safari**.
2. Tap **Share** → **Add to Home Screen** → **Add**.
3. It launches full-screen with the plum dumbbell icon. Works offline after first open.

> If the home-screen icon ever shows a plain letter, delete it and re-add from Safari (iOS caches the first icon).

## The app
- **Today** — opens to one clear workout with a gentle "how are you feeling?" check and a momentum marker. A 5-minute Never-Zero option is always there.
- **Train** — This Week (Ignite / Sculpt / Flow), The Plan (the full year), Workouts (extra picks), and **Together** (Mom + Nolan team challenges).
- **Progress** — Baseline test (push-ups, squats, lunges, plank), Body check-ins (energy/mood first; weight de-emphasized; no photos), Nolan, and Settings (set the default starting level).
- **Log** — workout history and a "Wins to Celebrate" list.
- **Manual** — her Creed, the four pillars, the journey, and scripture trail markers.

### Designed for her
- Three levels per workout (**Foundation / Standard / Challenge**), defaulting to a **settable** starting level that she raises as she grows.
- Every plyo move shows a **low-impact swap** for tired days.
- A short **guided warm-up** before each workout; the session is split into clear stages (Warm-Up → The Work → Finish).
- Nolan's moves appear in kid-friendly language automatically.
- The plan progresses gently over a full year, then retests and begins again a little stronger.

Built with care. 🟣
