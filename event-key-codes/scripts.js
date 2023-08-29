const entryMessageEle = document.querySelector(".entry-message");
const eventEle = document.querySelector(".event");
const properties = document.querySelectorAll(".property-value");

window.addEventListener("keydown", (event) => {
  entryMessageEle.classList.add("hidden");
  eventEle.classList.remove("hidden");
  properties[0].innerText = event.key === " " ? "Space" : event.key;
  properties[1].innerText = event.keyCode;
  properties[2].innerText = event.code;
});
