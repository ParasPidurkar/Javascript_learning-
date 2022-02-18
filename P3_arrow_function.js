console.log("Testing the code for the arrow fuction");

//fuction expression
const ageFun = function(birthyear){

    return 2022-birthyear;
}
console.log(ageFun(1997));

//Arrow function
const agefunction = age => 2022 -age ;
console.log(agefunction(1997));

//passing multiple parameters to arrow function

let sum = (a,b,c) => {
    console.log(b + "=> 2nd  argument passed");
    return `we have successfully passed the multiple args to the arrow function the value passed are ${a} ,${b}, ${c}`;   // we are using the placeholder here

  }
  let rece = sum(1,2,3);
  console.log(rece)