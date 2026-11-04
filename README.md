# Miškove slovíčka

Malá aplikácia na precvičovanie anglických slovíčok pre žiaka 3. ročníka. Obsahuje všetkých **10 unitov 3. ročníka** a opakovanie všetkých **10 unitov 2. ročníka**.

**▶ Otvoriť aplikáciu: https://mirom73.github.io/MiskoveSlovicka/**

Je to webová aplikácia (PWA): beží v prehliadači, dá sa nainštalovať na plochu telefónu ako bežná aplikácia a po prvom otvorení funguje aj bez internetu. Nemá účty, reklamy ani sledovanie.

## Čo aplikácia ponúka

- **180 slovíčok** z 3. ročníka rozdelených do Unit 1–10 a **185 slovíčok** na opakovanie z 2. ročníka
- **Nahrávky výslovnosti** slovíčok 2. ročníka a Unit 1 (Lesson 1 a 3) 3. ročníka, ktoré sa prehrajú po ťuknutí na reproduktor. Ostatné slovíčka, alebo keď sa nahrávka nedá prehrať, prečíta anglický hlas telefónu.
- **Šesť krokov učenia** od spoznania slovíčka až po jeho napísanie
- **Opakovanie** pre každý ročník s výberom unitov, druhu cvičenia a počtu slovíčok
- **Funguje bez internetu**, keď bola aplikácia aspoň raz otvorená online
- **Svetlý a tmavý režim** podľa nastavenia telefónu

## Inštalácia

### Android (Chrome)

1. Otvor **https://mirom73.github.io/MiskoveSlovicka/** v **Chrome**.
2. Ťukni na ponuku **⋮**, potom na **Pridať na plochu** a **Inštalovať** (niektoré verzie majú **Inštalovať aplikáciu**).
3. Na ploche sa objaví ikona **Slovíčka**. Aplikáciu raz otvor s internetom, potom už funguje aj bez neho.

### iPhone / iPad (Safari)

1. Otvor odkaz v **Safari**.
2. Ťukni na **Zdieľať** (štvorček so šípkou), potom na **Pridať na plochu** a **Pridať**.

### Počítač (Chrome alebo Edge)

Otvor odkaz a klikni na ikonu **Inštalovať** na pravom konci panela s adresou. Aplikáciu môžeš používať aj priamo v prehliadači bez inštalácie.

## Ako ju používať

Aplikácia má tri karty.

### 3. ročník

Hore vyber **unity**, ktoré sa chceš učiť (jeden, viac alebo **Všetky**). Potom prejdi šesť krokov po poradí. Pri viac ako 30 vybraných slovíčkach použijú kroky 2–6 náhodných 20 z nich. Po kroku 6 aplikácia ponúkne pokračovať ďalším unitom. Očíslované tlačidlá hore ukazujú, kde si, a na ktorýkoľvek krok sa dá preskočiť.

| Krok | Čo robíš |
|---|---|
| 1. **Kartičky** | Ťukni na kartičku, otočí sa a ukáže preklad. **Vypočuj** prehrá slovíčko. **Začínať po slovensky** ukáže najprv slovenskú stranu. |
| 2. **Vyber** | Prečítaj si anglické slovo a vyber slovenský preklad zo štyroch možností. |
| 3. **Počúvaj** | Vypočuj si slovo a vyber jeho preklad. |
| 4. **Spájaj** | Ťukni na anglické slovo a potom na jeho slovenský preklad, kým nespojíš všetky páry. |
| 5. **Poskladaj** | Poskladaj anglické slovo z písmen. **⌫ Späť** vráti posledné písmeno. |
| 6. **Napíš** | Napíš anglické slovo. **Pomôcka** ukáže prvé písmená. |

Slovíčko zodpovedané zle sa v tom istom kole vráti neskôr, najviac trikrát. Na konci kola vidíš, koľko slovíčok bolo správne na prvý pokus a ktoré si treba zopakovať. **Len chyby** zopakuje iba chybné slovíčka.

