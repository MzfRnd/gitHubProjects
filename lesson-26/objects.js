// 1)
const car = {
  manufacturer: "Ford",
  model: "Focus",
  year: 2010,
  avrSpead: "90km/h",
  info: function () {
    return `It is ${this.year} ${this.manufacturer} ${this.model} with ${this.avrSpead} speed`;
  },
  timeFrame: function (distance) {
    let speed = parseInt(this.avrSpead.slice(0, 2));
    let passedTime = distance / speed;
    let breakTime = Math.floor(passedTime / 4);
    return `Total time passed is ${passedTime + breakTime} hours`;
  },
};

// 2)

const firstFraction = {
  numerator: 3,
  denominator: 4,
};

const secondFraction = {
  numerator: 1,
  denominator: 2,
};

function AddFunc(first, second) {
  this.numerator =
    first.numerator * second.denominator + second.numerator * first.denominator;
  this.denominator = first.denominator * second.denominator;
}

function SubractFunc(first, second) {
  this.numerator =
    first.numerator * second.denominator - second.numerator * first.denominator;
  this.denominator = first.denominator * second.denominator;
}

function MultiplyFunc(first, second) {
  this.numerator = first.numerator * second.numerator;
  this.denominator = first.denominator * second.denominator;
}

function DeviderFunc(first, second) {
  this.numerator = first.numerator * second.denominator;
  this.denominator = first.denominator * second.numerator;
}

function SimplyfyFunc(obj) {
  numtor = obj.numerator;
  denom = obj.denominator;
  let divider;
  let largestCommonDivisor = (a, b) => {
    const firstNumArray = [];
    const secondNumArray = [];
    const commonDivisors = [];
    let ind;
    let largestCommonDiv;
    for (let i = 1; i <= a; i++) {
      const num = a / i;
      if (Number.isInteger(num) == true) {
        firstNumArray.push(num);
      }
    }
    for (let j = 1; j <= b; j++) {
      const num2 = b / j;
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
    return (divider = commonDivisors[0]);
  };
  largestCommonDivisor(numtor, denom);
  this.numerator = obj.numerator / divider;
  this.denominator = obj.denominator / divider;
}
// 1)
const car = {
  manufacturer: "Ford",
  model: "Focus",
  year: 2010,
  avrSpead: "90km/h",
  info: function () {
    return `It is ${this.year} ${this.manufacturer} ${this.model} with ${this.avrSpead} speed`;
  },
  timeFrame: function (distance) {
    let speed = parseInt(this.avrSpead.slice(0, 2));
    let passedTime = distance / speed;
    let breakTime = Math.floor(passedTime / 4);
    return `Total time passed is ${passedTime + breakTime} hours`;
  },
};

// 2)

const firstFraction = {
  numerator: 3,
  denominator: 4,
};

const secondFraction = {
  numerator: 1,
  denominator: 2,
};

function AddFunc(first, second) {
  this.numerator =
    first.numerator * second.denominator + second.numerator * first.denominator;
  this.denominator = first.denominator * second.denominator;
}

function SubractFunc(first, second) {
  this.numerator =
    first.numerator * second.denominator - second.numerator * first.denominator;
  this.denominator = first.denominator * second.denominator;
}

function MultiplyFunc(first, second) {
  this.numerator = first.numerator * second.numerator;
  this.denominator = first.denominator * second.denominator;
}

function DeviderFunc(first, second) {
  this.numerator = first.numerator * second.denominator;
  this.denominator = first.denominator * second.numerator;
}

function SimplyfyFunc(obj) {
  numtor = obj.numerator;
  denom = obj.denominator;
  let divider;
  let largestCommonDivisor = (a, b) => {
    const firstNumArray = [];
    const secondNumArray = [];
    const commonDivisors = [];
    let ind;
    let largestCommonDiv;
    for (let i = 1; i <= a; i++) {
      const num = a / i;
      if (Number.isInteger(num) == true) {
        firstNumArray.push(num);
      }
    }
    for (let j = 1; j <= b; j++) {
      const num2 = b / j;
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
    return (divider = commonDivisors[0]);
  };
  largestCommonDivisor(numtor, denom);
  this.numerator = obj.numerator / divider;
  this.denominator = obj.denominator / divider;
}
