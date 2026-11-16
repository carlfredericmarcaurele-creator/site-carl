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

const logo = document.getElementById("logo-link");
if (logo) logo.addEventListener("click", () => goTo("index.html"));
