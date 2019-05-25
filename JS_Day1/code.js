//For print
console.log("hello");

var a;
console.log(a); //Undefined variable 'a'

var a=100; //Same variable name can be work for 'var'
a=200;
console.log(a);

let b=10;
b=5;
console.log(b);

const c=7;
console.log(c);

//Taking input in 'name' variable
//Prompt takes string(by default)
let name = prompt("What is your name?");
console.log("My name is " + name);

//'===' use for matching two datatypes and values
//'==' use for matching two value

//Adding two nembers
let d = prompt("Enter first number");
let g = parseInt(d);
let e = prompt("Enter second number");
let h = parseInt(e);

let i = g + h;
console.log(typeof i);
console.log("Sum is: " + i);

//prompt and parseInt together 
console.log("Your age is " + parseInt(prompt("Enter your age")));

let j = parseInt(prompt("Enter Lucky Number"));
if(j=='2018'){
    console.log("It is 2018");
}
else if(j=='2019'){
    console.log("It is 2019");
}
else if(j==2){ //Checking integer value
    console.log("Integer 2");
}
else{
    console.log("Not in Database");
}

let k = parseInt(prompt("Enter k"));
let l = parseInt(prompt("Enter l"));
let m = parseInt(prompt("Enter m"));

if(k>l && k>m) 
    console.log(k + " (k) is the biggest");
else if(l>k && l>m)
    console.log(l + " (l) is the biggest");
else
    console.log(m + " (m) is the biggest");