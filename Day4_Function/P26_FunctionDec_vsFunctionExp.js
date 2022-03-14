//Both function declarations and variable declarations are hoisted but
//functions are hoisted first, and then variables.
//function declaration works with runtime execution


//func1();
var fun1 =function (){
console.log("This is function1")
}

fun2();
function fun2 (){
console.log("This is function2")
}