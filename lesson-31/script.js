//just to use it in event listener at the bottom
const btn = document.getElementById("btn");
const breed = document.getElementById("breed");
const wrapper = document.getElementById("wrapper");
const favWrapper = document.getElementById("favWrapper");
let sectionOne;
let title;
let catDiv;
let favItemDiv;
let counter = 0;
const storageArray = [];

function hideFavList() {
  if (!favItemDiv) {
    favWrapper.classList.add("hide");
  }
}

hideFavList();

function showCatsData(data) {
  const entryPoint = document.getElementById("entryPoint");
  if (catDiv) {
    sectionOne.removeChild(catDiv);
  }

  // Creating the html part of the elements that hold the information

  if (data.length == 0) {
    return;
  }
  sectionOne = document.getElementById("sectionOne");
  const favDiv = document.createElement("div");
  const info = document.createElement("span");
  const addFav = document.createElement("button");
  catDiv = document.createElement("div");
  title = document.createElement("h2");

  const catBreed = document.createElement("p");
  const description = document.createElement("p");
  const altNames = document.createElement("p");
  const lifeSpan = document.createElement("p");
  const wikiLink = document.createElement("a");
  // The inner text of the elements
  info.innerText = "Breed Info:";
  addFav.innerText = "Add to Favorite";

  title.innerText = data[0].name.toUpperCase();
  catBreed.innerText = `Cat Breed : ${data[0].name}`;
  if (data[0].description) {
    description.innerText = `Description: ${data[0].description}`;
  } else {
    description.innerText = "Description: No description";
  }

  if (data[0].alt_names) {
    altNames.innerText = `Alternative Names : ${data[0].alt_names}`;
  } else {
    altNames.innerText =
      "Alternative Names : No alternative names for this breed";
  }
  if (data[0].life_span) {
    lifeSpan.innerText = `Life Span : ${data[0].life_span}`;
  } else {
    lifeSpan.innerText = "Life Span : Unknown";
  }
  wikiLink.innerText = "More information";
  wikiLink.href = data[0].wikipedia_url;
  // Adding all the elements under the catDiv
  catDiv.appendChild(favDiv);
  favDiv.appendChild(info);
  favDiv.appendChild(addFav);

  catDiv.appendChild(catBreed);
  catDiv.appendChild(description);
  catDiv.appendChild(altNames);
  catDiv.appendChild(lifeSpan);
  catDiv.appendChild(wikiLink);
  sectionOne.appendChild(catDiv);
  // Just to see what information we get from the cat Api
  // this the wrapper of the cat information elements. I added all children margin in the css.
  catDiv.classList.add("catDiv");
  favDiv.classList.add("favDiv");
  info.style.display = "inline";
  info.style.fontSize = "20px";
  addFav.classList.add("addFav");
  addFav.addEventListener("click", saveFavBreed);
}
function saveFavBreed(breed) {
  localStorage.setItem("result", title.innerText);
  createFavList();
  favWrapper.classList.remove("hide");
}
function createFavList() {
  counter++;
  const favList = document.getElementById("favList");
  const favStore = localStorage.getItem("result");
  storageArray.push(JSON.stringify(favStore));
  console.log(storageArray);
  favItemDiv = document.createElement("div");
  const favItem = document.createElement("p");
  const deleteButton = document.createElement("button");
  favItemDiv.appendChild(deleteButton);
  favItemDiv.appendChild(favItem);
  favList.appendChild(favItemDiv);
  const toDelete = favList.childNodes[counter - 1];
  favItem.innerText = `${counter}. ${favStore}`;
  deleteButton.innerText = "X";
  favItemDiv.classList.add("favItemDiv");
  deleteButton.classList.add("deleteButton");
  deleteButton.addEventListener("click", function () {
    favList.removeChild(toDelete);
  });
}

function loadAndCreateCat() {
  fetchCb(
    `https://api.thecatapi.com/v1/breeds/search?q=${breed.value}`,
    showCatsData
  );
}

btn.addEventListener("click", loadAndCreateCat);
