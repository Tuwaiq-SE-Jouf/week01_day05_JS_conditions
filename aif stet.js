let num2 = prompt("Enter a Number ");

if (num2 % 2===0){
    console.log("odd Number");
}

else {
    console.log("even Number");
}



let num = prompt("Enter a grade");

if (num >=90){
    console.log("your grade is A");
}

else if  
    (num >=80 && num <=89){
        console.log("your grade is B");
}

else if  
    (num >=70 && num <=79){
        console.log("your grade is C");
}


else
 if  
    (num >=60 && num <=69){
        console.log("your grade is D");
}

else  { 
    (num <= 59)
        console.log("your grade is F");
}

let year = prompt("Enter a year");

     {   
        if ( (year % 4 === 0 && year % 100 !== 0) || (year % 4 === 0 && year % 100 === 0 && year % 400 === 0) ) {
            console.log("Leap year.");
        } else {
            console.log("Not leap year.");
        }
    }