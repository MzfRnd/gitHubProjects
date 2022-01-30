// 1)
let factorial = () => {
  let number = parseInt(
    prompt("please enter a number to find out its factorial")
  );
  let factNum = (number * (number + 1)) / 2;
  return factNum;
};

// 2)
let largestCommonDivisor = () => {
  const stringNum = prompt("please write two numbers devided with comma");
  const numArray = stringNum.split(",");
  const firstNum = parseInt(numArray[0]);
  const secondNum = parseInt(numArray[1]);
  const firstNumArray = [];
  const secondNumArray = [];
  const commonDivisors = [];
  let ind;
  for (let i = 1; i <= firstNum; i++) {
    const num = firstNum / i;
    if (Number.isInteger(num) == true) {
      firstNumArray.push(num);
    }
  }
  for (let j = 1; j <= secondNum; j++) {
    const num2 = secondNum / j;
    if (Number.isInteger(num2) == true) {
      secondNumArray.push(num2);
    }
  }
  for (let k = 0; k < firstNumArray.length; k++) {
    if (firstNumArray.includes(secondNumArray[k])) {
      ind = secondNumArray[k];
      commonDivisors.push(ind);
    }
  }
  console.log(firstNumArray);
  console.log(secondNumArray);
  console.log(commonDivisors);
  return commonDivisors[0];
};

// 3)
let divisors = () => {
  const userNumberString = prompt("Please give us a number");
  const n = parseInt(userNumberString);
  for (var i = 1; i < n; i++) {
    const dev = n / i;
    if (Number.isInteger(dev) == true) {
      console.log(dev);
    }
  }
};

// 4)
let digitFinder = () => {
  let number = prompt("please enter a number to find out the digits");
  return number.length;
};

// 5)
let tenNumbers = () => {
  numbers = prompt("please enter 10 numbers with commas");
  numArray = numbers.split(",");
  let positive = 0;
  let negative = 0;
  let zeroCount = 0;
  let oddNumbers = 0;
  let evenNumbers = 0;
  for (i = 0; i < numArray.length; i++) {
    if (parseInt(numArray[i]) > 0) {
      ++positive;
    } else if (parseInt(numArray[i]) < 0) {
      ++negative;
    } else if (parseInt(numArray[i]) == 0) {
      ++zeroCount;
    }
  }
  for (j = 0; j < numArray.length; j++) {
    if (parseInt(numArray[j]) % 2 == 0) {
      ++evenNumbers;
    } else if (parseInt(numArray[j]) % 2 == 1) {
      ++oddNumbers;
    }
  }

  console.log(
    `The positive numbers:${positive}, The negative numbers:${negative}, number of zeros:${zeroCount}, The odd numbers:${oddNumbers}, The even numbers:${evenNumbers}`
  );
};
// +6)
let fourOperations = () => {
  let threeValues = prompt(
    "please enter two numbers and a sign seperated with comma to make one of the four operations if not please type no"
  );
  do {
    let array = threeValues.split(",");
    let result;
    if (array[2] == "+") {
      result = parseInt(array[0]) + parseInt(array[1]);
    } else if (array[2] == "-") {
      result = parseInt(array[0]) - parseInt(array[1]);
    } else if (array[2] == "*") {
      result = parseInt(array[0]) * parseInt(array[1]);
    } else if (array[2] == "/") {
      result = parseInt(array[0]) / parseInt(array[1]);
    }
    console.log(result);
    threeValues = prompt(
      "please enter two numbers and a sign seperated with comma to make one of the four operations if not please type no"
    );
  } while (threeValues != "no");
};

// 7)
let moveDigits = () => {
  const number = prompt(
    "please enter a number and a digit seperated by a coma"
  );
  const array = number.split(",");
  const firstNumber = array[0];
  const moveNumber = parseInt(array[1]);
  const movedDigit = firstNumber.slice(0, moveNumber);
  const secondPart = firstNumber.slice(moveNumber);
  return secondPart + movedDigit;
};

// 8
function getDayName() {
  // 1. show first confirm message
  const browserDate = new Date();
  // 1. Default 'Monday'
  // 2. Ask user to set day
  //   let currentDay = browserDate.toLocaleDateString("EN", { weekday: "long" });
  let currentDay = browserDate.toLocaleDateString("EN", { weekday: "long" });

  let isNextDay = window.confirm(
    "Current day is: " + currentDay + "\nWould you like to see the next one?"
  );

  //   console.log(newestTime.toLocaleDateString("EN", { weekday: "long" }));

  while (isNextDay) {
    switch (currentDay) {
      case "Monday":
        currentDay = "Tuesday";
        break;
      case "Tuesday":
        currentDay = "Wednesday";
        break;
      case "Wednesday":
        currentDay = "Thursday";
        break;
      case "Thursday":
        currentDay = "Friday";
        break;
      case "Friday":
        currentDay = "Saturday";
        break;
      case "Saturday":
        currentDay = "Sunday";
        break;
      case "Sunday":
        currentDay = "Monday";
        break;
    }

    isNextDay = window.confirm(
      "Current day is: " + currentDay + "\nWould you like to see the next one?"
    );
  }
}

// 9)

let multiplyTable = () => {
  for (let i = 2; i < 10; i++) {
    for (let j = 1; j < 11; j++) {
      console.log(`${i} x ${j} = ${i * j}`);
    }
  }
};
