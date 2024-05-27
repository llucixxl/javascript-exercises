const repeatString = function (string, num) {
  let severalGreeting = "";

  if (num < 0) return "ERROR";

  for (let i = 0; i < num; i++) {
    severalGreeting += string;
  }
  return severalGreeting;
};

repeatString("hey", 3);

// Do not edit below this line
module.exports = repeatString;
