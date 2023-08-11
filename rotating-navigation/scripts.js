const close = document.querySelector("#close");
const open = document.querySelector("#open");
const content = document.querySelector(".content");
const circle = document.querySelector(".circle");
const nav = document.querySelector("nav");

const elements = [content, circle, nav];

elements.forEach((element) => {
  close.addEventListener("click", () => {
    element.classList.remove("open");
  });
  open.addEventListener("click", () => {
    element.classList.add("open");
  });
});
