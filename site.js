// Fondu d'entrée/sortie entre les pages (commun à toutes les pages)
window.addEventListener("DOMContentLoaded", () => { document.body.classList.add("fade-in"); });
window.addEventListener("pageshow", (e) => { if (e.persisted) { document.body.classList.remove("fade-out"); document.body.classList.add("fade-in"); } });

function goTo(href) {
  document.body.classList.remove("fade-in");
  document.body.classList.add("fade-out");
  setTimeout(() => { window.location.href = href; }, 800);
}

document.querySelectorAll(".transition-link").forEach(link => {
  link.addEventListener("click", function (e) {
    e.preventDefault();
    goTo(this.getAttribute("href"));
  });
});

// Barre du haut : en défilant, le logo s'efface et la barre devient une fine bande floutée avec les liens
const nav = document.querySelector(".navbar");
if (nav) {
  let navh = 0;
  const menu = nav.querySelector(".menu-center");
  const measure = () => {
    nav.style.setProperty("--p", 0);
    navh = nav.offsetHeight;
    nav.style.setProperty("--navh", navh + "px");
    // Les liens remontent jusqu'au centre d'une bande juste assez haute pour eux
    if (menu) {
      const r = menu.getBoundingClientRect();
      const strip = r.height + 8;
      nav.style.setProperty("--strip", strip + "px");
      nav.style.setProperty("--menu-shift", (r.top - (strip - r.height) / 2) + "px");
    }
    update();
  };
  const update = () => {
    const p = Math.min(1, Math.max(0, window.scrollY / (navh * 0.8)));
    nav.style.setProperty("--p", p.toFixed(3));
    nav.classList.toggle("collapsed", p > 0.7);
  };
  window.addEventListener("scroll", update, { passive: true });
  window.addEventListener("resize", measure);
  window.addEventListener("load", measure);
  measure();
}
