
let number = prompt('Enter a number of year: ');



if (number % 4 == 0) {
    if (number % 400 == 0) {
        if (number % 100 == 0) {
            console.log('true');
        }
        else {
            console.log('false');
        }
    }


    else {
        console.log('true');
    }
}
else {
    console.log('null');
}




































