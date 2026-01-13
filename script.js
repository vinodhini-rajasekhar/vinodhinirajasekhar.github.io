const projects = [
  {
    title: "Protein Fold ML Notes",
    link: "#",
    meta: "Exploration | Biology + ML",
    desc:
      "A learning project to connect protein structure ideas with practical ML workflows. Includes summaries, experiments, and clean documentation.",
  },
  {
    title: "DNA Sequence Classifier",
    link: "#",
    meta: "Modeling | Sequence",
    desc:
      "A starter pipeline for sequence based classification. Focused on clear preprocessing, baseline models, and evaluation discipline.",
  },
  {
    title: "Nutrition Learning Portfolio",
    link: "#",
    meta: "Coursework | Health",
    desc:
      "Notes and small analyses from a nutrition course I took outside my academics. Built to link biology concepts with measurable outcomes.",
  },
];

function mountProjects() {
  const grid = document.getElementById("projectGrid");
  if (!grid) return;

  grid.innerHTML = projects
    .map(
      (p) => `
      <article class="card">
        <div class="project-title">
          <a href="${p.link}" target="_blank" rel="noopener noreferrer">${p.title}</a>
          <span class="muted small">↗</span>
        </div>
        <p class="project-meta">${p.meta}</p>
        <p class="project-desc">${p.desc}</p>
      </article>
    `
    )
    .join("");
}

function mountYear() {
  const y = document.getElementById("year");
  if (y) y.textContent = new Date().getFullYear();
}

function setupMobileMenu() {
  const btn = document.getElementById("menuBtn");
  const menu = document.getElementById("mobileMenu");
  if (!btn || !menu) return;

  btn.addEventListener("click", () => {
    menu.hidden = !menu.hidden;
  });

  menu.querySelectorAll("a").forEach((a) => {
    a.addEventListener("click", () => {
      menu.hidden = true;
    });
  });

  document.addEventListener("click", (e) => {
    const target = e.target;
    const clickedInside = menu.contains(target) || btn.contains(target);
    if (!clickedInside) menu.hidden = true;
  });
}

mountProjects();
mountYear();
setupMobileMenu();
