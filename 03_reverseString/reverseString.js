const reverseString = function (input) {
  let splitResult = input.split("").reverse();
  let reversedString = "";

  for (let i = 0; i < splitResult.length; i++) {
    reversedString += splitResult[i];
  }
  return reversedString;
};
reverseString(`hello there`);
// Do not edit below this line
module.exports = reverseString;
