(() => {
  const root = document.documentElement;
  const themeToggle = document.getElementById("theme-toggle");
  const themeIcon = document.getElementById("theme-icon");
  const menuToggle = document.getElementById("menu-toggle");
  const nav = document.getElementById("primary-nav");
  const filterButtons = document.querySelectorAll(".filter-button");
  const projectCards = document.querySelectorAll(".project-card");
  const copyButton = document.getElementById("copy-email");
  const feedback = document.getElementById("contact-feedback");

  try {
    const savedTheme = localStorage.getItem("portfolio-theme");
    if (savedTheme === "light" || savedTheme === "dark") root.dataset.theme = savedTheme;
  } catch {}
  updateThemeButton();

  themeToggle.addEventListener("click", () => {
    root.dataset.theme = root.dataset.theme === "dark" ? "light" : "dark";
    try { localStorage.setItem("portfolio-theme", root.dataset.theme); } catch {}
    updateThemeButton();
  });

  function updateThemeButton() {
    const isDark = root.dataset.theme === "dark";
    themeIcon.textContent = isDark ? "☼" : "☾";
    themeToggle.setAttribute("aria-label", isDark ? "Switch to light theme" : "Switch to dark theme");
    document.querySelector('meta[name="theme-color"]').content = isDark ? "#0b0d12" : "#f5f7f7";
  }

  function closeMenu() {
    nav.classList.remove("is-open");
    menuToggle.setAttribute("aria-expanded", "false");
    menuToggle.setAttribute("aria-label", "Open navigation");
  }
  menuToggle.addEventListener("click", () => {
    const isOpen = nav.classList.toggle("is-open");
    menuToggle.setAttribute("aria-expanded", String(isOpen));
    menuToggle.setAttribute("aria-label", isOpen ? "Close navigation" : "Open navigation");
  });
  nav.querySelectorAll("a").forEach(link => link.addEventListener("click", closeMenu));
  document.addEventListener("keydown", event => { if (event.key === "Escape") closeMenu(); });
  window.addEventListener("resize", () => { if (window.innerWidth > 650) closeMenu(); });

  filterButtons.forEach(button => {
    button.addEventListener("click", () => {
      const filter = button.dataset.filter;
      filterButtons.forEach(item => {
        const active = item === button;
        item.classList.toggle("is-active", active);
        item.setAttribute("aria-pressed", String(active));
      });
      projectCards.forEach(card => { card.hidden = filter !== "all" && card.dataset.category !== filter; });
    });
    button.setAttribute("aria-pressed", String(button.classList.contains("is-active")));
  });

  copyButton.addEventListener("click", async () => {
    const email = copyButton.dataset.email;
    if (!email || email.includes("YOUR_EMAIL")) {
      feedback.textContent = "Add your real email address in index.html before publishing.";
      return;
    }
    try {
      await navigator.clipboard.writeText(email);
      feedback.textContent = "Email copied to clipboard.";
    } catch { feedback.textContent = `Email: ${email}`; }
  });
  document.getElementById("year").textContent = new Date().getFullYear();
})();