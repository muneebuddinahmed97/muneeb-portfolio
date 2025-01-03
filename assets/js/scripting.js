'use strict';

const elementToggleFunc = function (elem) { elem.classList.toggle("active"); }

const sidebar = document.querySelector("[data-sidebar]");
const sidebarBtn = document.querySelector("[data-sidebar-btn]");

sidebarBtn.addEventListener("click", function () { elementToggleFunc(sidebar); });

// Navigation Logic
const navigationLinks = document.querySelectorAll("[data-nav-link]");
const pages = document.querySelectorAll("[data-page]");

navigationLinks.forEach((link) => {
  link.addEventListener("click", function () {
    const targetPage = this.getAttribute("data-nav-link");

    // Remove active class from all pages and links
    pages.forEach((page) => page.classList.remove("active"));
    navigationLinks.forEach((link) => link.classList.remove("active"));

    // Add active class to the target page and link
    document.querySelector(`[data-page="${targetPage}"]`).classList.add("active");
    this.classList.add("active");
    window.scrollTo(0, 0); // Scroll to the top of the page
  });
});
