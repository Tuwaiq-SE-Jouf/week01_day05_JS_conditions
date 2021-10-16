let Grade = prompt('Enter a number:');
if (Grade >= 90) {
    console.log('the grade is A');
}
else if (Grade >= 80 && Grade <= 89) {
    console.log('the grade is B');
}
else if (Grade >= 70 && Grade <= 79) {
    console.log('the grade is C');
}
else if (Grade >= 60 && Grade <= 69) {
    console.log('the grade is D');
}
else if (Grade < 59) {
    console.log('the grade is F');
}