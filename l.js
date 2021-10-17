

let year;
year = prompt("Inter A Year:");


 if ((year % 4 == 0) && (year % 100 != 0) || (year % 400 == 0))

{ 
    console.log(" It Is A Leap Year ");
}

      else {
           console.log(" It Is Not A Leap Year ");
}