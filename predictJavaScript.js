// Why did the code produce that output? If applicable, how would you get the index value that did not output?
const cars = ['Tesla', 'Mercedes', 'Honda']
const [ randomCar ] = cars[0]
const [ ,otherRandomCar ] = cars[1]
//Predict the output

console.log(randomCar) // this console log will only print out Tesla, it excludes index 1,2
console.log(otherRandomCar)// This console log will print out Mercedes. it extracts only index 1 = Mercedes


//Why did the code produce that output? If applicable, what would you need to do to solve any potential problems?
const employee = {
    employeeName: 'Elon',
    age: 47,
    company: 'Tesla'
}
const { employeeName: otherName } = employee;
//Predict the output
console.log(otherName);// This console should replace the name ELon with other name? this should print out the value of other name
console.log(employeeName);// This console will try to print out variable employee name but wont b/cuz it has not been declared

//How to solve this??
console.log(otherName)
console.log(employee.employeeName)

//Why did the code produce that output? If applicable, how would you alter this code without changing either console.log?
const person = {
    name: 'Phil Smith',
    age: 47,
    height: '6 feet',
    password: 'hashedValue' // this will let the code run and not has an error 
}
// const {name,age,height}= person
const password = '12345';
const { password: hashedPassword } = person;  
//Predict the output
console.log(password);// this will print out '12345' = this prints out b/c it is assigned 
console.log(hashedPassword);// undefined// this person does not havea 'password' property , so hashedPassword is undefined



//Why did the code produce that output? Declare a new variable for the value at the 4th index of the array and console.log it.
const numbers = [8, 2, 3, 5, 6, 1, 67, 12, 2];
const [,first] = numbers;
const [,,,second] = numbers;
const [,,,,,,,,third] = numbers;


//declare new variable 
const fourthValue = numbers[4];
console.log(fourthValue)

//Predict the output
console.log(first === second);
console.log(first === third);



//Why did the code produce that output? Console.log the last value in the secondKey property's array.
const lastTest = {
    key: 'value',
    secondKey: [1, 5, 1, 8, 3, 3]
}
const { key } = lastTest;
const { secondKey } = lastTest;
const [ ,willThisWork] = secondKey;
//Predict the output
console.log(key);// this will print out value
console.log(secondKey);// this should print value assigned which is [1, 5, 1, 8, 3, 3]
console.log(secondKey[0]);// 1
console.log(willThisWork);//5

// ********* Console.log the last value in the secondKey property's array. **********

const lastValue= secondKey[secondKey.length-1];
console.log(lastValue)


//First, how many scopes does the following code block contain? Define each scope and guess what the output will be.
var beatles = ['Paul', 'George', 'John', 'Ringo']; 
function printNames(names) {
  function actuallyPrintingNames() {
    for (var index = 0; index < names.length; index++) {
      var name = names[index];
      console.log(name + ' was found at index ' + index);
    }
    console.log('name and index after loop is ' + name + ':' + index);
  }
  actuallyPrintingNames();
}
printNames(beatles);

// 1. global scope: beatles;variables & the function : printNames
// 2. function scope: 'printnames: 'names' = variable 
// 3. another function scope 'actuallyPrintingNames: 'names', 'index' = variable 

// when printNames(beatles); is called 
//1. 'actuallyPrintingNames is defined and called
//2. the for loop over the names in the array loggin the names with the indexes.
//3. after the loop is complete 'name' and the index should have values from the last loop due to the function.




//Why did the code produce that output?
function actuallyPrintingNames() {
    for (let index = 0; index < names.length; index++) {
      let name = names[index];
      console.log(name + ' was found at index ' + index);
    }
    console.log('name and index after loop is ' + name + ':' + index);
  }  
  
  // Using let instead of Var inside the loop cahnges the scope of the variables.

//Why did the code produce that output? Explain the output, including any possible errors and why they occurred. If there are no errors, explain the justification for each keyword used to declare variables.
const beatles = ['Paul', 'George', 'John', 'Ringo'];
function printNames(names) {
  function actuallyPrintingNames() {
    for (let index = 0; index < names.length; index++) {
      const name = names[index];
      console.log(name + ' was found at index ' + index);
    }
  }
  actuallyPrintingNames();
}
printNames(beatles);

//Why did the code produce that output? Explain why each console.log looks the way it does.
const planet = {
	name:"Jupiter",
	milesFromSun: 49849,
	mass: 393983,
            composition: ["gas", "liquid", "oxygen"]
}
const planetCopy = {...planet}
console.log(planet.composition[0] === planetCopy.composition[0]) 
console.log(planet === planetCopy)