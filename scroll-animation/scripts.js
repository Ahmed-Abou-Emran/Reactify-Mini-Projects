const cards = document.querySelectorAll(".card");

let observer = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      entry.target.classList.toggle("hidden", !entry.isIntersecting);
      observer.unobserve(entry);
    });
  },
  {
    threshold: 0.5,
  }
);

cards.forEach((card) => {
  observer.observe(card);
});
