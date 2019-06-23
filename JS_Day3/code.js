/*
First Challenge Part
*/
let words = [
    'Node.js', "is", "an", "open-source", "cross-platform", "JavaScript", "run-time",
    "environment", "that", "executes", "JavaScript", "code", "outside", "of", "a", "browser"
]

// CHALLENGE 1: Print each and every word in console without using for loop
// CHALLENGE 2: print words that contains at least 7 characters
// CHALLENGE 3: Count how many times the word "JavaScript" occurs in the array

//Chalenge 1
words.forEach(function (word){
    console.log(word);
});

//Chalenge 2
words.forEach(function(word){
    if(word.length <= 7)
        console.log(word);
})

//Another way
let largeWords = [];

largeWords = words.filter(function(a){
    return a.length >=7;
});
console.log(largeWords);

//For Es5
largeWords = words.filter(word => word.length >=7)
console.log(largeWords);

//Chalenge 3
let jsOccur = words.filter(word => word == 'JavaScript');
console.log(jsOccur.length);


/*
 Second Challenge Part
*/

let users = [
    {name: "Jhon Connor", age: 12, alive: true},
    {name: "Rip Hunter", age: 60, alive: false},
    {name: "Angie Dickinson", age: 33, alive: true},
    {name: "Carrie Henn", age: 36, alive: false},
    {name: "Stacker Pentecost", age: 47, alive: false},
    {name: "Han Solo", age: 55, alive: true},
    {name: "Eve Harrington", age: 23, alive: false},
    {name: "Sidney J. Mussburger", age: 32, alive: true},
    {name: "Mr. Price", age: 44, alive: false},
    {name: "Agent 47", age: 29, alive: true},
]

// CHALLENGE 1: Generate a single array containing the name of each users
// CHALLENGE 2: Filter users who is alive and age between 18-35
// CHALLENGE 3: Sort users according to their age