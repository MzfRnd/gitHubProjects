const modalButton = document.getElementById("modalBtn");
const myModal = document.getElementById("myModal");
const closeBtn = document.getElementsByClassName("close")[0];

modalButton.onclick = function () {
  myModal.style.display = "block";
};

closeBtn.onclick = function () {
  myModal.style.display = "none";
};

window.onclick = function (event) {
  if (event.target == myModal) {
    myModal.style.display = "none";
  }
};
