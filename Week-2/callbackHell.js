// callback hell
// setTimeout(function(){
//     console.log("hi");
//     setTimeout(function(){
//         console.log("hello");
//         setTimeout(function(){
//             console.log("hi there");
//         },5000);
//     },3000);
// },1000);

// // doesn't have callback hell
// function step3Done(){
//     console.log("Hello there");
// }
// function step2Done(){
//     console.log("hello");
//     setTimeout(step3Done,5000);
// }
// function step1Done(){
//     console.log("hi");
//     setTimeout(step2Done,3000);
// }
// setTimeout(step1Done,1000);

//promisified version with callback hell
// function setTimeoutPromisified(ms){
//     return new Promise(resolve => setTimeout(resolve,ms));
// }
// setTimeoutPromisified(1000).then(function(){
//     console.log("hi");
//     setTimeoutPromisified(3000).then(function(){
//         console.log("hello");
//         setTimeoutPromisified(5000).then(function(){
//             console.log("hi there");
//         });
//     });
// });

//promisified version without callback hell
function setTimeoutPromisified(ms){
    return new Promise(resolve => setTimeout(resolve,ms));
}
setTimeoutPromisified(1000)
  .then(function () {
    console.log("hi");
    return setTimeoutPromisified(3000);
  })
  .then(function () {
    console.log("hello");
    return setTimeoutPromisified(5000);
  })
  .then(function () {
    console.log("hello there");
  });
