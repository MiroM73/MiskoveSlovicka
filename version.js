// The app version and what changed in each version, newest first. The only place to change it:
// the page shows the version, sw.js names its cache after it, and installed apps read the online
// copy of this file to offer an update and list the changes made since their own version.
self.APP_VERSION = "1.3.0";
self.CHANGELOG = [
  { version: "1.3.0", date: "2026-11-04", changes: [
    "Zväčšenie a zmenšenie: na počítači Ctrl + koliesko myši (alebo Ctrl + a Ctrl −), na telefóne a tablete dvoma prstami.",
    "Veľkosť sa zapamätá; malé tlačidlo s lupou vpravo dole ju vráti na 100 %."
  ]},
  { version: "1.2.0", date: "2026-11-03", changes: [
    "Všetky slovíčka (aj z 2. ročníka a z Unit 1) teraz číta rovnaký hlas ako nové slovíčka.",
    "Aplikácia je oveľa menšia, takže sa rýchlejšie stiahne a aktualizuje."
  ]},
  { version: "1.1.0", date: "2026-11-03", changes: [
    "Aplikácia sama upozorní, keď je dostupná nová verzia, a ukáže, čo je v nej nové.",
    "Aktualizácia jedným ťuknutím na Aktualizovať."
  ]},
  { version: "1.0.0", date: "2026-11-03", changes: [
    "Všetkých 10 unitov 3. ročníka (180 slovíčok).",
    "V karte 3. ročník sa dá vybrať jeden unit, viac unitov alebo všetky.",
    "Nová karta Opakovanie 3. ročníka.",
    "Pri opakovaní sa dá vybrať aj počet Všetky.",
    "Pod nadpisom je vidno číslo verzie."
  ]}
];
