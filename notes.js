//Functional JS


//// What is a call back ? A callback is a function that is made to be passed into another function as an argument. //

//The .map() function is an array method that creates a new array by iterating over each element of the original and applying a callback function to each element. The new array will have the same length as the original array, however, each element is the result of the callback function.//
let numbers = [1, 2, 3, 4, 5];
let square = (num) => num * num;
let squaredNumbers = numbers.map(square);
console.log(squaredNumbers); // Output: [1, 4, 9, 16, 25]

//The .filter() function is another array method that creates a new array by iterating over each element of the original and applying a callback test for each element. It returns a new array containing only the elements that pass the test specified by the callback.//
let numbers = [1, 2, 3, 4, 5];
let isEven = (number) => {
	return number % 2 === 0;
};
    
let evenNumbers = numbers.filter(isEven);
   
console.log(evenNumbers); // Output: [2, 4]

//The .forEach() function is an array method in JavaScript that iterates over each element of the array and executes a callback function for each element. Unlike map and filter, it does not create a new array. Instead, it performs a specific operation or action on each element of the original array.//
let numbers = [1, 2, 3];
let printNumber = (number) => console.log(number);
numbers.forEach(printNumber); // Output: 1, 4, 9

//The .find() function is an array method in JavaScript that returns the first element in an array that matches a condition. It takes a callback function as an argument and returns the first element that equates to true. If none of the array elements evaluate to true, then it will return undefined.//
let numbers = [1, 2, 3, 4, 5];
let isEven = (number) => number % 2 === 0;
let evenNumber = numbers.find(isEven); // Output: 2

// what is Object.freeze()// //As we've seen before when we declare a variable using const, we are no longer able to set it equal to a different variable, but if the variable is an array or object we're still able to modify that object by pushing or popping values into or from it, or changing values that are stored in it.//

const arr = [1,2,3,4];
arr.push(300); // even though arr is declared with `const` we can still push new values into it 
//If we want to prevent even those sorts of changes, we can use Object.freeze() to give our array or object Immutability.//
const arr = Object.freeze([1,2,3,4]);
arr.push(300); // we're no longer allowed to change `arr`

// ********** Spread, Concat, and Slice **********//
const groceryList = Object.freeze([
{ "item": "carrots",           "haveIngredient": false },
{ "item": "onions",            "haveIngredient": true  },
{ "item": "celery",            "haveIngredient": false },
{ "item": "cremini mushrooms", "haveIngredient": false },
{ "item": "butter",            "haveIngredient": true  }
]);
 //If we decide that we need to add thyme to the list, we can use spread to make a copy of the list and add thyme to it//
const needThyme = [ ...groceryList, { "item": "thyme", "haveIngredient": false } ]; //the ...groceryList at the beginning of the array is making a copy of the objects already in groceryList, we then follow this with a comma (,) as if we are simply declaring an array with a new thyme object.

//We can also use .concat() for this one. concat is a method that essentially takes two arrays, glues them together, and gives us back the new array.
const needThyme = groceryList.concat( [ { "item": "thyme", "haveIngredient": false } ] );

//Slice is a function that can take 2 parameters and return an array of the values that have indexes between those two parameters. The first number (index 0 in this example) will be included in our returned array. The second number (index 5 in this example) will NOT be included in the returned array. (.slice() - official documentation)//



