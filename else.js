//even & odd numbers
console .log("....even & odd numbers....");
    
let unmber = prompt("Enter the number please");
    if(unmber%2!=0){

console.log("The number is add ..(("+unmber+"))");

    }
   else{ console.log("The number is even .. (( "+unmber+"))");}
    //Write a program that takes a score as an input and print the Grade:

    console.log("....print the Grade....");
    let grade=prompt(" Enter the Grade please: ");
    if(grade >=90)
    { console.log(" Grade A" )}
    else if( grade >=80 )
    {console.log(" Grade B") }
    else if( grade >=70 )
    {console.log(" Grade C") }
    else if( grade >=60)
    {console.log(" Grade D") }
    else 
    {console.log(" Grade F") }
    //Leap Year OR NOT a Leap Year 
    console .log("....Leap Year  && NOT a Leap Year....");
    let Year=prompt(" enter the year .. ")
    if( Year %4==0 && Year%100!=0|| Year%400==0){
        console.log("true Leap Year... ")
    }
    else{console.log("false NOT a Leap Year")}
    
 