const panels = document.querySelectorAll(".panel");

// panels.forEach((panel) => {
//   panel.addEventListener("click", (e) => {
//     panels.forEach((panel) => {
//       panel.classList.remove("active");
//     });
//     panel.classList.add("active");
//   });
// });

// panels.forEach((panel) => {
//   panel.addEventListener("mouseover", (e) => {
//     panels.forEach((panel) => {
//       panel.classList.remove("active");
//     });
//     panel.classList.add("active");
//   });
// });

const handleEventListenr = (elements, event) => {
  elements.forEach((element) => {
    element.addEventListener(event, (e) => {
      elements.forEach((element) => {
        element.classList.remove("active");
      });

      element.classList.add("active");
    });
  });
};

handleEventListenr(panels, "mouseover");
handleEventListenr(panels, "click");
