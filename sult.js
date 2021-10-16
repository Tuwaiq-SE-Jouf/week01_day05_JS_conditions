// even & odd numbers 
let numb = prompt ('enter a numb');
if (numb%2 == 0){
console.log('even'); 
}
else{
    console.log('odd');
}



// Write a program that takes a score as an input and print the Gradulet number = prompt ('pleas enter a number');
let number = prompt ('enter a number')
if(number >= 90){ 
    console.log ('your grade is A')
} 
if( number >= 80 && number <=89 ) {
    console.log( 'your grade is B ');
}

if( number >= 70 && number <= 79 ) {
    console.log ('your grade is C')
}
if( number >= 60 && number <=69 ) {
    console.log( 'your grade is D ');
}
if( number <= 59 ) {
    console.log( 'your grade is F');
}

// Leap year (Bonus)

 let year = prompt ( 'enter a year')
 
 if ( year %4 ==0){
     if (year % 100 !=0 || year%400 == 0) {
        console.log ('its a leap year')

     } else {
         console.log( 'it is not a leap year')

     }
         
 } else{
     console.log('it is not a leap year')
 }
