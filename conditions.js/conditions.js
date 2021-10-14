console.log(" the first ");


let number;
number = prompt(" inter a number :  ");


if (number % 2 == 0) {
    console.log(" The number is even");
}
else
    console.log(" The numbers is odd ");


console.log("------------- ");

console.log(" the second ");


let score;
score = prompt(" inter your score : ");
if (score >= 90) {

    console.log(" your grade is : A");
}
else if (score >= 80) {
    console.log(" your grade is : B");
}
else if (score >= 70) {
    console.log(" your grade is : C");
}
else if (score >= 60) {
    console.log(" your grade is : D");
}

else {

    console.log(" your grade is : F ");
}


console.log(" --------------- ");

console.log(" the third ");



let year;
year = prompt(" Inter A Year : ");

if ((year % 4 == 0) && (year % 100 != 0) || (year % 400 == 0)) {

    console.log("  It Is A Leap Year ");
}
else {

    console.log(" It Is Not A Leap Year ");


}







