const cups = document.querySelectorAll(".cups .cup");
const liters = document.querySelector("#liters");
const percentage = document.querySelector("#percentage");
const remained = document.querySelector("#remained");
const bigCup = document.querySelector(".cup");

console.log(cups);

cups.forEach((cup, index) => {
  // fill up to the clicked Cup
  // cup.addEventListener("click", () => {
  //   for (let i = 0; i <= index; i++) {
  //     cups[i].classList.add("fill");
  //   }
  // });

  //  toggle the last Cup
  cup.addEventListener("click", () => {
    let filledCups = document.querySelectorAll(".fill");
    cups[index].classList.toggle("fill");
    filledCups = document.querySelectorAll(".fill");
    console.log(filledCups.length);

    // update the litrs section text
    liters.innerText = `${2 - filledCups.length / 4}L`;

    percentage.innerText = filledCups
      ? `${(filledCups.length / 8) * 100}%`
      : "";
    percentage.style.display = "block";

    // remove the percentage section if all cups are empty
    if (filledCups.length === 0) {
      percentage.style.display = "none";
      remained.style.display = "flex";
    }

    // in-between, both should be displayed
    if (filledCups.length <= 8) {
      percentage.style.display = "flex";
      percentage.style.height = `${(filledCups.length / 8) * 100}%`;

      bigCup.style.backgroundImage = `linear-gradient(to top, #38bdf8 0%, #38bdf8 ${
        (filledCups.length / 8) * 100
      }%,#f0f9ff ${(filledCups.length / 8) * 100}%, #f0f9ff 100%)`;
      remained.style.display = "flex";
    }
    // remove the remained section if all cups are filled
    if (filledCups.length === 8) {
      percentage.style.display = "flex";
      remained.style.display = "none";
    }
  });
});
