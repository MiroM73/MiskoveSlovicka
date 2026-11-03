# Miškove slovíčka

A PWA for practising English vocabulary, made for Miško, a Slovak 3rd-grade pupil. The family installs it on Android phones from GitHub Pages. The user writes in Slovak, so reply in Slovak.

Languages (the user's decision): the app UI, the CHANGELOG in `version.js` (shown in the app), GitHub release notes and README.md are in **Slovak**. Code, code comments, commit messages and this CLAUDE.md stay in **English**.

- Repo: https://github.com/MiroM73/MiskoveSlovicka (public, branch `main`). This folder is the repo root.
- Live: https://mirom73.github.io/MiskoveSlovicka/ (GitHub Pages builds from `main`; the "pages build and deployment" run takes about 1–2 minutes)
- No build step, no dependencies, no tests. Plain static files.

## Files

| Path | What it is |
|---|---|
| `index.html` | The whole app: inline CSS, word data, embedded audio, JS (~1.5 MB) |
| `version.js` | The app version, the single source (see Versioning) |
| `sw.js` | Service worker: offline cache (`CACHE` name from version.js + `FILES` list) |
| `manifest.webmanifest` | PWA manifest (name, icons, colors) |
| `fonts.css`, `fonts/` | Baloo 2 + Nunito, stored locally so the app works offline |
| `icons/` | App icons, maskable icons, favicon, apple-touch-icon |
| `skens/` | Textbook wordlist PDF (source of the words). In `.gitignore`, never pushed |

## index.html: careful when reading

One line holds `const AUDIO={...}`: base64 MP3 recordings, ~1.5 MB on a single line. Never read the whole file. Use Grep, or Read with `offset`/`limit`, and skip that line. Edit with exact-string Edit or a small Python script (`python -I`, UTF-8, `newline=''`).

The layout of the script, top to bottom:

- `G3SRC` = 3rd-grade words: `{unit: {lesson: "en|sk;en|sk;…"}}`. Units 1–10, Lessons 1, 3 and 5 each (8 + 6 + 4 = 18 words per unit, 180 in total). Built into `G3[unit] = [{en, sk, u, l}]`. Unit names are in `UN3`.
- `G2` = 2nd-grade words: `{unit: ["en|sk", …]}` built into `[{en, sk, u}]` (185 words, no lesson). Unit names are in `UN2`.
- `AUDIO` = `{englishWord: "data:audio/mpeg;base64,…"}` with 199 recordings, covering only the 2nd grade and 3rd-grade Unit 1 Lessons 1 and 3. `speak(t)` plays the recording or falls back to `speechSynthesis` (en-GB). New words get no recording; TTS covers them.
- `$()` element helper, `shuffle`, `norm` (lowercase, strips diacritics so "cafe" matches "café", normalises apostrophes and spaces).
- State: `tab` ("new" | "rev3" | "rev"), `step` (0–5), `done`, `learnUnits` (Set of 3rd-grade units picked in the first tab). `NEW()` returns the words of `learnUnits`.
- `unitChips(units, names, onChange)`: the "Všetky / Unit 1…10" multi-select chips, shared by all tabs.
- `render()` draws the tabs, the unit picker (`#pick`, first tab only), the step rail (`#rail`), and the current step or review screen.
- The six learning steps: `cards` (flashcards + word list), then `quiz(kind, dir, pool, distractPool, onDone, title, hint, reviewMode)` with kind = choose / listen / spell / write, and `match(pool, onDone)` (rounds of 7 pairs). If more than `BIG`=30 words are picked, steps 2–6 use a random `SAMPLE`=20.
- Quiz distractors exclude words with the same `en` or `sk` as the answer and duplicate option texts, because some English words repeat between grades with different meanings (chicken = sliepka / kuracina, skateboard).
- `finale()` runs after step 6 and offers the next unit when exactly one unit is picked.
- `REV` holds review settings per grade (`{units, mode, count, mix}`; count 0 = all). `reviewSetup(g)` draws "Opakovanie g. ročníka" for g = 2 or 3. In the 2nd-grade review, "mix" mixes in words from the 3rd-grade `learnUnits`; in the 3rd-grade review it mixes in the 2nd grade.
- The tabs in the HTML are `#t-new` "3. ročník", `#t-rev3` "Opakovanie 3. ročníka" and `#t-rev` "Opakovanie 2. ročníka".

The progress isn't saved anywhere (no storage); it resets on reload.

Design: one centered column (max 760px), CSS variables for light/dark theme (`prefers-color-scheme` + `data-theme`), and the Baloo 2 (display) and Nunito (body) fonts. Keep the existing style and compact one-liner JS idiom.

## Versioning and releasing

Current version: **1.1.0** (1.0.0 = all 10 units of the 3rd grade; 1.1.0 = update notice with a "Čo je nové" list).

`version.js` (`self.APP_VERSION = "X.Y.Z";` plus `self.CHANGELOG = [{version, date, changes:[…]}, …]`, newest first, changes written in Slovak for Miško and the family) is the **only** place the version lives in the files:
- `index.html` loads it in `<head>` and shows it in the subtitle (`#ver`).
- `sw.js` loads it with `importScripts("version.js")` and names its cache `slovicka-X.Y.Z`. Changing version.js is what makes phones install the new service worker (registered with `updateViaCache:"none"`). The install step fetches every file in `FILES` with `cache:"reload"`, so the new cache never gets stale HTTP-cached files.
- **Update notice**: on load and whenever the app becomes visible again, `checkUpdate()` fetches `version.js?check=<time>` with `cache:"no-store"` (`sw.js` lets any `?check` request go straight to the network) and runs the text with `new Function("self", text)(obj)` to read the online `APP_VERSION` and `CHANGELOG`, and compares versions with `newer()`. If the online version is newer, the `#upd` bar shows "Je dostupná nová verzia …", a "Čo je nové" list of every CHANGELOG entry newer than the local version, with **Aktualizovať** (`reg.update()`, waits for the new worker to activate, then `location.reload()`) and **Neskôr** (hides it until the next start).

Release steps: bump `APP_VERSION` and add a CHANGELOG entry in `version.js`, commit, add an annotated tag `vX.Y.Z`, `git push origin main --follow-tags`, then create a GitHub release: `gh release create vX.Y.Z -R MiroM73/MiskoveSlovicka --title "X.Y.Z" --notes "…"` (notes = the CHANGELOG entry). If you add a file the app needs, add it to `FILES` in `sw.js`.

Commit when asked or after finishing a change. Push only when the user asks. Pushing publishes to the family's phones.

Test the update flow with Playwright for Python and the installed Edge (`channel="msedge"`, `launch_persistent_context`, headless) against `python -m http.server` serving a copy of the site in the scratchpad: install, bump that copy's version.js, reopen, the bar appears, click it, check the version and caches. Phones on 1.0.0 (no check yet) pick up 1.1.0 on their second opening after deploy; that path was tested too.

## Tools on this machine (Windows, Git Bash)

- git is at `/c/Program Files/Git/cmd/git` and gh at `/c/Program Files/GitHub CLI/gh.exe`. Neither is on PATH. gh is logged in as MiroM73.
- There's no Node. Python 3.10 is available (`python -I`); PyMuPDF can be installed into the scratchpad with `pip install --target` for reading the PDF.
- Testing UI: headless Edge at `/c/Program Files (x86)/Microsoft/Edge/Application/msedge.exe`. Copy index.html to the scratchpad, append a `<script>` that clicks through the UI and writes a log into a `<pre id="TESTLOG">`, then run `--headless=new --dump-dom --virtual-time-budget=3000` and extract the log. `--screenshot` works too. Note that headless Edge enforces a ~492px minimum viewport, so the right edge looks cut off in a 412px screenshot; it isn't a real overflow.
- Check that Pages deployed: `gh run list -R MiroM73/MiskoveSlovicka -L 1`, then `curl` the live site and look for the new version string.

## Source PDF (`skens/Misko Ang jazyk slovna zasoba.pdf`)

The textbook "Wordlist / Slovná zásoba" pages, 6 pages in total:

- Pages 1–3 are the **2nd grade** (Units 1–10) plus a "Test yourself" box.
- Pages 4–6 are the **3rd grade** (Units 1–10) plus a "Test yourself" box.
- Page 2 and page 5 are scanned **upside down**. Render them rotated 180° (PyMuPDF `Matrix(3,3).prerotate(180)`, split into halves) to read them. Page 5 has its left edge cut off: Unit 5 Lessons 3 and 5 and Unit 6 Lesson 1 are missing first letters, which were filled in as bike, car, lorry, motorbike, train, van, chair lift, metro, taxi, tram, play badminton/chess/dominoes/Frisbee/hide and seek/ice hockey/table tennis.
- Long book translations were shortened to fit the buttons (e.g. "brush my hair" = "česať si vlasy", "bake cupcakes" = "piecť koláčiky", "rollerblade" = "korčuľovať sa na kolieskových korčuliach").

## History

- 2026-10-18: the original single-file HTML app was turned into a PWA in a `pwa/` subfolder; only 3rd-grade Unit 1 Lessons 1 and 3 (14 words) plus the 2nd-grade review.
- 2026-11-03: v1.1.0 adds `version.js` and the in-app update notice.
- 2026-11-03: v1.0.0. All 10 units of the 3rd grade, a unit picker, the 3rd-grade review tab, and "Všetky" in the review counts. The repo was flattened to this folder, the original HTML was deleted, and `skens/` was moved in and git-ignored.
