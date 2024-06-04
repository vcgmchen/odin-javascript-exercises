const convertToCelsius = function (tempF) {
  let tempC = (tempF - 32) * 5 / 9;
  if (Number.isInteger(tempC)) return tempC;
  else return Number(tempC.toFixed(1));
};

const convertToFahrenheit = function (tempC) {
  let tempF = (tempC * 9 / 5) + 32;
  if (Number.isInteger(tempF)) return tempF;
  else return Number(tempF.toFixed(1));
};

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit
};
