const sumAll = function (num1, num2) {
  let totalSum = 0;
  if (
    typeof num1 !== "string" &&
    typeof num2 !== "string" &&
    num1 > 0 &&
    num2 > 0
  ) {
    for (let i = 0; i <= num2 || i <= num1; i++) {
      if (num1 < num2) {
        totalSum += i;
      } else if (num2 < num1) {
        totalSum += i;
      }
    }
  } else {
    totalSum = "ERROR";
  }
  console.log(totalSum);
  return totalSum;
};
sumAll(10, "90");
// Do not edit below this line
module.exports = sumAll;
