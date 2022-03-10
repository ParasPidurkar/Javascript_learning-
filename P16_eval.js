console.log(typeof eval(new String("1+1"))); // "object"
console.log(eval(new String("1+1"))); //1+1
console.log(eval("1+1")); // 2
console.log(typeof eval("1+1")); // returns "number"
var expression = new String("1+1");
console.log(eval(expression.toString())); //2