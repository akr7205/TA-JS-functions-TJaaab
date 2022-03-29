/*
1. Create a function named `sayHello` that that accepts a parameter `name` and alert `Hello [name]!`.
*/
function sayHello(name)
{
  alert(`Hello ${name}`);
}
// let name;
sayHello("Arun");
/*
2. Create a function named `getFullName` that accepts two parameter `firstName` and `lastName` and returns
fullName.

Example:
  getFullName("John", "Snow"); // "John Snow"
  getFullName("Nelson", "Mandela"); // "Nelson Mandela"
*/
function getFullName(firstName,lastName)
{
  console.log(firstName+" "+lastName);
}
getFullName("John", "Snow"); // "John Snow"
getFullName("Nelson", "Mandela"); // "Nelson Mandela"

/*
3. Create a function named `addTwoNumbers` that accepts two numbers i.e `firstNum` and `secondNum` and returns
the sum of both numbers. If user passes any data other then numbers alert a message saying `Enter Valid Input`

Example:
addTwoNumbers(10, 22); // 32
addTwoNumbers(20, 32); // 32
addTwoNumbers(10, "100"); // Alert Enter Valid Input
*/
function addTwoNumbers(a,b){
  if(typeof a != 'number'  || typeof b != 'number' )
  {
   return alert(`Enter Valid input`);
  }
  else{
    return a+b;
  }
  
}
let sum1=addTwoNumbers(10, 22); // 32
console.log(sum1);
let sum2=addTwoNumbers(20, 32); // 32
console.log(sum2);
addTwoNumbers(10, "100"); // Alert Enter Valid Input

/*
4. Create a function named `calc` which accepts three parameter `numA`, `numB` and `operation`. Operation
can only be one of these `add, sub, mul, div`. Based on the operator return the value. If the `numA` or `numB`
is of any other data type alert `Enter Valid Input`

Example:

calc(10, 20, 'add'); // 30
calc(20, 10, 'sub'); // 10
calc(20, 10, 'mul'); // 200
*/
function calc(numA,numB,operation)
{
 if(operation == 'add')
 {
   return numA+numB;
 }
 if(operation == 'sub')
 {
   return numA-numB;
 }
 if(operation == 'mul')
 {
   return numA*numB;
 }
}
console.log(calc(10, 20, 'add'));
console.log(calc(20, 10, 'sub'));
console.log(calc(20, 10, 'mul'));

/*
5. Create a function named `isLeapYear` that accepts a number data type and return `true` or `false` based
on if the year id leap year or not.

isLeapYear(2000); // true
isLeapYear(2001); // false
*/

function isLeapYear(year)
{
  if(year%4 === 0 && year%100 !=0)
  {
     return true;
  }
  else if(year%400 === 0)
  {
    return true;
  }
  else{
    return false; 
  }
}
console.log(isLeapYear(2000));
console.log(isLeapYear(2001));
/*
6. Create a function named `getFactorial` that accepts a number and return the factorial of the number.
*/
function getFactorial(factNum)
{
  let factorial=1;
 for(let i=1;i<=factNum;i++)
{
  if(factNum === 0)
  {
    console.log(`0 factorial is 1`);
    break;
  }
 factorial=i*factorial;
}
return factorial;
}
console.log(getFactorial(5));