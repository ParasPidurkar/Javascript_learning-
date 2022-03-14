function callerFunction(calledFunction,num){
   console.log("The passed number is :"+num) 
   calledFunction();
}

callerFunction(function(){console.log("Caller Function called")},1)
