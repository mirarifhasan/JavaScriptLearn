/*
 Second Challenge Part
*/

let users = [
    { name: "Jhon Connor", age: 12, alive: true },
    { name: "Rip Hunter", age: 60, alive: false },
    { name: "Angie Dickinson", age: 33, alive: true },
    { name: "Carrie Henn", age: 36, alive: false },
    { name: "Stacker Pentecost", age: 47, alive: false },
    { name: "Han Solo", age: 55, alive: true },
    { name: "Eve Harrington", age: 23, alive: false },
    { name: "Sidney J. Mussburger", age: 32, alive: true },
    { name: "Mr. Price", age: 44, alive: false },
    { name: "Agent 47", age: 29, alive: true },
]

// CHALLENGE 1: Generate a single array containing the name of each users
// CHALLENGE 2: Filter users who is alive and age between 18-35
// CHALLENGE 3: Sort users according to their age



// CHALLENGE 2:
function isAlive(user) {
    return user.alive;
}
let isEveryoneAlive = users.every(isAlive);
console.log(isEveryoneAlive);



//Sum all the array elements
let Number = [2, 4, 6, 7, 12, 18, 21, -30];

function PerformSum(accumulator, number) {
    return accumulator = accumulator + number;
}
let sum = Number.reduce(PerformSum);
console.log(sum);



//CHALLENGE 3:
function SortCondition(a, b) {
    return a.age > b.age ? 1 : -1;
}
let sorted = users.sort(SortCondition);
console.log(sorted);