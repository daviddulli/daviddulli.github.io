# Portofoliu de inginerie civilă

Site static (HTML/CSS/JS simplu, fără build) pentru portofoliul tău de proiecte
de facultate — calcule de dimensionare + planșe PDF.

## Structură

```
index.html      → structura paginii
style.css       → tot stilul vizual
data.js         → AICI îți editezi proiectele și competențele
script.js       → logica (filtre, cartuș, vizualizare PDF) — nu trebuie s-o atingi
pdfs/           → pune aici fișierele tale PDF (calcule + planșe)
```

## 1. Editează-ți datele

Deschide `data.js` și înlocuiește proiectele din `PROJECTS` cu ale tale.
Pentru fiecare proiect completezi: titlu, categorie, an, descriere scurtă,
și calea către PDF-uri (le pui în folderul `pdfs/`).

Dacă un proiect nu are încă PDF de calcul sau de planșe, lasă câmpul `""`
(gol) — butonul apare dezactivat automat, nu dă eroare.

Categoriile din filtre se generează automat din câmpul `category` al
proiectelor — nu trebuie să le declari separat nicăieri.

În `SKILLS` îți pui programele/competențele tale (AutoCAD, Etabs etc.).

Editează și:
- `index.html` — numele tău (apare de 3 ori: titlu pagină, header, cartuș),
  textul din secțiunea hero, și datele de contact din secțiunea `#contact`.

## 2. Adaugă PDF-urile

Copiază fișierele PDF cu calculele și planșele tale în folderul `pdfs/`.
Recomandare: nume scurte, fără diacritice sau spații —
ex: `hala-metalica-calcul.pdf`, `hala-metalica-plansa.pdf`.

**Atenție la dimensiune:** planșele scanate la rezoluție mare pot fi PDF-uri
grele (zeci de MB). Pentru site, ideal sub 5-10 MB per fișier — poți
comprima cu unelte gratuite online (ex. caută „compress pdf”) dacă e nevoie.

## 3. Testează local (opțional)

Deschide `index.html` direct în browser, sau, pentru comportament identic
cu ce va fi online, rulează un mic server local din folder:

```
python3 -m http.server 8000
```

apoi deschide `http://localhost:8000` în browser.

## 4. Publică pe GitHub Pages

1. Creează un repo nou pe GitHub (public), ex. `portofoliu-inginerie`.
2. Încarcă tot conținutul acestui folder în repo (inclusiv `pdfs/`).
   - Din linia de comandă:
     ```
     git init
     git add .
     git commit -m "Portofoliu inginerie civilă"
     git branch -M main
     git remote add origin https://github.com/NUME_UTILIZATOR/portofoliu-inginerie.git
     git push -u origin main
     ```
   - Sau: pe pagina repo-ului, "Add file" → "Upload files", tragi folderele.
3. În repo, mergi la **Settings → Pages**.
4. La „Build and deployment", alege sursa **Deploy from a branch**,
   branch **main**, folder **/ (root)** → Save.
5. După 1-2 minute, site-ul e live la:
   `https://NUME_UTILIZATOR.github.io/portofoliu-inginerie/`

## Observații

- Fără cont GitHub Pro necesar — funcționează gratuit pe cont normal, cât timp
  repo-ul e public (sau chiar privat, dacă ai GitHub Pro/Team).
- Dacă vrei alt nume de domeniu decât `github.io`, poți adăuga ulterior un
  domeniu propriu din aceleași setări **Settings → Pages → Custom domain**.
- Site-ul e complet responsive (funcționează și pe mobil) și respectă
  preferința de reducere a animațiilor din sistemul de operare.
