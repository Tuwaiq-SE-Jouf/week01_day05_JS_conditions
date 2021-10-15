function EvenOrOdd() {
  let number = document.getElementById("number").value;
  let message;
  if (number % 2 == 0) {
    message = "The number is even";
  } else {
    message = "The number is odd";
  }
  document.getElementById("result").innerHTML = message;
}

function Grade() {
  let score = document.getElementById("score").value;
  console.log(score);
  let grade;
  if (score >= 90) {
    grade = "A";
  } else if (score >= 80 && score <= 89) {
    grade = "B";
  } else if (score >= 70 && score <= 79) {
    grade = "C";
  } else if (score >= 60 && score <= 69) {
    grade = "D";
  } else if (score <= 59) {
    grade = "F";
  }

  document.getElementById("grade").innerHTML = "The grade is " + grade;
}

// program to check leap year
function checkLeapYear() {
  let year = document.getElementById("year").value;
  //three conditions to find out the leap year
  let result;
  if ((0 == year % 4 && 0 != year % 100) || 0 == year % 400) {
    result = year + " is a leap year";
  } else {
    result = year + " is not a leap year";
  }
  document.getElementById("isLeap").innerHTML = result;
}
