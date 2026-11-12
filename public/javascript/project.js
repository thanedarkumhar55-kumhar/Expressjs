// ==================================
// PROJECT CATEGORY FILTERING
// ==================================

document.addEventListener("DOMContentLoaded", () => {
  const buttons = [...document.querySelectorAll("[data-filter]")];

  const cards = [...document.querySelectorAll(".projects-grid .project-card")];

  const empty = document.getElementById("empty-state");

  if (!buttons.length || !cards.length) return;

  buttons.forEach((button) => {
    button.addEventListener("click", () => {
      const filter = button.dataset.filter;

      // Update active button

      buttons.forEach((btn) => {
        const active = btn === button;

        btn.classList.toggle("active", active);

        btn.setAttribute("aria-pressed", String(active));
      });

      // Filter cards

      let visible = 0;

      cards.forEach((card) => {
        const show = filter === "all" || card.dataset.category === filter;

        card.classList.toggle("is-hiding", !show);

        if (show) visible++;
      });

      // Empty message

      empty.hidden = visible !== 0;
    });
  });

  // Placeholder demo links

  document.querySelectorAll(".demo-link").forEach((link) => {
    link.addEventListener("click", (event) => {
      if (link.getAttribute("href") === "#") {
        event.preventDefault();

        alert("Replace this placeholder with your deployed project URL.");
      }
    });
  });
});
