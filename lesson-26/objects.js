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
