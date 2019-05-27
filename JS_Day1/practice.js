var a;
console.log(a); //undefined

a = 5;
console.log('After assignment: ' + a); //5

a++;
console.log('After increment: ' + a); //6
console.log("Type of a: " + typeof a) //number

var s = a + ' Hello';
console.log('\nvar s: ' + s); //6 Hello, number and string can concate
console.log("Type of s: " + typeof s); //string

//(previous) var s = 6 Hello
s += ' World';
console.log('String s: ' + s);

//case sensative for variable name
//console.log(S); //Error, 'S' was not declared

// operations like +,-,*,/,++,--,+=,-=,*=,/=
console.log('\n2.5*3 = ' + 2.5*3) //7.5

//String
var name = 'Arif';
console.log("\nName: " + name);
var length_name = name.length;
console.log('Length of '+ name +' is: ' + length_name);

var frst_char_name = name[0];
console.log('First Char of '+name+' is: '+frst_char_name);

var last_char_name = name[0];
console.log('Last Char of '+ name +' is: '+ name[name.length - 1]);

//Function
console.log("\nFunction");
function add(a, b){
    return a+b;
}
console.log('Sum of 5 and 6 is: '+ add(5,6));

//Array
//Array indexing from 0, 1, 2, ...
//1D Array
console.log('\n1D Array');
var arr1 = ['Arif', 77];
console.log(arr1); //you can find many after this log execute in console
console.log('Length of arr1: ' + arr1.length);
console.log('Value of arr1[0]: ' + arr1[0]);

arr1[1] = 5;
console.log('\nAfter change the arr1');
console.log(arr1);

//Multidimentional Array
console.log('\nMultiDimentional arr2');
var arr2 = [['Arif', 77], ['Hasan', 82], 'Mir'];
console.log(arr2); //Full array
console.log('Value of arr2[0][1]: ' + arr2[0][1]); //77

arr2[1][0] = 'Rahat';
console.log('\nAfter change the arr2');
console.log(arr2);

//Insert in Array (Last position)
console.log('\nInsert in arr1');
arr1.push('Rahat');
console.log(arr1);

console.log('\nInsert in arr2');
arr2.push(['Abdullah', 75]);
console.log(arr2);

//Insert in Array (First position)
arr2.unshift('Kafi');
console.log('\nAfter unshift:');
console.log(arr2);

//Remove from array last position
var remove_value = arr1.pop();
console.log('\nRemoved value from arr1: ' + remove_value);
console.log(arr1);

var remove_value = arr2.pop();
console.log('\nRemove value of arr2: ' + remove_value);
console.log(remove_value);
console.log('\nAfter removing arr2 is now:');
console.log(arr2);

//Remove from array first position
console.log('\nAfter shift:');
console.log(arr2.shift());

//Function global scooping
console.log('\nGlobal scooping');

var myGlobal = 10;

function fun1(){
    oopsGlobal = 5;
}
function fun2(){
    var output =  "";
    if(typeof myGlobal != "undefined")
        output += "myGlobal: " + myGlobal;
    if(typeof oopsGlobal != "undefined")
        output += "oopsGlobal: " + oopsGlobal;
    console.log("Output: " + output);    
}
fun1();
fun2();
/*
Note:
'var' type works in function scope.
myGloval is now global variable. So, it can be access from anywhere.
In fun2, oopsGlobal is global variable. Because, their is no declaration like var/let/const
*/

//Function local scooping
console.log('\nLocal scooping');
function localfun(){
    var locVar = 15;
    console.log(locVar);
}
localfun();

//Function Global vs Local
console.log('\nGlobal vs Local scooping');
var glv1 = 'I am global variable';

function glfun(){
    var glv1 = "I am local variable";
    return glv1;
}
console.log(glfun()); //After calling function
console.log(glv1); //Without calling function











console.log('\n');