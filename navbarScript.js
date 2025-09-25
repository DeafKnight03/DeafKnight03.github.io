document.addEventListener("DOMContentLoaded", () => {
    const btn = document.getElementById('menu-btn');
    const nav = document.getElementById('nav');

    btn.addEventListener('click', () => {
      const isOpen = nav.classList.toggle('open');
      btn.setAttribute('aria-expanded', String(isOpen));
    });

    // Chiudi il menu quando si clicca fuori (mobile)
    document.addEventListener('click', (e) => {
      if (!nav.contains(e.target) && !document.getElementById('menu').contains(e.target)) {
        nav.classList.remove('open');
        btn.setAttribute('aria-expanded', 'false');
      }
    });
});
