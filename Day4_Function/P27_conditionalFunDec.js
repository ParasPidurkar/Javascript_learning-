//Do not use function declaration conditionally

if (true) {
    function sayMoo() {
    return 'trueMoo';
    }
    }
    else {
    function sayMoo() {
    return 'falseMoo';
    }
    }
    var res =sayMoo();
    console.log(res)