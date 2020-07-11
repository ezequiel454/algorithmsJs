// Write a function that accepts an array of 10 integers (between 0 and 9), that returns a string of those numbers in the form of a phone number.

// Example:
// createPhoneNumber([1, 2, 3, 4, 5, 6, 7, 8, 9, 0]) // => returns "(123) 456-7890"
// The returned format must be correct in order to complete this challenge.
// Don't forget the space after the closing parentheses!

// my
function createPhoneNumber2(numbers){
  return numbers.reduce((a, b, i) => { 
    if(i === 0) {
      return '(' + a + b
    } else if ( i === 2 ) {
      return a + b + ') '
    } else if ( i === 5 ) {
      return a + b + '-'
    } else {
      return a + b
    }
  }, '')
}

// best 
function createPhoneNumber(numbers){
  return numbers.reduce((p,c) => p.replace('x',c), "(xxx) xxx-xxxx");
}

console.log(createPhoneNumber2([1, 2, 3, 4, 5, 6, 7, 8, 9, 0]))