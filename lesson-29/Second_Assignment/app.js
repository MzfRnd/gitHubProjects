const first = document.getElementById("first");
const second = document.getElementById("second");
const third = document.getElementById("third");
const forth = document.getElementById("forth");
const x = document.getElementById("myTable").rows;

first.onclick = function () {
  const myArray = [];
  let sortedArray = [];
  for (i = 1; i < x.length; i++) {
    myArray.push(parseInt(x[i].cells[0].innerText));
  }
  console.log(myArray);
  sortedArray = myArray.sort();
  console.log(sortedArray);
  for (j = 1; j <= sortedArray.length; j++) {
    x[j].cells[0].innerText = sortedArray[j - 1];
  }
  this.onclick = null;
};

second.onclick = function () {
  const myArray = [];
  let sortedArray = [];
  for (i = 1; i < x.length; i++) {
    myArray.push(parseInt(x[i].cells[1].innerText));
  }
  console.log(myArray);
  sortedArray = myArray.sort();
  console.log(sortedArray);
  for (j = 1; j <= sortedArray.length; j++) {
    x[j].cells[1].innerText = sortedArray[j - 1];
  }
  this.onclick = null;
};

third.onclick = function () {
  const myArray = [];
  let sortedArray = [];
  for (i = 1; i < x.length; i++) {
    myArray.push(x[i].cells[2].innerText);
  }
  console.log(myArray);
  sortedArray = myArray.sort();
  console.log(sortedArray);
  for (j = 1; j <= sortedArray.length; j++) {
    x[j].cells[2].innerText = sortedArray[j - 1];
  }
  this.onclick = null;
};

forth.onclick = function () {
  const myArray = [];
  let sortedArray = [];
  for (i = 1; i < x.length; i++) {
    if (isNaN(x[i].cells[3].innerText) == false) {
      myArray.push(parseInt(x[i].cells[3].innerText));
    } else {
      myArray.push(x[i].cells[3].innerText);
    }
  }
  console.log(myArray);
  sortedArray = myArray.sort();
  console.log(sortedArray);
  for (j = 1; j <= sortedArray.length; j++) {
    x[j].cells[3].innerText = sortedArray[j - 1];
  }
  this.onclick = null;
};
