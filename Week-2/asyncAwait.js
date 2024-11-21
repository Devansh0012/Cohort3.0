const fs = require("fs");

// function setTimeoutPromisified(ms){
//     return new Promise(resolve => setTimeout(resolve,ms));
// }

// async function solve() {
//     await setTimeoutPromisified(1000);
//     console.log("hi");
//     await setTimeoutPromisified(3000);
//     console.log("hello");
//     await setTimeoutPromisified(5000);
//     console.log("hi there");
// }
// solve();

function setTimeoutPromisified(duration){
    return new Promise(function(resolve){
        setTimeout(resolve,duration);
    })
}

function readFileAsync(){
    return new Promise(function(resolve, reject){
        fs.readFile("a.txt","utf-8",function(err,data){
            if (err){
                reject("File not found!");
            }
            else {
                resolve(data);
            }
        })
    })
}

readFileAsync().then(function(x){
    console.log("File has been read: " + x);
}).catch(function(e){
    console.log(e);
})