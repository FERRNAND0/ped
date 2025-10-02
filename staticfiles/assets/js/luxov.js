document.addEventListener("DOMContentLoaded", function () {
  // Scroll animations
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) entry.target.classList.add("in-view");
      });
    },
    { threshold: 0.1 }
  );
  document
    .querySelectorAll(".section-transition")
    .forEach((el) => observer.observe(el));

  // Custom cursor
  const cursor = document.createElement("div");
  const follower = document.createElement("div");
  cursor.className = "custom-cursor";
  follower.className = "cursor-follower";
  document.body.appendChild(cursor);
  document.body.appendChild(follower);

  document.addEventListener("mousemove", (e) => {
    cursor.style.left = e.clientX + "px";
    cursor.style.top = e.clientY + "px";
    setTimeout(() => {
      follower.style.left = e.clientX + "px";
      follower.style.top = e.clientY + "px";
    }, 100);
  });

  if (window.matchMedia("(max-width: 768px)").matches) {
    cursor.style.display = "none";
    follower.style.display = "none";
  }

  // Loading animation
  const loadingBar = document.createElement("div");
  loadingBar.className = "loading-bar";
  document.body.appendChild(loadingBar);
  setTimeout(() => {
    loadingBar.style.width = "100%";
    setTimeout(() => {
      loadingBar.style.opacity = "0";
      setTimeout(() => loadingBar.remove(), 300);
    }, 300);
  }, 100);
});

// Parallax background effect
window.addEventListener("scroll", () => {
  const scrolled = window.pageYOffset;
  document.querySelectorAll(".hero-section-one").forEach((section) => {
    section.style.backgroundPosition = `center ${scrolled * 0.3}px`;
  });
});
