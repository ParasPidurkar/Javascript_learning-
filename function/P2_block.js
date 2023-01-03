//function scope 
function test() {
    let a = 12;
    var a1 = 13;

    console.log(a)
    console.log(a1)
}
test()
    //console.log(a)  //error 
    //console.log(a1)  //error
    {
        let b = 14;
        var b1 = 15;

        console.log(b)
        console.log(b1)

    }
    //console.log(b) //Error
console.log(b1)