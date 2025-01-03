const navigationLinks = document.querySelectorAll("[data-nav-link]");
const pages = document.querySelectorAll("[data-page]");

// Add event to all nav links
navigationLinks.forEach((link) => {
  link.addEventListener("click", function () {
    const targetPage = this.getAttribute("data-nav-link"); // Get the target page from data-nav-link

    // Remove active class from all pages and links
    pages.forEach((page) => page.classList.remove("active"));
    navigationLinks.forEach((link) => link.classList.remove("active"));

    // Add active class to the target page and link
    document.querySelector(`[data-page="${targetPage}"]`).classList.add("active");
    this.classList.add("active");
    window.scrollTo(0, 0); // Scroll to the top of the page
  });
});
