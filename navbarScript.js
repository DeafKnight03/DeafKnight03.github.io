document.addEventListener("DOMContentLoaded", () => {
  const btn  = document.getElementById("menu-btn");
  const menu = document.getElementById("menu");

  if (!btn || !menu) return;

  btn.addEventListener("click", () => {
    const isOpen = menu.classList.toggle("open");
    btn.setAttribute("aria-expanded", String(isOpen));
  });

  // close when clicking outside
  document.addEventListener("click", (e) => {
    if (!menu.contains(e.target) && e.target !== btn) {
      menu.classList.remove("open");
      btn.setAttribute("aria-expanded", "false");
    }
  });

  // optional: close on Escape
  document.addEventListener("keydown", (e) => {
    if (e.key === "Escape") {
      menu.classList.remove("open");
      btn.setAttribute("aria-expanded", "false");
      btn.focus();
    }
  });
});
