// ============================================================
// PROJECTS DATA
// TODO: Replace these with your real projects!
// Each project needs: title, description, tags, and optional links.
// Ask Copilot: "Add a project card for a [project type] called [name]"
// ============================================================
const projects = [
  {
    title: "Personal Analytics Dashboard",
    description: "Our goal was to build a full-stack web application using React and Spring Boot that allows users to track, manage, and analyze personal data.",
    tags: ["JavaScript", "Html", "CSS", "React", "Spring Boot"],
    github: "https://github.com/CR-Miller/Data-Tracking-Personal-Analytics.git",
    demo: null,
  },
  {
    title: "NetPlay TicTacToe - Networked Multiplayer Game",
    description: "A robust client-server multiplayer Tic-Tac-Toe game built with C#/.NET, featuring asynchronous TCP networking, comprehensive error handling, and automatic reconnection logic.",
    tags: ["C#", ".NET"],
    github: "https://github.com/Breniah/NetPlay.git",
    demo: "https://yourproject.netlify.app",
  },
];

// ============================================================
// SKILLS DATA
// TODO: Replace with your actual skills.
// Ask Copilot to help format this list based on your resume.
// ============================================================
const skills = [
  "Python", "JavaScript", "Java", "C",
  "HTML & CSS", "Git & GitHub",
  "React", "Node.js",
  "SQL", "Linux",
];

// ============================================================
// RENDER PROJECTS
// ============================================================
function renderProjects() {
  const container = document.getElementById("projects-container");
  if (!container) return;

  container.innerHTML = projects
    .map(
      (project) => `
      <div class="project-card">
        <h3>${project.title}</h3>
        <p>${project.description}</p>
        <div class="project-tags">
          ${project.tags.map((tag) => `<span class="tag">${tag}</span>`).join("")}
        </div>
        <div class="project-links">
          ${project.github ? `<a href="${project.github}" target="_blank">GitHub →</a>` : ""}
          ${project.demo ? `<a href="${project.demo}" target="_blank">Live Demo →</a>` : ""}
        </div>
      </div>
    `
    )
    .join("");
}

// ============================================================
// RENDER SKILLS
// ============================================================
function renderSkills() {
  const container = document.getElementById("skills-container");
  if (!container) return;

  container.innerHTML = skills
    .map((skill) => `<span class="skill-badge">${skill}</span>`)
    .join("");
}

// ============================================================
// DARK MODE TOGGLE
// ============================================================
const themeStorageKey = "theme";

function applyTheme(theme) {
  document.documentElement.setAttribute("data-theme", theme);

  const themeToggle = document.getElementById("theme-toggle");
  if (!themeToggle) return;

  const isDark = theme === "dark";
  const toggleIcon = themeToggle.querySelector(".theme-toggle__icon");
  const toggleLabel = themeToggle.querySelector(".theme-toggle__label");

  if (toggleIcon) {
    toggleIcon.textContent = isDark ? "☀️" : "📽️";
  }

  if (toggleLabel) {
    toggleLabel.textContent = isDark ? "Light mode" : "Noir mode";
  }

  themeToggle.setAttribute("aria-pressed", String(isDark));
}

function getPreferredTheme() {
  const savedTheme = localStorage.getItem(themeStorageKey);
  if (savedTheme === "light" || savedTheme === "dark") {
    return savedTheme;
  }

  return window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light";
}

function toggleDarkMode() {
  const currentTheme = document.documentElement.getAttribute("data-theme") === "dark" ? "dark" : "light";
  const nextTheme = currentTheme === "dark" ? "light" : "dark";

  localStorage.setItem(themeStorageKey, nextTheme);
  applyTheme(nextTheme);
}

// ============================================================
// UPDATE FOOTER YEAR
// ============================================================
function updateYear() {
  const yearEl = document.getElementById("year");
  if (yearEl) yearEl.textContent = new Date().getFullYear();
}

// ============================================================
// INIT
// ============================================================
document.addEventListener("DOMContentLoaded", () => {
  applyTheme(getPreferredTheme());

  const navbar = document.querySelector(".navbar");
  const navMenuToggle = document.getElementById("nav-menu-toggle");
  const navLinks = document.querySelectorAll(".nav-links a");

  const themeToggle = document.getElementById("theme-toggle");
  if (themeToggle) {
    themeToggle.addEventListener("click", toggleDarkMode);
  }

  if (navbar && navMenuToggle) {
    const updateNavMenuButton = (isOpen) => {
      const menuIcon = navMenuToggle.querySelector(".nav-menu-toggle__icon");
      const menuLabel = navMenuToggle.querySelector(".nav-menu-toggle__label");

      navMenuToggle.setAttribute("aria-expanded", String(isOpen));

      if (menuIcon) {
        menuIcon.textContent = isOpen ? "✕" : "☰";
      }

      if (menuLabel) {
        menuLabel.textContent = isOpen ? "Close" : "Menu";
      }

      navMenuToggle.setAttribute("aria-label", isOpen ? "Close navigation menu" : "Open navigation menu");
    };

    navMenuToggle.addEventListener("click", () => {
      const isOpen = navbar.classList.toggle("nav-open");
      updateNavMenuButton(isOpen);
    });

    navLinks.forEach((link) => {
      link.addEventListener("click", () => {
        if (navbar.classList.contains("nav-open")) {
          navbar.classList.remove("nav-open");
          updateNavMenuButton(false);
        }
      });
    });

    window.addEventListener("resize", () => {
      if (window.innerWidth > 600 && navbar.classList.contains("nav-open")) {
        navbar.classList.remove("nav-open");
        updateNavMenuButton(false);
      }
    });
  }

  renderProjects();
  renderSkills();
  updateYear();
});
