let year =prompt("Enter year to know it is leap or not")
if (year%4==0 && year %! 100 && year%400==0)
{
    console.log("year is leap year");
}
    else

    {
        console.log("year is not leap year");
    }