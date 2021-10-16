let num = prompt ("enter number");
if(num%2==1){
    console.log("number is odd")
}
else{console.log("number is even")}

let number = prompt( "please enter a digre");
if(number <= 100 && number>=90){
    console.log("A");
}
if(number<= 89 && number>=80){
    console.log("B");
}
if(number<=79 && number>=70){
console.log("C");
}
if(number<=69 && number>=60){
console.log("D");
}
if(number <=59){
console.log("F");
}
let year = prompt("Enter year to know it is leap or not")
            if (year%4==0 && year %! 100 || year%400==0){
                console.log(" year is Leap year");}
            else {
                console.log("year is Not Leap year");}
