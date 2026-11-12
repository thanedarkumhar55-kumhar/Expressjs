// ==================================
// GALLERY AND LIGHTBOX
// ==================================

document.addEventListener("DOMContentLoaded", () => {
  const grid = document.getElementById("gallery-grid");

  const box = document.getElementById("lightbox");

  if (!grid || !box) return;

  const buttons = [...document.querySelectorAll(".filter-bar [data-filter]")];

  const items = [...grid.querySelectorAll(".gallery-item")];

  const image = document.getElementById("lightbox-image");

  const caption = document.getElementById("lightbox-caption");

  const closeBtn = document.getElementById("lightbox-close");

  const prev = document.getElementById("lightbox-prev");

  const next = document.getElementById("lightbox-next");

  let visible = [];

  let index = 0;

  let lastFocus = null;

  // Update visible images

  function refresh() {
    visible = items.filter((item) => {
      return !item.classList.contains("filtered-out");
    });
  }

  // Display image

  function show(i) {
    refresh();

    if (!visible.length) return;

    index = (i + visible.length) % visible.length;

    const item = visible[index];

    image.src = item.dataset.full;

    image.alt = item.querySelector("img").alt;

    caption.textContent = item.querySelector("span").textContent;

    box.classList.add("open");

    box.setAttribute("aria-hidden", "false");

    document.body.style.overflow = "hidden";

    closeBtn.focus();
  }

  // Close lightbox

  function close() {
    box.classList.remove("open");

    box.setAttribute("aria-hidden", "true");

    document.body.style.overflow = "";

    image.src = "";

    lastFocus?.focus();
  }

  // Open image

  items.forEach((item) => {
    item.addEventListener("click", () => {
      lastFocus = item;

      show(visible.indexOf(item));
    });
  });

  // Gallery filtering

  buttons.forEach((button) => {
    button.addEventListener("click", () => {
      buttons.forEach((btn) => {
        const active = btn === button;

        btn.classList.toggle("active", active);

        btn.setAttribute("aria-pressed", String(active));
      });

      items.forEach((item) => {
        const hide =
          button.dataset.filter !== "all" &&
          item.dataset.category !== button.dataset.filter;

        item.classList.toggle("filtered-out", hide);
      });

      refresh();
    });
  });

  // Navigation buttons

  closeBtn.addEventListener("click", close);

  prev.addEventListener("click", () => {
    show(index - 1);
  });

  next.addEventListener("click", () => {
    show(index + 1);
  });

  // Close on background click

  box.addEventListener("click", (event) => {
    if (event.target === box) {
      close();
    }
  });

  // Keyboard navigation

  document.addEventListener("keydown", (event) => {
    if (!box.classList.contains("open")) return;

    if (event.key === "Escape") {
      close();
    }

    if (event.key === "ArrowLeft") {
      show(index - 1);
    }

    if (event.key === "ArrowRight") {
      show(index + 1);
    }
  });
});
