var a=25;
a=+a; //No impact on a's value
console.log(a); //25
var b="70";
console.log(typeof b); //string
b=+b; //converts string to number
console.log(b); //70
console.log(typeof b);


var c="foo";
c=+c; //Converts foo to number
console.log(c); //NaN
console.log(typeof c); //number
var zero="";
zero=+zero; //empty strings are converted to 0
console.log(zero);
console.log(typeof zero);