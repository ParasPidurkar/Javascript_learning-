//function declarations are hoisted but function expressions are not.

function func1(){
    console.log(a)
    var a=10;
}
func1();

//global expressions are hoisted in JS