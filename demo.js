/**
 * Read arguments from the command line
 * use process.argv
 *
 * Create sum of all the arguments
 * arguments are all strings !?c
 * first two are node path & file path
 *
 * Validate the result and output
 * ??
 *
 */

// Test what process.argv returns
console.log(process.argv)
// Results in an array containing [pathofnode, pathoffile, then arguments....]

//First write of our code

let output = 0;

for (let iterator = 2; iterator < process.argv.length; iterator++) {
  // Changed the iterator starter to 2 since we don't need the first 2 arguments
  // We need to change the values to integers and not text (string)
  
  const currentArgument = Number(process.argv[iterator])
  //If currentArgument is not NaN, output it, no need for a else.
  
  if (!Number.isNaN(currentArgument)) {
    output += currentArgument;
  }
  // We can use ternary operators ( question ? true : false ) instead
  // output += Number.isNaN(currentArgument) ? 0 : currentArgument;
}

console.log(output)

// First iteration of our refactoring, using for..of and slice

// Prepare the array with only our values
const cleanedArray = process.argv.slice(2)
// We could use a for.. of loop
let newOutput = 0
for (const value of cleanedArray) {
  const convertedValue = Number(value)
  newOutput += Number.isNaN(convertedValue) ? 0 : convertedValue
}
console.log(newOutput)

// Second iteration of refactoring, using functions to modularize our code

const convertToNumberSkippingNaN = function(value) {
  const convertedValue = Number(value)
  return Number.isNaN(convertedValue) ? 0 : convertedValue
}

// Testing if the function works properly

console.log(convertToNumberSkippingNaN('10'))
console.log(convertToNumberSkippingNaN(10))
console.log(convertToNumberSkippingNaN('Bob'))

const prepareArray = function(array) {
  const output = array.slice(2)
  const cleanedOutput = []
  for (const element of output) {
    cleanedOutput.push(convertToNumberSkippingNaN(element))
  }
  return cleanedOutput
}

// Testing if prepareArray give us an Array of numbers
console.log(prepareArray(['1','bob','chicken',5,'10','-10']))

let sum = 0
for (const number of prepareArray(process.argv)) {
  sum += number
}
console.log(sum)

let substract = 0
for (const number of prepareArray(process.argv)) {
  substract -= number
}
console.log(substract)