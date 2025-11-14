// Handle mobile nav close on link click and simple form UX
(function () {
  // Close mobile menu when a link is clicked
  const navToggle = document.getElementById("nav-toggle");
  const nav = document.querySelector(".site-nav");
  if (nav) {
    nav.addEventListener("click", function (e) {
      const t = e.target;
      if (t && t.tagName === "A" && navToggle && navToggle.checked) {
        navToggle.checked = false;
      }
    });
  }

  // Early access form handler (demo only)
  const form = document.getElementById("early-access-form");
  const msg = document.getElementById("form-msg");
  if (form) {
    form.addEventListener("submit", function (e) {
      e.preventDefault();
      const email = (document.getElementById("email") || {}).value || "";
      if (!email) {
        return;
      }
      // Simulate success
      if (msg) {
        msg.textContent = "Thanks! We'll be in touch soon.";
        msg.style.color =
          getComputedStyle(document.documentElement).getPropertyValue("--ok") ||
          "#34d399";
      }
      form.reset();
    });
  }

  // Current year in footer
  const yearEl = document.getElementById("year");
  if (yearEl) {
    yearEl.textContent = new Date().getFullYear();
  }

  // Handle scroll behaviour for anchor links
  document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
    anchor.addEventListener("click", function (e) {
      const targetId = this.getAttribute("href").substring(1);
      const target = document.getElementById(targetId);
      if (target) {
        e.preventDefault();
        target.scrollIntoView({ behavior: "smooth", block: "start" });
      }
    });
  });
})();
