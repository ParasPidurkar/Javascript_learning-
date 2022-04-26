//we have  to use new keyword
//JavaScript is a prototypal inheritance language. This means that objects can inherit properties directly from other objects.

//here Person is a constructor function
var Player = function (name) {
    this.name = name;
    };
    Player.prototype.greet = function () {
    return this.name;
    };
    var player1 = new Player('Messi');  //Invoking Person constor function using new keyword
    //player1 is a object
    console.log(typeof player1);
    console.log(player1.greet());


    //functions can also be invoked using apply() and call() method