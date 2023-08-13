const text = document.querySelector(".text");
const bg = document.querySelector(".background");

let load = 0;
let intervalId = setInterval(blurring, 30);

function blurring() {
  load++;
  if (load > 99) {
    clearInterval(intervalId);
  }
  const opacity = 1 - load / 100;
  const blur = 30 - (load / 100) * 30;

  text.innerHTML = `${load}%`;
  text.style.opacity = opacity;
  bg.style.filter = `blur(${blur}px)`;
}
