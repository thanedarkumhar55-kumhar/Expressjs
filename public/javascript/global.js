// ==================================
// DEVELOPER PROFILE CONFIGURATION
// ==================================

const PROFILE = {
  name: "Thanedar Kumhar",

  intro:
    "I'm a Node.js developer focused on building reliable backend systems, clean APIs and useful digital experiences.",

  email: "thanedarkumhar55@gmail.com",

  location: "Sonari Jamshedpur-835102, India",

  socials: {
    github: "https://github.com/thanedarkumhar",

    linkedin: "https://linkedin.com/in/thanedarkumhar",

    instagram: "https://instagram.com/mr_ryence",
  },

  stats: {
    projects: "00",

    technologies: "08",

    experience: "00",
  },
};

// ==================================
// RENDER HEADER AND FOOTER
// ==================================

function renderShell() {
  const current = location.pathname.split("/").pop() || "home";

  const links = [
    ["/", "Home"],

    ["/about", "About"],

    ["/project", "Projects"],

    ["/gallary", "Gallary"],

    ["/contact", "Contact"],
  ];

  const header = document.getElementById("site-header");

  if (header) {
    header.innerHTML = `

            <header class="site-header">

                <div class="container nav-wrap">

                    <a class="brand" href="/">

                        dev<span>.</span>

                    </a>

                    <div class="nav-right">

                        <nav class="nav-links"
                             id="primary-nav"
                             aria-label="Main navigation">

                            ${links
                              .map(
                                ([url, label]) => `

                                <a href="${url}"

                                   class="${current === url ? "active" : ""}"

                                   ${current === url ? 'aria-current="page"' : ""}>

                                    ${label}

                                </a>

                            `,
                              )
                              .join("")}

                        </nav>

                        <button class="theme-toggle"
                                id="theme-toggle"
                                aria-label="Switch color theme">

                            ☼

                        </button>

                        <button class="menu-toggle"
                                id="menu-toggle"
                                aria-label="Open navigation menu"
                                aria-expanded="false"
                                aria-controls="primary-nav">

                            ☰

                        </button>

                    </div>

                </div>

            </header>

        `;
  }

  // Footer

  const footer = document.getElementById("site-footer");

  if (footer) {
    footer.innerHTML = `

            <footer class="site-footer">

                <div class="container">

                    <div class="footer-main">

                        <div>

                            <a class="brand" href="/">

                                dev<span>.</span>

                            </a>

                            <p>

                                Building thoughtful digital experiences,
                                one line of code at a time.

                            </p>

                        </div>

                        <div>

                            <div class="footer-title">

                                Explore

                            </div>

                            <div class="footer-links">

                                <a href="/about">About</a>

                                <a href="/project">Projects</a>

                                <a href="/gallery">Gallery</a>

                                <a href="/contact">Contact</a>

                            </div>

                        </div>

                        <div>

                            <div class="footer-title">

                                Find Me Online

                            </div>

                            <div class="footer-links">

                                <a data-social="github"
                                   href="${PROFILE.socials.github}"
                                   target="_blank"
                                   rel="noreferrer">

                                    GitHub ↗

                                </a>

                                <a data-social="linkedin"
                                   href="${PROFILE.socials.linkedin}"
                                   target="_blank"
                                   rel="noreferrer">

                                    LinkedIn ↗

                                </a>

                                <a data-social="instagram"
                                   href="${PROFILE.socials.instagram}"
                                   target="_blank"
                                   rel="noreferrer">

                                    Instagram ↗

                                </a>

                            </div>

                        </div>

                    </div>

                    <div class="footer-bottom">

                        <span>

                            © <span id="year"></span>
                            ${PROFILE.name}

                        </span>

                        <button class="back-top"
                                id="back-top"
                                aria-label="Back to top">

                            ↑

                        </button>

                    </div>

                </div>

            </footer>

        `;
  }

  // Update Profile Information

  document.querySelectorAll("[data-profile]").forEach((el) => {
    const key = el.dataset.profile;

    if (PROFILE[key]) {
      el.textContent = PROFILE[key];
    }
  });

  // Update Social Links

  document.querySelectorAll("[data-social]").forEach((el) => {
    const key = el.dataset.social;

    if (PROFILE.socials[key]) {
      el.href = PROFILE.socials[key];
    }
  });

  // Update Statistics

  document.querySelectorAll("[data-stat]").forEach((el) => {
    const key = el.dataset.stat;

    if (PROFILE.stats[key]) {
      el.textContent = PROFILE.stats[key];
    }
  });

  // Current Year

  const year = document.getElementById("year");

  if (year) {
    year.textContent = new Date().getFullYear();
  }

  setupTheme();

  setupNavigation();

  setupScrollEffects();
}

