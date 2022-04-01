// Use default parameter where ever you can

/* 1. minToSec

Write a function named minToSec that takes an integer minutes and converts it to seconds.

minToSec(50) ➞ 3000
minToSec(13) ➞ 780
minToSec(2) ➞ 120
*/

// - Write a Function Decleration for above problem
function minToSec(minutes) {
  // Your code
  return minutes*60;
}
console.log(minToSec(50));
// - Execute the function with required parameter

/* 2. 
Create a function named isInRange which validates whether a number n is exclusively within the bounds of lower and upper.
Return true and false based on that.

The function accepts three parameter lower, upper and the number.
isInRange(1, 20, 9); // true
isInRange(1, 10, 19); // false
*/

// - Write a Function Decleration for above problem
function isInRange(lower,upper,number) {
  if(number>=lower || number<=upper)
  {
    return true;
  }
  else{
    return false;
  }
}
console.log(isInRange(1,20,9));
console.log(isInRange(1,10,19));
// - Execute the function with required parameter

/* 2. calculateBMI
                                                                                          

Take two arguments weight and height and return `Underweight`, `Normal` etc based on data.

Body mass index(BMI) is calculated as follows: bmi = weight / (height x height). Write a function which calculates bmi.
BMI is used to broadly define different weight groups.
Check if a person is underweight, normal, overweight or obese based the information given below.

These are the conditions:

Underweight: BMI is less than 18.5
Normal weight: BMI is 18.5 to 24.9
Overweight: BMI is 25 to 29.9
Obese: BMI is 30 or more

*/

function calculateBMI(weight,height) {
  // Your code
  let bmi = weight/(height * height);
  if(bmi<18.5)
  {
    return 'underweight';
  }
  else  if(bmi>=18.5 || bmi<=24.9)
  {
    return 'underweight';
  }
  else  if(bmi>=25 || bmi<=29.9)
  {
    return 'Overweight';
  }
  else if(bmi>=30){
    return 'obese';
  }
  else{
    return 'not valid input';
  }
}
console.log(calculateBMI(100,5.7));
/* 3. appropiateDrinks

Create a function that take the age are return the appropiate drink based on these conditions:

- Under 14 years old — return "drink fruit juice"
- Under 18 years old — return "drink soda"
- Under 21 — return "drink fruit-flavored beer"
- 21 years or older — return "drink throat-piercing vodka"

*/

function appropiateDrinks(age) {
  // Your code
  if (age <= 14)
  {
    return "drink fruit juice";
  }
  else  if (age <= 18){
    return "drink soda";
  }
  else  if (age <= 21){
    return "drink fruit-flavored beer";
  }
  else if(age>=21)
  {
    return "drink throat-piercing vodka";
  }
  else{
    return 'invalid input';
  }
}
console.log(appropiateDrinks(18));
/* 4. Add two numers or string

Write a function that accepts two numbers or string and returns the sum of the numbers and concatenation of the strings.
Twist is when user passes anything other than number, or string value you should be able to handle that.

- If both values are number add them
- If both values are string concat theme
- Anything other than that alert "Enter valid values"

*/

function sum(valueA,valueB) {
  if(typeof valueA === 'number' && typeof valueB === 'number')
   {
     return valueA+valueB;
   }
 else  if(typeof valueA === 'string' && typeof valueB === 'string')
   {
     return valueA+valueB;
   }
   else{
     alert("Enter valid values");
   }
}

// Function Test
sum(2, 4); // 4
sum('Arya', 'Stark'); // "Arya Stark"
sum('Arya', 2); // Enter valid Values
sum(null, 2); // Enter valid Values
sum(undefined, 2); // Enter valid Values
