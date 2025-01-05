'use strict';

// Function to toggle the active class on an element
const elementToggleFunc = function (elem) {
  elem.classList.toggle("active");
}

// Sidebar toggle functionality
const sidebar = document.querySelector("[data-sidebar]");
const sidebarBtn = document.querySelector("[data-sidebar-btn]");

sidebarBtn.addEventListener("click", function () {
  elementToggleFunc(sidebar);
});

// Navigation logic for switching between pages
const navigationLinks = document.querySelectorAll("[data-nav-link]");
const pages = document.querySelectorAll("[data-page]");

navigationLinks.forEach((link) => {
  link.addEventListener("click", function () {
    const targetPage = this.getAttribute("data-nav-link");

    console.log("Clicked:", targetPage); // Debugging: Log the clicked page

    // Remove active class from all pages and links
    pages.forEach((page) => page.classList.remove("active"));
    navigationLinks.forEach((link) => link.classList.remove("active"));

    // Add active class to the target page and link
    document.querySelector(`[data-page="${targetPage}"]`).classList.add("active");
    this.classList.add("active");

    // Scroll to the top of the page
    window.scrollTo(0, 0);

    // Debugging: Log the active page and link
    console.log("Active Page:", document.querySelector("[data-page].active"));
    console.log("Active Link:", document.querySelector("[data-nav-link].active"));
  });
});
