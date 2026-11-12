// About Page Functionality

document.addEventListener("DOMContentLoaded", () => {
  // Skill indicators

  const skillBars = document.querySelectorAll(".skill-track span");

  skillBars.forEach((bar) => {
    bar.setAttribute("role", "presentation");
  });
});
