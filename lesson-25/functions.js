// 1)
let biggerNumber = (x, y) => {
  if (x < y) {
    return -1;
  } else if (x > y) {
    return 1;
  } else if (x == y) {
    return 0;
  }
};

// 2)
let factorialCounter = (n) => {
  for (let i = n; i > 1; i--) {
    console.log(i);
  }
};

// 3)
let numMaker = (x, y, z) => {
  const stringNum = `${x}${y}${z}`;
  const intiger = parseInt(stringNum);
  return intiger;
};
// 4)
let areaCalculator = (x, y) => {
  if (x && y) {
    return x * y;
  } else if (x && !y) {
    return x * x;
  }
};

// 5)
let isPerfect = (numInt) => {
  // const stringNum = prompt("please write a number");
  // const numInt = parseInt(stringNum);
  const numArray = [];
  let sum;
  for (let i = 2; i <= numInt; i++) {
    const num = numInt / i;
    if (Number.isInteger(num) == true) {
      numArray.push(num);
    }
  }
  const reducer = (previousValue, currentValue) => previousValue + currentValue;
  if (numArray.length > 0) {
    sum = numArray.reduce(reducer);
  }
  // console.log(numArray);
  if (numInt == sum) {
    // console.log(`${numInt} is a perfect number`);
    return numInt;
  } else {
    // console.log(`${numInt} is not a perfect number`);
    return false;
  }
};

// 6)
let listPerfectNumbers = () => {
  const range = prompt("Please write min and max values seperated with comma");
  const numArray = range.split(",");
  let minRange;
  let maxRange;
  const perfectList = [];
  if (parseInt(numArray[0]) > parseInt(numArray[1])) {
    minRange = parseInt(numArray[1]);
    maxRange = parseInt(numArray[0]);
  } else if (parseInt(numArray[0]) < parseInt(numArray[1])) {
    minRange = parseInt(numArray[0]);
    maxRange = parseInt(numArray[1]);
  } else if (parseInt(numArray[0]) == parseInt(numArray[1])) {
    if (isPerfect(numArray[0])) {
      console.log(
        `max and min ranges are the same and ${numArray[0]} is a perfect number`
      );
    } else {
      console.log(
        `max and min ranges are the same and ${numArray[0]} is not a perfect number`
      );
    }
  }
  for (i = minRange; i <= maxRange; i++) {
    if (isPerfect(i)) {
      perfectList.push(i);
    }
  }
  console.log(perfectList);
};

// 7)
let showTime = (hh, mm, ss) => {
  if (
    hh &&
    mm &&
    ss &&
    hh < 25 &&
    hh >= 0 &&
    (mm < 61) & (mm >= 0) &&
    ss <= 60 &&
    ss >= 0
  ) {
    return `${hh}:${mm}:${ss}`;
  } else if (hh && mm && hh < 25 && hh >= 0 && (mm < 61) & (mm >= 0)) {
    return `${hh}:${mm}:00`;
  } else {
    return "Wrong Format";
  }
};

// 8)
let calcSeconds = (hh, mm, ss) => {
  if (hh && mm && ss) {
    return hh * 3600 + mm * 60 + ss;
  } else if (hh && mm) {
    return hh * 3600 + mm * 60;
  } else {
    return "Wrong Format";
  }
};

// 9)
let turnSecondsToTime = (seconds) => {
  let minutes;
  let hours;
  let leftSeconds;
  let lastSeconds;
  if (seconds < 60) {
    return `It is 0 hour 0 minute ${seconds} seconds`;
  } else if (seconds >= 60 && seconds < 3600) {
    minutes = Math.floor(seconds / 60);
    leftSeconds = seconds - minutes * 60;
    return `It is 0 hour ${minutes} minutes ${leftSeconds} seconds`;
  } else if (seconds >= 3600) {
    hours = Math.floor(seconds / 3600);
    leftSeconds = seconds - hours * 3600;
    if (leftSeconds >= 60) {
      minutes = Math.floor(leftSeconds / 60);
      lastSeconds = leftSeconds - minutes * 60;
      return `It is ${hours} hours ${minutes} minutes ${lastSeconds} seconds`;
    } else {
      return `It is ${hours} hours 0 minutes ${leftSeconds} seconds`;
    }
  }
};

// 10)
let dateDifference = (a, b, c, x, y, z) => {
  let difference;
  let firstTime = calcSeconds(a, b, c);
  let secondTime = calcSeconds(x, y, z);
  console.log(`${firstTime} and ${secondTime}`);
  if (firstTime > secondTime) {
    difference = firstTime - secondTime;
  } else if (firstTime < secondTime) {
    difference = secondTime - firstTime;
  } else if (firstTime == secondTime) {
    return "There is no difference";
  }
  let result = turnSecondsToTime(difference);
  return `${result}`;
};
