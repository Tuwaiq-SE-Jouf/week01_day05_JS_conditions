//    first cod ..

let number =prompt("enter the number")

if (number % 2 ==0){
    console.log("the number is even")
}
else{ console.log("the number is adds")}





//    seconde code ..

let grade =prompt("enter your grade")

if (grade >= 90){
    console.log("A")
}
else if (grade <=89  && grade >= 80){
console.log("B")
}
else if (grade <=79 && grade >= 70){
    console.log("C")

}
else if (grade <=69 && grade >= 60){
    console.log("D")
}
else if (grade <=59){
    console.log("F")
}



//   third code ..

function leapyear(year)
{
return (year % 100 === 0) ? (year % 400 === 0) : (year % 4 === 0);
}
console.log(leapyear(2016));
console.log(leapyear(2000));
console.log(leapyear(1700));
console.log(leapyear(1800));
console.log(leapyear(100));


