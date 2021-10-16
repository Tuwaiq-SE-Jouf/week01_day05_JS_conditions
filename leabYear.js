

let yourYear;
yourYear=prompt("enter the year : ");
let learYear  = false;


if (yourYear%4==0 && (yourYear%100!=0 || yourYear%400==0)){
    learYear =true;
    console.log(learYear+ " is leab year ");
}

else{
    learYear=false;
    console.log(learYear+ " is not leab year");
}