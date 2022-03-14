var a=0;
function first(num)
{
var b=1;
console.log("value of a in function fisrt " + a);
console.log("value of b in function first " + b);
function second()
{
var c=2;
console.log("value of a in function second"+a);
console.log("value of b in function second"+b);
console.log("value of c in function second"+c);
}
second();
}
first();