const parag = document.getElementById("parag");
const textInput = document.getElementById("textInput");
const textArea = document.getElementById("textArea");

// function to check the detection

window.addEventListener("keydown", function (event) {
  // event.preventDefault();
  const key = window.event.which || window.event.keyCode; // Detecting keyCode

  // Detecting Ctrl
  const ctrl = window.event.ctrlKey;
  // ? window.event.ctrlKey
  // : key === 17
  // ? true
  // : false;

  if (key == 69 && ctrl) {
    event.preventDefault();
    console.log("Ctrl+E is pressed.");
    parag.classList.add("hide");
    textArea.value = textInput.innerText;
    textArea.classList.remove("hide");
  } else if (key == 83 && ctrl) {
    event.preventDefault();
    console.log("Ctrl+S is pressed.");
    parag.classList.remove("hide");
    textArea.classList.add("hide");
    textInput.innerText = textArea.value;
  }
});
