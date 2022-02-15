let isDown = false;
const small = document.getElementById("small");
const bigger = document.getElementById("bigger");

small.addEventListener("mousedown", function () {
  isDown = true;
});

document.addEventListener("mouseup", function () {
  isDown = false;
});

document.addEventListener(
  "mousemove",
  function (event) {
    event.preventDefault();
    if (isDown) {
      mousePosition = {
        x: event.clientX,
        y: event.clientY,
      };
      bigger.style.width = mousePosition.x + "px";
      bigger.style.height = mousePosition.y + "px";
    }
  },
  true
);
