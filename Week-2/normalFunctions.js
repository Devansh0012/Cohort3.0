//sum of two numbers
function sum(a,b){
    return a+b;
}
let ans = sum(2,3);
console.log(ans);

//sum of 1 to n numbers
function sumOfN(n){
    // let sum = 0;
    // for(let i = 1; i <=n; i++){
    //     sum += i;
    // }
    // return sum;
    return n*(n+1)/2;
}
let ans1 = sumOfN(5);
console.log(ans1);