const convertToCelsius = function (value1) {
  let resultToCelsius;

  resultToCelsius = (value1 - 32) * (5 / 9);
  return Number(resultToCelsius.toFixed(1));
};

console.log(convertToCelsius(32));

const convertToFahrenheit = function (value2) {
  let resultToFahrenheit;

  resultToFahrenheit = value2 * (9 / 5) + 32;
  return Number(resultToFahrenheit.toFixed(1));
};

console.log(convertToFahrenheit(1));

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit,
};
