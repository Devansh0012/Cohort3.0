const fs = require("fs");

function read(err, contents){
    if(err){
        console.log("File not found!");
    }
    else{
        console.log(contents);
    }
}

fs.readFile("a.txt", "utf8", read);

fs.readFile("b.txt", "utf-8", read);

setTimeout(function hello(){
    console.log("Hello");
}, 0);

console.log("Done!");