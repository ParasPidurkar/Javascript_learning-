var foo = true;
if (foo) {
let bar = 42; //variable bar is local in this block { }
var test =32;
console.log( bar );
console.log( test );

}
console.log( bar );   // this will lead to reference error    let is a ES6 feature check the ES6 support in browser before trying 
console.log( test );  // var variable can be accessed outside
