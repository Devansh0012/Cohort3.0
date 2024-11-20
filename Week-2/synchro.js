const fs = require('fs');

const contents = fs.readFileSync("a.txt", "utf8");
console.log(contents);

const contents2 = fs.readFileSync("b.txt", "utf8");
console.log(contents2);
