var sum = function () {
    var i, total = 0;
    for (i = 0; i < arguments.length; i += 1) {
    total += arguments[i];
    var args = Array.prototype.slice.call(arguments);
    for (i = 0; i < args.length; i += 1) {
        console.log(args[i]);
    }
    }
    return total;
    };
    console.log(sum(1,2,3,4,5,6,7,8,9)); // prints 45
    console.log(sum(1,2,3,4,5)); // prints 15

    //args can be converted to an array using 
    //var args = Array.prototype.slice.call(arguments)