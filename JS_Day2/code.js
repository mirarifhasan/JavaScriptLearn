let a = 5;
let b = 10;

let olds = 'Sum of ' + a + ' and ' + b + ' is ' + (a + b);
console.log(olds);

let news = `Sum of ${a} and ${b} is ${a+b}` //New way to concate
console.log(news);


//Function
function RegularFunction(a, b) { //Supports in all borwsers
    return a * b;
}
let Es5Function = function(a, b) { //Supports 2005 or later browsers
    return a * b;
}
let Es6Function = (a, b) => a * b //Supports 2015 or later browsers

console.log('\n');
console.log("Regular call: " + RegularFunction(2, 3));
console.log("Es5 call: " + Es5Function(2, 3));
console.log("Es6 call: " + Es6Function(2, 3));


//Array
let arr = [1, 3, 2];
arr.push(4); //Insert in last position or arr[3]
arr[4] = 5;
//Keeping arr[5] blank. That means undefined.
arr[6] = 6;
console.log('\n');
console.log(arr);

console.log("Type of full array: " + typeof(arr));
console.log("Type of arr[2]: " + typeof(arr[2]));
console.log("Length of the array: " + arr.length);

console.log("After sorting: " + arr.sort()); //"arr" will be sorted in that variable


//For Loop
console.log('\nFor loop');
for (let i = 0; i < arr.length; i++) {
    console.log(arr[i]);
}

//Task-1
let numbers = [2, 3, 5, 7, 9];
let sum = 0;
for (i = 0; i < numbers.length; i++) {
    sum += numbers[i]
}
console.log('Sum of the array is: ' + sum);


//Object-Function
console.log("\nObject-Function")
let user = {
    name: "John",
    age: 12,
    isAbove18: function() {
        return this.age >= 18;
    }
}
console.log(user.name);
console.log(user.isAbove18());