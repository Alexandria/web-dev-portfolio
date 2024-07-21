document.addEventListener("DOMContentLoaded", () => {
  // Intersection Observer
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(
      (entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("in-view");
          return;
        }
        if (!entry.isIntersecting && entry.intersectionRatio < 0.2) {
          entry.target.classList.remove("in-view");
        }
      },
      { threshold: 1 }
    );
  });

  const allAnimatedElements = document.querySelectorAll(".animate");

  allAnimatedElements.forEach((element) => observer.observe(element));
});
