//Create a prompt asking the user to input numbers separated by commas
//Turn the user's input into an array
//Convert the strings in the array into numbers
//Create the following functions and their returns. Each function will be passed in the array of numbers created in step 3.
//getLength -> how many numbers are in the array
//getSum -> the total when you add up all of the numbers in the array
//getMean -> the average of all of the numbers in the array
//getMin -> the smallest number in the array
//getMax -> the largest number in the array
//getRange -> the largest number minus the lowest number in the array
//getEvens -> a new array of all the even numbers
//getOdds -> a new array of all the odd numbers
let userInput = prompt (`Input numbers seperated by commas`);

const myArray = userInput.split(`,`).map(Number);
console.log (myArray)

let lengthOfArray = myArray.length
console.log (lengthOfArray)

let sum = 0;

for (let number of myArray ) {
  sum += number;
}

console.log (sum)