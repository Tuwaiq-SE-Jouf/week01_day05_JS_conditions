let numberOfYear = prompt("Enter a Number of year :");
       
            if(numberOfYear%4==0){
                if(numberOfYear%100==0){
                    if(numberOfYear%400==0){
                        console.log("is Leap Year");
                    }
                    else{
                        console.log("Not Leap Year");
                    }
                }
                else{
                    console.log("is Leap Year");
                }

            }
            else{
                console.log("Not Leap Year");
            }