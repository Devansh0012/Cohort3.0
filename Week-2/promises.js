// A promise in JS is an object that represents "eventual completion" (or failure) of an asynchronous
// operation and its resulting value.

// Callback version:
// setTimeout(callback, 3000);

// Promisified version:
// setTimeoutPromisified(3000).then(callback);

// function setTimeoutPromisified(ms){
//     let p = new Promise(resolve => setTimeout(resolve,ms));
//     return p;
// }

// function callback(){
//     console.log("3 seconds have passed");
// }

// setTimeoutPromisified(3000).then(callback);

// function waitFor3S(resolve){
//     setTimeout(resolve, 3000);
// }
// function main(){
//     console.log("main is called");
// }
// waitFor3S(main);

// function random(resolve){ //resolve is also a function
//     setTimeout(resolve,3000);
// }
// let p = new Promise(random); //supposed to return us something eventually
// console.log(p); // Promise { <pending> }

// //using the eventual value returned by the promise.
// function callback(){
//     console.log("promise succeeded");
// }
// p.then(callback);

function setTimeoutPromisified(ms){
    return new Promise(resolve => setTimeout(resolve,ms));
}
function callback(){
    console.log("3 seconds have passed");
}
setTimeoutPromisified(3000).then(callback);