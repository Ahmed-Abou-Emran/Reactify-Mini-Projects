const steps = document.querySelectorAll(".step");
const prevBtn = document.querySelector(".previous");
const nextBtn = document.querySelector(".next");

current = 0;

prevBtn.addEventListener("click", () => {
  if (current > 0) {
    steps[current].classList.remove("done");
    current -= 1;
    if (current == -0) prevBtn.disabled = true;
    nextBtn.disabled = false;
  }
});

nextBtn.addEventListener("click", () => {
  if (current < 3) {
    current += 1;
    steps[current].classList.add("done");
    if (current === 3) nextBtn.disabled = true;
    prevBtn.disabled = false;
  }
});

steps.forEach((step, index) => {
  step.addEventListener("click", () => {
    for (let i = current; i <= index; i++) {
      step.classList.add("done");
      current += 1;
    }
  });
});
