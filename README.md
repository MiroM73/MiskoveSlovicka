# Miškove slovíčka

A small app for practising English vocabulary, made for a Slovak 3rd-grade pupil. It covers all **10 units of the 3rd grade** and a review of all **10 units of the 2nd grade**. The app itself is in Slovak.

**▶ Open the app: https://mirom73.github.io/MiskoveSlovicka/**

It is a Progressive Web App (PWA): it runs in the browser, can be installed on a phone's home screen like a normal app, and works offline after the first visit. There are no accounts, ads or tracking.

## Features

- **180 words** from the 3rd grade, split into Unit 1–10, and **185 review words** from the 2nd grade
- **Recordings** of the 2nd-grade words and of Unit 1 (Lessons 1 and 3) of the 3rd grade, played when you tap the speaker. For the other words, or if a recording can't be played, the phone's English voice reads the word instead.
- **Six learning steps** that go from recognising a word to writing it
- **A review mode** for each grade where you pick the units, the type of exercise and the number of words
- **Works offline** once it has been opened with an internet connection
- **Light and dark mode**, following the phone's setting

## Installing

### Android (Chrome)

1. Open **https://mirom73.github.io/MiskoveSlovicka/** in **Chrome**.
2. Tap the **⋮** menu, then **Add to Home screen** and **Install** (some versions say **Install app**).
3. The **Slovíčka** icon appears on the home screen. Open the app once while online; after that it works without internet.

### iPhone / iPad (Safari)

1. Open the link in **Safari**.
2. Tap **Share** (the square with an arrow), then **Add to Home Screen**, then **Add**.

### Computer (Chrome or Edge)

Open the link and click the **Install** icon at the right end of the address bar. You can also just use the app in the browser without installing it.

## How to use it

The app has three tabs.

### 3. ročník (3rd grade)

At the top, pick the **units** to learn (one or more, or **Všetky** for all). Then work through the six steps in order. If more than 30 words are picked, steps 2–6 use a random set of 20 of them. After step 6 the app offers to continue with the next unit. The numbered buttons at the top show where you are, and you can jump to any step.

| Step | What you do |
|---|---|
| 1. **Kartičky** (flashcards) | Tap a card to turn it over and see the translation. **Vypočuj** plays the word. **Začínať po slovensky** shows the Slovak side first. |
| 2. **Vyber** (choose) | Read the English word and pick the Slovak translation from four options. |
| 3. **Počúvaj** (listen) | Listen to the word and pick its translation. |
| 4. **Spájaj** (match) | Tap an English word, then its Slovak translation, until all pairs are matched. |
| 5. **Poskladaj** (spell) | Put the English word together from the letter tiles. **⌫ Späť** removes the last letter. |
| 6. **Napíš** (write) | Type the English word. **Pomôcka** (hint) reveals the first letters. |

A word answered wrongly comes back later in the same round, up to three times. At the end of a round you see how many words were right on the first try and which words to practise again. **Len chyby** repeats only the mistakes.

### Opakovanie 3. ročníka / Opakovanie 2. ročníka (review)

Both review tabs work the same way:

1. Choose the **units** (Unit 1–10, or **Všetky** for all).
2. Choose the **exercise**: choose EN → SK, choose SK → EN, listen, spell or write.
3. Choose the **number of words** (10, 15, 25 or **Všetky** for all).
4. Optionally turn on mixing in a few words from the other grade (in the 2nd-grade review, from the units picked in the **3. ročník** tab).
5. Tap **Začať opakovanie**.

Below the settings there is a word list of all units of that grade.

### Good to know

- **Progress is not saved.** When the app is closed, it starts again from step 1.
- **No sound?** Check that the phone isn't on silent and that the media volume is turned up.
- **Updates.** The current version is shown under the title (e.g. *verzia 1.1.0*). When the app is opened online and a newer version has been published, a yellow bar says **Je dostupná nová verzia …** with **Aktualizovať** (downloads it and restarts the app) and **Neskôr** (hides the bar until the app is opened again). Even without tapping it, the app updates itself in the background within a couple of openings.

## Project structure

| File | Purpose |
|---|---|
| `index.html` | The whole app: layout, word lists, exercises and the embedded recordings |
| `manifest.webmanifest` | App name, icons and colours used when the app is installed |
| `version.js` | The app version. The page shows it, `sw.js` names its cache after it, and installed apps compare it with the online copy to offer an update |
| `sw.js` | Service worker that keeps a copy of the app on the device for offline use |
| `fonts.css`, `fonts/` | The Baloo 2 and Nunito fonts, stored locally so the app looks the same offline |
| `icons/` | App icons, including maskable versions for Android's icon shapes |

The site is published with GitHub Pages from the `main` branch.

### Changing the app

- Edit `index.html`, raise the version in `version.js` (e.g. `1.1.0` → `1.1.1`), then commit, tag (`v1.1.1`) and push. GitHub Pages publishes the change within a minute or two, and installed apps offer the update the next time they are opened.
- If you **add or rename a file** the app needs, also add it to the `FILES` list in `sw.js`.
