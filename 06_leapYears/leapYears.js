const leapYears = function (year) {
  let leapYearAlert = "";
  if (year % 4 === 0 && year % 100 === 0 && year % 400 !== 0) {
    leapYearAlert = false;
  } else if (year % 100 === 0 && year % 400 === 0) {
    leapYearAlert = true;
  } else if (year % 100 === 0 && year % 400 === 1) {
    leapYearAlert = false;
  } else if (year % 4 === 0) {
    leapYearAlert = true;
  } else {
    leapYearAlert = false;
  }
  console.log(leapYearAlert);
  return leapYearAlert;
};

leapYears(1600);

// Do not edit below this line
module.exports = leapYears;
