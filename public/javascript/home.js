// Typing Animation

document.addEventListener("DOMContentLoaded", () => {
  const target = document.getElementById("typed-role");

  if (!target) return;

  const words = [
    "scalable APIs",

    "backend systems",

    "useful web apps",

    "database solutions",
  ];

  // Respect reduced motion

  if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
    target.textContent = words[0];

    return;
  }

  let word = 0;

  let index = 0;

  let deleting = false;

  function type() {
    const text = words[word];

    target.textContent = text.slice(0, index);

    if (!deleting && index < text.length) {
      index++;

      setTimeout(type, 85);
    } else if (!deleting) {
      deleting = true;

      setTimeout(type, 1200);
    } else if (index > 0) {
      index--;

      setTimeout(type, 42);
    } else {
      deleting = false;

      word = (word + 1) % words.length;

      setTimeout(type, 300);
    }
  }

  type();
});
