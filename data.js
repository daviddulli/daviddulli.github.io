/*
  ============================================================
  DATELE TALE — editează direct aici.
  Nu trebuie să atingi index.html, style.css sau script.js.
  ============================================================

  Pentru fiecare proiect:
  - title       : denumirea proiectului
  - category    : categoria (apare și ca filtru — folosește denumiri scurte)
  - year        : anul (apare în cartuș)
  - description : 1-2 propoziții despre proiect
  - calcPdf     : calea către PDF-ul cu calculul de dimensionare (sau "" dacă nu ai)
  - drawingPdf  : calea către PDF-ul cu planșele (sau "" dacă nu ai)

  Pune fișierele PDF în folderul /pdfs și scrie aici calea relativă,
  ex: "pdfs/hala-metalica-calcul.pdf"
*/

const PROJECTS = [
  {
    title: "Lucrare de Diplomă: Plan de Mobilitate Urbană Durabilă în Municipiul Marghita",
    category: ["Inginerie de trafic", "Mobilitate urbană"],
    year: "2026",
    description: "Analiza situației și al contextului strategic existent, studiu de trafic, model de trafic, determinare indicatori PMUD, elaborare strategii și proiecte.",
    calcPdf: "pdfs/Licenta-p-scrisa.pdf",
    drawingPdf: "pdfs/Licenta-p-desenat.pdf"
  },
  {
    title: "Mobilitate și Formă Urbană - Proiect",
    category: ["Mobilitate urbană"],
    year: "2026",
    description: "Localizare spațială, analiză socioeconomică, analiza infrastructurii și facilităților de transport, izocrone de mobilitate.",
	calcPdf: "",
    drawingPdf: "pdfs/MFU-postere.pdf"
  },
  {
    title: "Raport evaluare apartament cu două camere - Proiect",
    category: ["Evaluări imobiliare"],
    year: "2026",
    description: "Evaluarea imobiliară a unui apartament cu 2 camere situat în Cluj-Napoca (str. Grigore Alexandrescu), în conformitate cu standardele ANEVAR.",
    calcPdf: "pdfs/EI-tot.pdf",
	drawingPdf: ""
  },
  {
    title: "Pasarelă pietonală pe grinzi cu zăbrele - Proiect",
    category: ["Lucrări de artă"],
    year: "2026",
    description: "Evaluarea încărcărilor și a solicitărilor, determinarea solicitărilor de calcul, dimensionarea structurii de rezistență.",
    calcPdf: "pdfs/CM-p-scrisa.pdf",
    drawingPdf: "pdfs/CM-p-desenata.pdf"
  },
  {
    title: "Zid de sprijin în debleu din zidărie de piatră - Proiect",
    category: ["Fundații", "Drumuri"],
    year: "2025",
    description: "Proiectare zid de sprijin din zidărie de piatră pentru în debleu.",
    calcPdf: "pdfs/FZS-p-scrisa.pdf",
    drawingPdf: "pdfs/FZS-p-desenata.pdf"
  },
  {
    title: "Fundații continue rigide - Proiect",
    category: ["Fundații", "Clădiri"],
    year: "2025",
    description: "Proiectare fundație continuă rigidă pentru o clădire.",
    calcPdf: "pdfs/FC-p-scrisa.pdf",
    drawingPdf: "pdfs/FC-p-desenata.pdf"
  },
  {
    title: "Fundații izolate - Proiect",
    category: ["Fundații", "Clădiri"],
    year: "2026",
    description: "Proiectare fundații izolate rigide pentru structură de rezistență dată.",
    calcPdf: "FI-p-scrisa.pdf",
    drawingPdf: "FI-p-desenata.pdf"
  },
  {
    title: "Proiectare linie de tramvai pe str. Plopilor din Municipiul Cluj-Napoca - Proiect",
    category: ["Tramvai, metrou", "Drumuri", "Mobilitate urbană"],
    year: "2025",
    description: "Proiectare linie de tramvai pe str. Plopilor din Municipiul Cluj-Napoca - amenajare stradă - relocare linie existentă, proiectare stație de tramvai și piste de biciclete.",
    calcPdf: "pdfs/PITM-p-scrisa.pdf",
    drawingPdf: "pdfs/PITM-p-desenata.pdf"
  },
  {
    title: "Proiectare tunel metrou - Proiect",
    category: ["Tramvai, metrou", "Mobilitate urbană"],
    year: "2025",
    description: "Proiectare secțiune circulară tunel utilizând Metoda Protodiakonov",
    calcPdf: "pdfs/CSU-p-scrisa.pdf",
    drawingPdf: "pdfs/CSU-p-desenata.pdf"
  },
  {
    title: "Analiza transportului public al Municipiului Carei - Proiect",
    category: ["Mobilitate urbană"],
    year: "2025",
    description: "Analiza și digitalizarea situației existente, analiză spațială",
    calcPdf: "pdfs/GTP-p-scrisa.pdf",
    drawingPdf: "pdfs/GTP-p-desenata.pdf"
  },
  {
    title: "Trafic și siguranța circulației - Proiect",
    category: ["Mobilitate urbană", "Inginerie de trafic"],
    year: "2025",
    description: "Numărători de trafic, modelare intersecție(VISSIM) - Str. Louis Pasteur x Str. Iuliu Moldovan din Municipiul Cluj-Napoca, analiza accidentelor din Municipiul Marghita 2015-2022",
    calcPdf: "pdfs/TSC-p-scrisa.pdf",
    drawingPdf: "pdfs/TSC-p-desenata.pdf"
  },
   {
    title: "Modernizarea Str. Piersicului din Municipiul Turda - Proiect",
    category: ["Mobilitate urbană", "Drumuri", "Inginerie de trafic"],
    year: "2025",
    description: "Proiectare pasarelă pietonală cu structură de rezistență pe grinzi principale și proiectare pod rutier oțel-beton în ACOBRI.",
    calcPdf: "pdfs/BPS-p-scrisa.pdf",
    drawingPdf: "pdfs/BPS-p-desenata.pdf"
  },
  {
    title: "Proiectare structură de rezistență clădire cu regim de înălțime P - Proiect",
    category: ["Clădiri"],
    year: "2025",
    description: "Evaluarea încărcărilor, dimensionare elemente structurale, armare și cofrare elemente structurale.",
    calcPdf: "pdfs/BAP-p-scrisa.pdf",
    drawingPdf: "pdfs/BAP-p-desenata.pdf"
  },
  {
    title: "Modernizarea sistemului de iluminat public pe Str. Republcii din Municipiul Cluj-Napoca - Proiect",
    category: ["Lucrări edilitare"],
    year: "2025",
    description: "Întocmire caiet de sarcini, modelare Dialux",
    calcPdf: "pdfs/REI-p-scrisa.pdf",
    drawingPdf: ""
  },
   {
    title: "Proiectare locuință unifamilială S+P+E - Proiect",
    category: ["Clădiri"],
    year: "2025",
    description: "Proiectare locuință unifamilială cu regim de înălțime S+P+E având structura de rezistență din zidărie portantă.",
    calcPdf: "pdfs/C-p-scrisa.pdf",
    drawingPdf: "pdfs/C-p-desenata.pdf"
  },
   {
    title: "Analiza unei parcări în exploatare - Negoiu 2A, Cluj-Napoca - Proiect",
    category: ["Inginerie de trafic", "Mobilitate urbană"],
    year: "2024",
    description: "Documentare situație și amenajare existentă.",
    calcPdf: "pdfs/AOE-p-scrisa.pdf",
    drawingPdf: ""
  },
   {
    title: "Dimensionarea unui sistem de gestiune a deșeurilor - Proiect",
    category: ["Managementul deșeurilor"],
    year: "2025",
    description: "Analiză microzonă, calcul cantități de deșeuri, amplsare puncte de colectare, transportul deșeurilor, analiza costurilor.",
    calcPdf: "pdfs/MD-p-scrisa.pdf",
    drawingPdf: "pdfs/MD-p-desenata.pdf"
  },
     {
    title: "Antemăsurătoare casă unifamilială - Proiect",
    category: ["Ofertare"],
    year: "2025",
    description: "Realizare antemăsurători în InterSoft.",
    calcPdf: "pdfs/M-p-scrisa.pdf",
    drawingPdf: "pdfs/M-p-desenata.pdf"
  }
];

const SKILLS = [
  { group: "Calcul structural clădiri", name: "MathCAD, AxisVM" },
  { group: "Calcul structură rutieră", name: "Calderom 2000" },
  { group: "Calcul structură lucrări de artă", name: "Acobri, SAP2000, MathCad" },
  { group: "Proiectare", name: "AutoCAD + Civil Site Design" },
  { group: "Modelare spațială", name: "ArcGIS Pro, VISSIM" },
  { group: "Ofertare", name: "InterSoft" },
  { group: "Lucrări edilitare", name: "DiaLux" },
  { group: "Prelucrare și analiză date", name: "MS Excel (Data analysis)" }
];
