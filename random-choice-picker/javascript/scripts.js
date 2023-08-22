const choicesTextarea = document.querySelector("#choices");
const choicesContainer = document.querySelector(".choices");

let choices = [];
let timeout = null;
let interval = null;

choicesTextarea.addEventListener("input", (e) => {
  clearInterval(interval);
  clearTimeout(timeout);

  choices = e.target.value.split(",").map((choice) => {
    return choice.trim();
  });

  choicesElements = " ";
  choices.forEach((choice) => {
    if (choice === "") return;
    choicesElements += `<div class="choice">${choice}</div>`;
  });

  choicesContainer.innerHTML = choicesElements;

  console.log(choices);
});

const getRandomChoice = (arr) => {
  let length = arr.length;
  return Math.floor(Math.random() * length);
};
// keydown => remove the text and enter add a space that will remove the placeholder text
choicesTextarea.addEventListener("keyup", (e) => {
  if (e.code === "Enter") {
    choicesTextarea.value = "";
    interval = setInterval(() => {
      let allChoices = document.querySelectorAll(".choice");
      allChoices.forEach((choice) => {
        choice.classList.remove("selected");
      });

      allChoices[getRandomChoice(allChoices)].classList.add("selected");
    }, 250);
    timeout = setTimeout(() => {
      clearInterval(interval);
    }, 3000);
  }
});
