// var exec = require('child_process').exec, child;
// function returnPromises(userName) {
//     // return new Promise((resolve,reject) => {
//     //   setTimeout(() => {
//     //     console.log("Promise Executed..."+newData);
//     //     resolve("Sample Data");
//     //     //reject("Issue")
//     //   }, 3000);
//     // });


//     var assmbleComand = 'flow keys generate';
//     console.log("Genrating the keys for user "+userName)
    
// 	child = exec(assmbleComand,
// 	function (error, stdout, stderr) {		
// 	retStdOut = stdout;		
// 	if(error){
// 		console.log('flow keys generate  exec error: ' + error);
// 		}
// 		else
//         {
//             // call the promise functions for flow accounts create --key
//             //console.log(stdout)
//             index  = stdout.indexOf('Private'),
//             startIndex = index+14;
//             //console.log("startIndex"+startIndex)
//             stopIndex= startIndex+64;
//             userPrivateKey=stdout.substring(startIndex,stopIndex);
//             //console.log("userPrivate Key is :- "+userPrivateKey)
//             pubindex  = stdout.indexOf('Public'),
//             pubstartIndex = pubindex+13;
//             pubstopIndex= pubstartIndex+128;
//             userPublicKey=stdout.substring(pubstartIndex,pubstopIndex);
//             if((userPrivateKey!=undefined)&&(userPublicKey!= undefined))
//             {
//             return new Promise((resolve,reject) => {
//                   //console.log("Promise Executed..."+accAddress);
//                   resolve(userPrivateKey);
//                   //console.log("user Accnt Data sent")
//                 })
//             }
//           }
//         });
//   }
  

// //   //calling function which wil wait for data from returnPromise function
// //   async function ExecuteFunction() {
// //     newData = "Paras";
// //     try{
// //     var getData = await returnPromises(newData)
// //     //.then(console.log(getData));
// //     console.log(getData);
// //     if(getData){
// //         console.log("returnPromise Function Executed"+newData)
// //     }
// //     }catch(error){
// //         console.log("Error "+error)
// //     }
// //     console.log("Tag1");
// //     console.log("Tag2");
// //     console.log("Tag3");
    
// //   }
  
// //   ExecuteFunction()

// const express = require('express')
// const app = express()
// const port = 3000

// app.post('/', async (req, res) => {
//   newData = "Paras";
//     try{
//     var getData = await returnPromises(newData)
//     //.then(console.log(getData));
//     console.log(getData);
//     if(getData){
//         console.log("returnPromise Function Executed"+newData)
//     }
//     }catch(error){
//         console.log("Error "+error)
//     }
//     console.log("Tag1");
//     console.log("Tag2");
//     console.log("Tag3");
//   //res.send(req.body.userName);
// });

// app.listen(port, () => {
//     console.log(`app listening at http://localhost:${port}`)
//   });
  



//test2
// const util = require('util');
// const exec = util.promisify(require('child_process').exec);
// const promise = exec('flow deploy contracts');
// const child = promise.child; 

// child.stdout.on('data', function(data) {
//   //console.log('stdout: ' + data);
// });
// child.stderr.on('data', function(data) {
//     //console.log('stderr: ' + data);
// });
// child.on('close', function(code) {
//     //console.log('closing code: ' + code);
// });

// // i.e. can then await for promisified exec call to complete
// async function test(){
//   const { stdout, stderr } = await promise;
//   console.log("stdout::-"+stdout)
// }
// test();




//test3


const util = require('util');
const exec = util.promisify(require('child_process').exec);

async function lsExample(data) {
  try {
    console.log("This is the passed data "+data)
    const { stdout, stderr } = await exec('flow deploy contracts');
    console.log('stdout:', stdout);
    console.log('stderr:', stderr);
  } catch (e) {
    console.error(e); // should contain code (exit code) and signal (that caused the termination).
  }
}
lsExample("test")
