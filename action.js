
console.log("JS_conditions Lab ");
console.log("*************************");
//ADD or EVEN Numbers
console.log(" ** Task 1 **");

let theNumber = prompt(" Enter the Number you wanit to test is ADD or EVEN please ");
if (theNumber % 2 != 0) {

    console.log("Your Number is ADD ");

}
else { console.log("Your Number is EVEN "); }


//function that takes a score as an input and print the Grade.
console.log(" ** Task 2 **");
let grade = prompt(" Enter the Grade please: ");

if (grade >= 90) {
    console.log(" Grade A")
}
else if (grade >= 80) {
    console.log(" Grade B")
}
else if (grade >= 70) {
    console.log(" Grade C")
}
else if (grade >= 60) {
    console.log(" Grade D")
}
else {
    console.log(" Grade F")
}


// Leap year (Bonus)
console.log(" ** Task 3 **");
let Year = prompt(" enter the year .. ")
if (Year % 4 == 0 && Year % 100 != 0 || Year % 400 == 0) {
    console.log("It is a Leap Year  ")
}
else {
    console.log(" It is NOT a Leap Year ")
}