### Opakovanie 3. ročníka / Opakovanie 2. ročníka

Obe karty opakovania fungujú rovnako:

1. Vyber **unity** (Unit 1–10 alebo **Všetky**).
2. Vyber **spôsob**: Vyber EN → SK, Vyber SK → EN, Počúvaj a vyber, Poskladaj z písmen alebo Napíš po anglicky.
3. Vyber **počet** slovíčok (10, 15, 25 alebo **Všetky**).
4. Ak chceš, zapni primiešanie niekoľkých slovíčok z druhého ročníka (pri opakovaní 2. ročníka sa berú z unitov vybraných v karte **3. ročník**).
5. Ťukni na **Začať opakovanie**.

Pod nastaveniami je slovníček všetkých unitov daného ročníka.

### Dobré vedieť

- **Postup sa neukladá.** Po zatvorení aplikácia začína znova od kroku 1.
- **Zväčšenie a zmenšenie.** Na počítači **Ctrl + koliesko myši** (alebo **Ctrl +** a **Ctrl −**, **Ctrl 0** vráti 100 %), na telefóne a tablete roztiahni alebo stiahni **dva prsty**. Ide to od 50 % do 250 %, text sa vždy zalomí na šírku obrazovky. Veľkosť si aplikácia zapamätá; kým nie je 100 %, vpravo dole je malé tlačidlo s lupou, ktoré ju vráti späť.
- **Nejde zvuk?** Skontroluj, či telefón nie je stlmený a či je zapnutá hlasitosť médií.
- **Aktualizácie.** Aktuálna verzia je pod nadpisom (napr. *verzia 1.1.0*). Keď aplikáciu otvoríš online a je zverejnená novšia verzia, objaví sa žltá lišta **Je dostupná nová verzia …** so zoznamom **Čo je nové** od verzie v telefóne. **Aktualizovať** stiahne novú verziu a aplikáciu reštartuje, **Neskôr** lištu skryje do ďalšieho otvorenia. Aj bez ťuknutia sa aplikácia sama aktualizuje na pozadí v priebehu niekoľkých otvorení.

## Štruktúra projektu

| Súbor | Na čo slúži |
|---|---|
| `index.html` | Celá aplikácia: rozloženie, zoznamy slovíčok, cvičenia a vložené nahrávky |
| `manifest.webmanifest` | Názov, ikony a farby aplikácie pri inštalácii |
| `version.js` | Verzia aplikácie a zoznam zmien (`CHANGELOG`). Stránka zobrazuje verziu, `sw.js` podľa nej pomenuje cache a nainštalované aplikácie ju porovnávajú s online verziou, aby ponúkli aktualizáciu |
| `sw.js` | Service worker, ktorý drží kópiu aplikácie v zariadení na použitie bez internetu |
| `fonts.css`, `fonts/` | Písma Baloo 2 a Nunito uložené lokálne, aby aplikácia vyzerala rovnako aj offline |
| `icons/` | Ikony aplikácie vrátane verzií pre tvary ikon v Androide |
| `CLAUDE.md` | Poznámky k projektu pre Claude Code (po anglicky) |

Stránka sa zverejňuje cez GitHub Pages z vetvy `main`.

### Úprava aplikácie

1. Uprav `index.html`.
2. V `version.js` zvýš verziu (napr. `1.1.0` → `1.1.1`) a na začiatok `CHANGELOG` pridaj nový záznam po slovensky (zobrazí sa v aplikácii).
3. Urob commit, tag (`v1.1.1`) a push (`git push origin main --follow-tags`) a vytvor GitHub release s rovnakými novinkami.
4. GitHub Pages zverejní zmenu do minúty či dvoch a nainštalované aplikácie ponúknu aktualizáciu pri ďalšom otvorení.

Ak **pridáš alebo premenuješ súbor**, ktorý aplikácia potrebuje, doplň ho aj do zoznamu `FILES` v `sw.js`.
