console.log("Playing with vatriable");
var a;
console.log("Var a is: " + a); //undefined for uniitialized

a = 5;
console.log('After assigning in a: ' + a); //5

a++;
console.log('After increment of a: ' + a); //6
console.log("Type of a: " + typeof a) //number

var s = a + ' Hello';
console.log('\nVar (string)s: ' + s); //6 Hello, number and string can concate
console.log("Type of s: " + typeof s); //string

//(previous) var s = 6 Hello
s += ' World';
console.log('Now s: ' + s);

//case sensative for variable name
//console.log(S); //Error, 'S' was not declared

//Type Casting
console.log("\nType casting");
var str = "6";
console.log(parseInt(str)); //string to int

// operations like +,-,*,/,++,--,+=,-=,*=,/=
console.log('\nOperation 2.5*3 = ' + 2.5*3) //7.5

//String
var name = 'Arif';
console.log("\nName: " + name);
var length_name = name.length;
console.log('Length of '+ name +' is: ' + length_name);

var frst_char_name = name[0];
console.log('First Char of '+name+' is: '+frst_char_name);

var last_char_name = name[name.length - 1];
console.log('Last Char of '+ name +' is: '+ last_char_name);

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
console.log('\nAfter replae 77 with 5 in arr1');
console.log(arr1);

//Multidimentional Array
console.log('\nMultiDimentional arr2');
var arr2 = [['Arif', 77], ['Hasan', 82], 'Mir'];
console.log(arr2); //Full array
console.log('Value of arr2[0][1]: ' + arr2[0][1]); //77

arr2[1][0] = 'Rahat';
console.log('\nAfter update in arr2[1][0]="Rahat"');
console.log(arr2);

//Insert in Array (Last position)
console.log('\nInsert "Rahat" in arr1');
arr1.push('Rahat');
console.log(arr1);

console.log('\nInsert array in arr2');
arr2.push(['Abdullah', 75]);
console.log(arr2);

//Insert in Array (First position)
arr2.unshift('Kafi');
console.log('\nAfter unshift [inserting in first pos]:');
console.log(arr2);

//Remove from array last position
var remove_value = arr1.pop();
console.log('\nRemoved value from arr1 [from last pos]: ' + remove_value);
console.log(arr1);

var remove_value = arr2.pop();
console.log('\nRemove value of arr2 [from last pos]: ' + remove_value);
console.log(remove_value);
console.log('\nAfter removing arr2 is:');
console.log(arr2);

//Remove from array first position
console.log('\nAfter shift [removing from first pos]:');
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
        output += " oopsGlobal: " + oopsGlobal;
    console.log("Output: " + output);    
}
fun1();
fun2();
/*
Note:
'var' datatype works in function scope.
'let/const' works in block scope
myGloval is now global variable for being in global function scope. So, it can be access from anywhere.
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
console.log(glfun()); //After function call
console.log(glv1); //Without function call

//Switch-case
console.log('\nSwitch-Case Ex-1');
function caseSwitch(val){
    var res='';
    switch(val){
        case 1:
            res = "it is 1";
            break;
        case 2:
            res = "it is 2";
            break;  
        case 3:
            res = "it is 3";
            break;
        default:
            res = "Not found";
            break;
    }
    return res;
}
console.log(caseSwitch(2));

console.log('\nSwitch-Case Ex-2');
function caseSwitch(val){
    var res='';
    switch(val){
        case 1:
        case 2:
        case 3:
            res = "it is 1-3";
            break;
        case 4:
        case 5:
        case 6:
            res = "it is 4-6";
            break;  
        default:
            res = "Not found";
            break;
    }
    return res;
}
console.log(caseSwitch(2));
/*
Note:
Here integer and string value is not consider the same.
*/

//Math
console.log('\nMath Class');
function sqrtpow(a, b){
    if(a<0 || b<0) return0;

    return Math.round(Math.pow(Math.sqrt(a) + Math.sqrt(b), 2));
}
console.log(sqrtpow(1,1));

//Random Number
console.log('\nRandom Number Generate');
console.log(Math.random());
console.log(Math.floor(Math.random()*20)); // Getting random number between 0 - 19

//Object 1
console.log('\nJS Object-1');
var obj1 = {
    "name":"Arif",
    "id":77
};
console.log(obj1);
console.log("As JSON formate: " + JSON.stringify(obj1));

console.log("Name of Obj-1: " + obj1.name);
console.log("ID of Obj-1: " + obj1["id"]);

var oobj1 = obj1;
console.log(oobj1.hasOwnProperty("name")); //return boolean if 'key' found
/*
return true valeu for "name"
and false value for name - without qoute
*/

//Update and add attribute in object
oobj1["name"] = "Ishan"; //Update object property
oobj1["sub"] = "CSE"; //Adding object property
console.log("\nAfter update and add in obj-1");
console.log(oobj1);

delete oobj1.sub; //Deleting obj property
console.log("Afetr delete sub attribute");
console.log(oobj1);

//Object 2
console.log('\nJS Object-2 [Obj in function]');
function funobj(val){
    var res = "";

    var lookup = {
        "name1":"Arif",
        "name2":"Hasan",
    }
    return lookup[val];
}
console.log(funobj("name2"));

//Object 3
console.log('\nJS Object-2 [Nested]');
var obj2 = {
    "name":"Arif",
    "id":77,
    "inside":{
        "project":"Database",
        "online":"C"
    },
    "course":["DSD", "SD", "DEPT"]
};
console.log(JSON.parse(JSON.stringify(obj2))) 
/*JSON stringify use for convert into JSON formate
JSON parse is for retrive from JSON formate*/
console.log(obj2.course[1]); //SD
console.log(obj2.inside.project); //Database

console.log('\nTry-catch with freeze');
function freezeobj(){

    const MATH_CONSTRAINTS = {
        PI: 3.14
    };
    Object.freeze(MATH_CONSTRAINTS); //freeze for restrict manipulation

    try{
        MATH_CONSTRAINTS.PI = 99;
    }catch(ex){
        console.log(ex)
    }
    return MATH_CONSTRAINTS.PI;
}
console.log("PI value: " + freezeobj());

console.log('\nConcating Array');
var conArr = function(){
    return arr1.concat(arr2);
}
console.log(conArr());

console.log('\nClass & Constractor');
class spaec{
    constructor(planet){
        this.planet = planet;
    }
}
var zeus = new spaec("Jupitar");
console.log(zeus.planet); //zeus holdes all info of class like array

console.log('\nClass & Constractor in a function');
function makeClass(){
    class Vegitable{
        constructor(name){
            this.name = name;
        }
    }
    return Vegitable;
}
var Vgtbl = makeClass();
var carrot = new Vgtbl('Carrot');
console.log(carrot.name);

