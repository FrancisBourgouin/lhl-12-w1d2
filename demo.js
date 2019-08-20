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

console.log(process.argv)
// Results in an array containing [pathofnode, pathoffile, then arguments....]
const convertToNumberSkippingNaN = function(value) {
  const convertedValue = Number(value)
  return Number.isNaN(convertedValue) ? 0 : convertedValue
}

console.log(convertToNumberSkippingNaN('10'))
console.log(convertToNumberSkippingNaN(10))
console.log(convertToNumberSkippingNaN('Bob'))


// Prepare the array with only our values
const cleanedArray = process.argv.slice(2)
// we could use a for.. of loop
let newOutput = 0
for (const value of cleanedArray) {
  const convertedValue = Number(value)
  newOutput += Number.isNaN(convertedValue) ? 0 : convertedValue
}
console.log(newOutput)


// If command line input is "node demo.js 1 3 4 6 7"
let output = 0;

for (let iterator = 2; iterator < process.argv.length; iterator++) {
  //Changed the iterator starter to 2 since we don't need the first 2 arguments
  
  //We need to change the values to integers and not text (string)

  const currentArgument = Number(process.argv[iterator])

  if (!Number.isNaN(currentArgument)) {
    output += currentArgument;
  }

  //We can use ternary operators ( question ? true : false ) instead
  // output += Number.isNaN(currentArgument) ? 0 : currentArgument;
}

console.log(output)