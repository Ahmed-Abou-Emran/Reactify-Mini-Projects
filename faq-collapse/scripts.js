const faqs = document.querySelectorAll(".faq");
const faqToggles = document.querySelectorAll(".faq-toggle");

faqToggles.forEach((faqToggle, index) => {
  faqToggle.addEventListener("click", () => {
    faqs[index].classList.toggle("active");
  });
});
