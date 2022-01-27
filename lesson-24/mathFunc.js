// 1)
let identicalNumChecker = () => {
  num = prompt("please enter a 3 digit number");
  if (num.length == 3) {
    if (num[0] == num[1] || num[0] == num[2] || num[1] == num[2]) {
      console.log(" Your number has at least one identical digits");
    } else {
      console.log("Your number have no identical digits");
    }
  } else {
    console.log("your number doesn't have 3 digits");
  }
};

// 2)
let palindromeChecker = (num) => {
  num = prompt("Please enter 5 digit number to check if it is a palindrome");
  nm = num;
  let string = nm.toString();
  if (string[0] == string[4] && string[1] == string[3]) {
    result = "It is a palindrome";
  } else {
    result = "Not a palindrome";
  }
  return alert(result);
};

// 3)

let currencyConverter = () => {
  let num = prompt("please type Usd amount to convert");
  let currency = prompt(
    "Please type one of the following currency to convert \nEUR, SEK, AUD"
  );
  let eur = num * 0.88;
  let sek = num * 9.19;
  let aud = num * 1.39;
  if (currency.toUpperCase() === "EUR") {
    return eur;
  } else if (currency.toUpperCase() === "SEK") {
    return sek;
  } else if (currency.toUpperCase() === "AUD") {
    return aud;
  }
};

// 4)
let ifFits = () => {
  let circumference = prompt("please enter the circumference of the circle");
  let areaOfCircle = circumference ** 2 / (4 * Math.PI);
  let parimater = prompt("please enter the parimeter of the square");
  let areOfSquare = (parimater / 4) ** 2;
  let message;
  if (areOfSquare > areaOfCircle) {
    message = "circle can fit in the square";
  } else {
    message = "circle can't fit in the square";
  }
  return message;
};
// 5)

let dayAfterDate = () => {
  yourDate = prompt("please enter a date as dd:mm:yyyy");
  const year = yourDate.substring(6, 10);
  console.log("this is the year ", year);
  const month = yourDate.substring(3, 5);
  console.log("This is the month ", month);
  const day = yourDate.substring(0, 2);
  console.log("this is the day ", day);

  const currentDateObject = new Date(`${year}-${month}-${day}`);

  currentDateObject.setDate(currentDateObject.getDate() + 1);

  const nextDayString = currentDateObject.toDateString();

  console.log("nextDayString: ", nextDayString);
};