// ==================================
// THEME MANAGEMENT
// ==================================

function setupTheme() {
  const saved = localStorage.getItem("portfolio-theme");

  const preferred = window.matchMedia("(prefers-color-scheme: light)").matches
    ? "light"
    : "dark";

  document.documentElement.dataset.theme = saved || preferred;

  const btn = document.getElementById("theme-toggle");

  function updateIcon() {
    const light = document.documentElement.dataset.theme === "light";

    btn.textContent = light ? "☾" : "☼";

    btn.setAttribute(
      "aria-label",
      light ? "Switch to dark theme" : "Switch to light theme",
    );
  }

  updateIcon();

  btn?.addEventListener("click", () => {
    const next =
      document.documentElement.dataset.theme === "light" ? "dark" : "light";

    document.documentElement.dataset.theme = next;

    localStorage.setItem("portfolio-theme", next);

    updateIcon();
  });
}

// ==================================
// RESPONSIVE NAVIGATION
// ==================================

function setupNavigation() {
  const menu = document.getElementById("menu-toggle");

  const nav = document.getElementById("primary-nav");

  if (!menu || !nav) return;

  function closeMenu() {
    nav.classList.remove("open");

    menu.setAttribute("aria-expanded", "false");

    menu.setAttribute("aria-label", "Open navigation menu");

    menu.textContent = "☰";
  }

  menu.addEventListener("click", () => {
    const open = nav.classList.toggle("open");

    menu.setAttribute("aria-expanded", String(open));

    menu.setAttribute(
      "aria-label",
      open ? "Close navigation menu" : "Open navigation menu",
    );

    menu.textContent = open ? "×" : "☰";
  });

  nav.querySelectorAll("a").forEach((link) => {
    link.addEventListener("click", closeMenu);
  });

  // Close on outside click

  document.addEventListener("click", (event) => {
    if (!nav.contains(event.target) && !menu.contains(event.target)) {
      closeMenu();
    }
  });

  // Close on Escape

  document.addEventListener("keydown", (event) => {
    if (event.key === "Escape") {
      closeMenu();
    }
  });

  // Close on Desktop Resize

  window.addEventListener("resize", () => {
    if (window.innerWidth > 800) {
      closeMenu();
    }
  });

  // Back to Top

  document.getElementById("back-top")?.addEventListener("click", () => {
    window.scrollTo({
      top: 0,

      behavior: reducedMotion() ? "auto" : "smooth",
    });
  });
}

// ==================================
// REDUCED MOTION
// ==================================

function reducedMotion() {
  return window.matchMedia("(prefers-reduced-motion: reduce)").matches;
}

// ==================================
// SCROLL REVEAL
// ==================================

function setupScrollEffects() {
  const items = document.querySelectorAll(".reveal");

  if (reducedMotion() || !("IntersectionObserver" in window)) {
    items.forEach((el) => {
      el.classList.add("visible");
    });

    return;
  }

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("visible");

          observer.unobserve(entry.target);
        }
      });
    },
    {
      threshold: 0.12,
    },
  );

  items.forEach((el) => {
    observer.observe(el);
  });
}

// ==================================
// INITIALIZATION
// ==================================

document.addEventListener("DOMContentLoaded", renderShell);
