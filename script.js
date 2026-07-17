document.getElementById('year').textContent = new Date().getFullYear();

/* ---------- Filtre + grid de proiecte ---------- */
const grid = document.getElementById('project-grid');
const filtersEl = document.getElementById('filters');

// Acceptă atât "category: ['A','B']" cât și vechiul format "category: 'A'"
function getCategories(p){
  return Array.isArray(p.category) ? p.category : [p.category];
}

const categories = ["Toate", ...new Set(PROJECTS.flatMap(p => getCategories(p)))];
let activeCategory = "Toate";

function renderFilters(){
  filtersEl.innerHTML = "";
  categories.forEach(cat => {
    const btn = document.createElement('button');
    btn.className = "filter-chip" + (cat === activeCategory ? " is-active" : "");
    btn.textContent = cat;
    btn.addEventListener('click', () => {
      activeCategory = cat;
      renderFilters();
      renderProjects();
    });
    filtersEl.appendChild(btn);
  });
}

function linkOrDisabled(href, label){
  if(!href){
    return `<span style="opacity:.35; cursor:not-allowed; flex:1; text-align:center; padding:10px 8px; font-family:var(--mono); font-size:12px; border-right:1px solid var(--ink); background:var(--paper);">${label}</span>`;
  }
  return `<a href="${href}" data-pdf="${href}" data-label="${label}">${label}</a>`;
}

function renderProjects(){
  const list = PROJECTS.filter(p => activeCategory === "Toate" || getCategories(p).includes(activeCategory));
  grid.innerHTML = "";
  list.forEach((p, i) => {
    const card = document.createElement('article');
    card.className = "project-card";
    card.innerHTML = `
      <div class="project-card__top">
        <div class="project-card__cat">${getCategories(p).join(" · ")}</div>
        <h3 class="project-card__title">${p.title}</h3>
        <p class="project-card__desc">${p.description}</p>
      </div>
      <div class="project-card__cartus">
        <div><span>Nr.</span>${String(i+1).padStart(2,'0')}</div>
        <div><span>An</span>${p.year}</div>
      </div>
      <div class="project-card__links">
        ${linkOrDisabled(p.calcPdf, "Partea scrisă")}
        ${linkOrDisabled(p.drawingPdf, "Partea desenată")}
      </div>
    `;
    grid.appendChild(card);
  });

  grid.querySelectorAll('a[data-pdf]').forEach(a => {
    a.addEventListener('click', (e) => {
      e.preventDefault();
      openModal(a.dataset.pdf, a.dataset.label);
    });
  });
}

renderFilters();
renderProjects();

/* ---------- Legendă competențe ---------- */
const legendEl = document.getElementById('legend');
SKILLS.forEach(s => {
  const item = document.createElement('div');
  item.className = "legend__item";
  item.innerHTML = `<span>${s.group}</span><strong>${s.name}</strong>`;
  legendEl.appendChild(item);
});

/* ---------- Cartuș fix — actualizat pe scroll ---------- */
const sheets = document.querySelectorAll('.sheet');
const tbNo = document.getElementById('tb-no');
const tbTitle = document.getElementById('tb-title');
const tbScale = document.getElementById('tb-scale');

const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if(entry.isIntersecting){
      const el = entry.target;
      tbNo.textContent = el.dataset.sheetNo;
      tbTitle.textContent = el.dataset.sheetTitle;
      tbScale.textContent = el.dataset.scale;
    }
  });
}, { threshold: 0.4 });

sheets.forEach(s => observer.observe(s));

/* ---------- Modal PDF ---------- */
const modal = document.getElementById('pdf-modal');
const modalFrame = document.getElementById('modal-frame');
const modalTitle = document.getElementById('modal-title');
const modalClose = document.getElementById('modal-close');

function openModal(src, label){
  modalFrame.src = src;
  modalTitle.textContent = label;
  modal.classList.add('is-open');
}
function closeModal(){
  modal.classList.remove('is-open');
  modalFrame.src = "";
}
modalClose.addEventListener('click', closeModal);
modal.addEventListener('click', (e) => { if(e.target === modal) closeModal(); });
document.addEventListener('keydown', (e) => { if(e.key === "Escape") closeModal(); });
