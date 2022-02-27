class Card {
  constructor(element, age, name, avatarUrl, description) {
    this.element = element;
    this.age = age;
    this.name = name;
    this.avatarUrl = avatarUrl;
    this.description = description;
  }

  // Method
  render() {
    //  Create and append new div block as child for element. Add some text inside this block.
    // const parent = document.getElementsByClassName("wrapper");
    const image = document.createElement("img");
    const div = document.createElement("div");
    const childH2 = document.createElement("h2");
    const parapgraph = document.createElement("p");

    childH2.innerText = "The Card";
    parapgraph.innerText = `The age is ${this.age}, the name is ${this.name} and ${this.description}`;
    image.setAttribute("src", this.avatarUrl);
    image.style.width = "100px";
    image.style.height = "100px";
    div.style.width = "200px";
    div.style.height = "400px";
    div.appendChild(image);
    div.appendChild(childH2);
    div.appendChild(parapgraph);
    this.element.appendChild(div);
  }
}

const el = document.getElementById("entryPoint");
const newUrl =
  "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSl3g8TbS_a1JyaJGeXnEbSRFAby-1sNFQDKQ&usqp=CAU";

const card = new Card(el, 20, "Ana", newUrl, "This is something to describe");

card.render();

// const myUser = new Card(element, age, name, avatarUrl, description);
// myUser.render();
