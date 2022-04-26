let myPromise = new Promise(function(myResolve, myReject) {
    //setTimeout(function() { myResolve("testing the promise"); }, 3000);
    myReject("My reject resp send first")  // will result in  unhandles promise rejection
  });
  
  myPromise.then(function(value) {
    console.log(value)
	
});

  myPromise.catch(error=>{
console.log("Issue in fullfilling the promise")
})
