// var favColor = "blue";
// console.log(favColor);

// const height = 176;
// console.log(height);    

// var likesPizza = true;
// console.log(likesPizza);

//sum of two numbers

// function sum(a, b){
//     return a + b;
// }

// console.log(sum(5, 10));

// canVote function
// function canVote(age){
//     if(age >= 18){
//         return true;
//     }
//     else{
//         return false;
//     }
// }

// console.log(canVote(20));

//even odd

// function checkEvenOdd(num){
//     if(num % 2 === 0){
//         console.log("The number is even!");
//     }
//     else{
//         console.log("The number is odd!");
//     }
// }

// console.log(checkEvenOdd(11));

//sum of 1 to n
// var add = 0;
// function sum(n){
//     for(let num = 0; num <= n; num++){
//         add += num;
//     }
//     return add;
// }
// console.log(sum(10));

// objects greet

// let user = {
//     name : "Devansh",
//     age : 20
// }
// console.log("Hello " + user.name + ", you are " + user.age + " years old.");

// Write a function that takes a new object as input which has name , age  and gender
// and greets the user with their gender (Hi Mr/Mrs/Others harkirat, your age is 21).

// const users = [{
//     name: "Devansh",
//     age: 20,
//     gender: "male"
// },
// {
//     name: "Harkirat",
//     age: 21,
//     gender: "male"
// },
// {
//     name: "Shivani",
//     age: 22,
//     gender: "female"
// },
// {
//     name: "Rahul",
//     age: 17,
//     gender: "male"
// }];

// function greetUser(users) {
//     for(let i = 0; i < users.length; i++) {
//         const votingStatus = users[i].age >= 18 
//             ? "You are eligible to vote!"
//             : "You are not eligible to vote yet.";
            
//         if(users[i].gender === "male") {
//             console.log("Hi Mr. " + users[i].name + ", your age is " + users[i].age + ". " + votingStatus);
//         } else {
//             console.log("Hi Mrs. " + users[i].name + ", your age is " + users[i].age + ". " + votingStatus);
//         }
//     }

//     console.log("\nEligible Voters:");
//     const eligibleVoters = users.filter(user => user.age >= 18);
//     console.log("Total eligible voters: " + eligibleVoters.length);
//     eligibleVoters.forEach(user => {
//         console.log(user.name + " - Age: " + user.age);
//     });
// }

// greetUser(users);

// Write a function that takes an array of numbers as input, and returns a new array with only even values. 

// const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
// const result = numbers.filter(number => number % 2 === 0);

// console.log(result);

// Write a function that takes an array of users as inputs and returns only the users who are more than 18 years old

const users = [{
    name: "Devansh",
    age: 20
},
{
    name: "Harkirat",
    age: 21
},
{
    name: "Shivani",
    age: 22
},
{
    name: "Rahul",
    age: 17
}];

const result = users.filter(user => user.age >= 18);

console.log(result);