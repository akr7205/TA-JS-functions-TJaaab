// Use default parameter where ever you can

/*
1. 🎖Write a function named calculateDogAge that:
  * [ ] Takes 1 argument: your puppy's age.
  * [ ] Calculates your dog's age based on the conversion rate of 1 human year to 7 dog years.
  * [ ] Return the result dog age in dog year.
  * [ ] Add an additional argument to the function that takes the conversion rate of human to dog years.
*/

function calculateDogAge(age) {
  return 7 * age;
}
let dogAge = calculateDogAge(7);
console.log(`Dog age is ${dogAge}`);
/*
2. 🎖Write a function named calculateMoviesToWatch that:
  * [ ] takes 2 arguments: age, number of movies you watch every week. (take 4 weeks per month)
  * [ ] calculates the number of movies for rest of the life (based on a constant max age).
  * [ ] Return the total number of movie you will watch.
*/

function calculateMoviesToWatch(currentage, noofMovies) {
  // Your code goes here
  const maxage = 90;
  let watchedMovies = (maxage - currentage) * (noofMovies * 48)
  return watchedMovies;
}
let totalMovies = calculateMoviesToWatch(25, 2);
console.log(`Total no of movies watched is ${totalMovies}`);
/*
3. 🎖Create a function called celsiusToFahrenheit:
  * [ ] Accepts celsius temperature as argument.
  * [ ] Convert it to fahrenheit and return "NN°F is NN°C"
*/

function celsiusToFahrenheit(celsius) {
  let fahrenheit = (celsius * 1.8) + 32;
  console.log(`${celsius}C is equal to ${fahrenheit}F`);
}
celsiusToFahrenheit(25);
/*
4. 🎖Create a function called fahrenheitToCelsius:
  * [ ] Accepts fahrenheit temperature as argument.
  * [ ] Convert it to celsius and return "NN°F is NN°C"
*/

function fahrenheitToCelsius(fahrenheit) {
  let celsius = (fahrenheit - 32) / 1.8;
  console.log(`${fahrenheit}F is equal to ${celsius}C`);
}
fahrenheitToCelsius(25);
/*
5. 🎖 Write a function pow(n, x) that returns x in power n.

  * [ ] The function accepts two parameter x and n.
  * [ ] Return x times n
  * [ ] If the value of n is below 0 return "The number below 1 is not allowed"
*/

function pow(x,n) {
  // Your code goes here
  if(n<0)
  {
    console.log("The number below 1 is not allowed");
    return;
  }
 let powResult=1;
 while(n!=0)
 {
   powResult=powResult*x;
   n--;
 }
 return powResult;
}
// Test
pow(3, 2); // 9
pow(3, 3); // 27
pow(1, 100); // 1
pow(-31, 2); // "The number below 1 is not allowed"

/*
6. 🎖Write a program that accepts two parameter a number n and a string with possible values of `sum` or `product`
and return sum or product of 1,…,n. If user enters any other value than `sum` or `product` alert `Not a valid Input`.
*/

function sumOrProductOfN(n,operation) {
   let sumresult=0 , productResult=1;
   if(operation == 'sum')
   {
     for(let i=1;i<=n;i++)
     {
       sumresult=i+sumresult;
     }
     return sumresult;
   }
   else if(operation == 'product')
   {
     for(let i=1;i<=n;i++)
     {
       productResult=productResult*i;
     }
     return productResult;
   }
   else{
     alert(`Not a valid Input`);
   }
}

sumOrProductOfN(4, 'sum'); // 10
sumOrProductOfN(4, 'product'); // 24
// sumOrProductOfN(4, 'hello'); // alert "Not a valid Input"

/*
6. 🎖Write a program that accepts a number n using argument and return the sum of the numbers 1 to n
*/

function sumOfN(n) {
  // Your code goes here
  let result=0;
  for(let i=1;i<=n;i++)
  {
    result=result+i;
  }
  return result;
}
console.log('sum of n result'+' '+sumOfN(4));
/*
7. 🎖Modify the previous program such that only multiples of 5 or 7 are considered in the sum, e.g. n = 20 (5,7,10,14,15,20) 71
*/

// Your code goes here
function multipleN(n)
{
  let result=0;
  for(let i=1;i<=n;i++)
  {
    if(i%5==0 || i%7==0)
    {
      result=result+i;
    }
  }
  console.log(`multiple of 5 and 7 sum result is ${result}`);
}
multipleN(20);
/*
8. 🎖Write a function `min` that takes two arguments and returns their minimum.
*/

function min(a,b) {
  // Your code goes here
  if(a<b)
  {
    console.log(`minimum is ${a}`);
  }
  else{
    console.log(`minimum is ${b}`);
  }
}

min(0, 10);
min(0, -10);

/*
9. 🎖Write a JavaScript function which accepts an argument and returns the type of the value.
*/

function typeCheck(n) {
  // Your code goes here
  return typeof n;
}
console.log(typeCheck(5));