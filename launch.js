const number = prompt("Enter a number ");

//check if the number is even
if(number % 2 == 0) {
    console.log("The number is even.");
}

// if the number is odd
else {
    console.log("The number is odd.");
}




let number = prompt("Enter the grade ");
if (avg >= 90){
    console.log("Grade : A");      
    } 

  else if (avg >= 80) {
          console.log("Grade : B"); 
            } 

        else if (avg >= 70) 
       {
          console.log("Grade : C"); 
    } else if (avg >= 60) {
          console.log("Grade : D"); 
  }
  
        else {
          console.log("Grade : F"); 
}




let year = prompt("Enter the year ");

function isLeap(year) {
    if (year % 4 === 0) {
       if (year % 100 === 0){
          if (year % 400 == 0){
            console.log("Leap year.");
          } else {
            console.log("Not leap year.");
          }
       } else {
        console.log("Leap year.");
       }
    } else{
        console.log("Not leap year.");
    }
 }



 if (year % 400 == 0) {
 console.log("true");}
    else { 
        console.log("false");
      }