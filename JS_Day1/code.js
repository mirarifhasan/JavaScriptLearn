//For print
console.log("hello");

var a;
console.log(a); //Undefined variable 'a'

var a = 100; //Same variable name can be work for 'var'
a = 200;
console.log(a);  //Print 200

let b = 10;
b = 5;
console.log(b); //print 5

const c = 7;
console.log(c); //print 7. const variable can not reassigned

//Taking input in 'name' variable
//prompt takes string(by default)
let name = prompt("What is your name?");
console.log("My name is " + name);

//'===' use for matching two datatypes and values both
//'==' use for matching only two value

//Adding two nembers
let fn = prompt("Enter first number");
let n1 = parseInt(fn);
let sn = prompt("Enter second number");
let n2 = parseInt(sn);

let sum = n1 + n2;
console.log(typeof sum); //Number
console.log("Sum is: " + sum);

//prompt and parseInt together 
console.log("Your age is " + parseInt(prompt("Enter your age")));

let j = parseInt(prompt("Enter Lucky Number for if-else"));
//if-else

if(j=='2018'){ //if j=2018 or j='2018' whateven string or integrt
    console.log("It is a string '2018'");
}
else if(j==2018){ //This 'else-if' will not execute for 'if' condition
    console.log("2018 is integer");
}
else if(j=='2019'){
    console.log("It is a string '2019'");
}
else if(j==2){ //Checking integer/string both value
    console.log("2 is integer");
}
else{
    console.log("Not in Database");
}

//Finding maximum value
let x = parseInt(prompt("Enter 1st Number"));
let y = parseInt(prompt("Enter 2nd NUmber"));
let z = parseInt(prompt("Enter 3rd Number"));

if(x>y && x>z) 
    console.log(x + " (x) is the biggest");
else if(y>x && y>z)
    console.log(y + " (y) is the biggest");
else
    console.log(z + " (z) is the biggest");