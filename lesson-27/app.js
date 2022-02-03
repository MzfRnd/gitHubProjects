// 1)
const groceryList = [
  {
    name: "bread",
    amount: 1,
    isBought: true,
  },
  {
    name: "milk",
    amount: 2,
    isBought: false,
  },
  {
    name: "eggs",
    amount: 12,
    isBought: true,
  },
];

let displayList = (someArray) => {
  const notBought = [];
  const bought = [];
  for (array of someArray) {
    if (array.isBought == false) {
      notBought.push(array.name);
    } else if (array.isBought == true) {
      bought.push(array.name);
    }
  }
  const fullList = notBought.concat(bought);
  return fullList;
};

let addList = (purchase) => {
  const nameList = [];
  let indexNum;
  for (item of groceryList) {
    nameList.push(item.name);
  }
  if (nameList.includes(purchase.name)) {
    indexNum = nameList.indexOf(purchase.name);
    groceryList[indexNum].amount =
      groceryList[indexNum].amount + purchase.amount;
    console.log(indexNum);
  } else {
    groceryList.push(purchase);
  }
  console.log(groceryList);
};

let makeBought = (itemName) => {
  const notBought = [];
  const wholeList = [];
  let indexNum;
  for (item of groceryList) {
    wholeList.push(item.name);
    if (item.isBought == false) {
      notBought.push(item.name);
    }
  }
  console.log(notBought);
  if (notBought.includes(itemName)) {
    indexNum = wholeList.indexOf(itemName);
  } else {
    console.log("please enter a name on the list that is not bought yet");
  }
  console.log(indexNum);
  groceryList[indexNum].isBought = true;
  return groceryList;
};

// 2)
const reciept = [
  { name: "Cuban Cigars", amount: 5, price: 10 },
  { name: "Jack Daniels", amount: 2, price: 90 },
  { name: "Gouda", amount: 1, price: 40 },
];

let printReciept = () => {
  const totalPrice = [];
  for (item of reciept) {
    totalPrice.push(item.amount * item.price);
    sum = totalPrice.reduce((a, b) => a + b, 0);
    console.log(
      `${item.amount} ${item.name} $${item.price} = $${
        item.amount * item.price
      }`
    );
  }
  console.log(`Total = $${sum}`);
};

let countingReciept = () => {
  const totalPrice = [];
  for (item of reciept) {
    totalPrice.push(item.amount * item.price);
    sum = totalPrice.reduce((a, b) => a + b, 0);
    console.log(
      `${item.amount} ${item.name} $${item.price} = $${
        item.amount * item.price
      } sub total = $${sum}`
    );
  }
  console.log(`Total = $${sum}`);
};

let mostExpensiveItem = () => {
  const totalPrice = [];
  let indexNum;
  let item = {};
  for (item of reciept) {
    totalPrice.push(item.amount * item.price);
  }
  largestNum = Math.max(...totalPrice);
  indexNum = totalPrice.indexOf(largestNum);
  item = reciept[indexNum];
  console.log(
    `Most expensive item on the list is ${item.name} with the price of $${item.price}`
  );
};

let averagePrice = () => {
  const totalPrice = [];
  const totalAmount = [];
  let sumTotal;
  let amountTotal;
  let averagePrc;
  for (item of reciept) {
    totalPrice.push(item.amount * item.price);
    sumTotal = totalPrice.reduce((a, b) => a + b, 0);
    totalAmount.push(item.amount);
    amountTotal = totalAmount.reduce((a, b) => a + b, 0);
  }
  averagePrc = sumTotal / amountTotal;
  console.log(`Average price of every item = $${averagePrc}`);
};
