// In this kata you have to write a simple Morse code decoder. While the Morse code is now mostly superceded by voice and digital data communication channels, it still has its use in some applications around the world.
// The Morse code encodes every character as a sequence of "dots" and "dashes". For example, the letter A is coded as ·−, letter Q is coded as −−·−, and digit 1 is coded as ·−−−−. The Morse code is case-insensitive, traditionally capital letters are used. When the message is written in Morse code, a single space is used to separate the character codes and 3 spaces are used to separate words. For example, the message HEY JUDE in Morse code is ···· · −·−− ·−−− ··− −·· ·.

// NOTE: Extra spaces before or after the code have no meaning and should be ignored.

// In addition to letters, digits and some punctuation, there are some special service codes, the most notorious of those is the international distress signal SOS (that was first issued by Titanic), that is coded as ···−−−···. These special codes are treated as single special characters, and usually are transmitted as separate words.

// Your task is to implement a function that would take the morse code as input and return a decoded human-readable string.

// For example:

// decodeMorse('.... . -.--   .--- ..- -.. .')
// //should return "HEY JUDE"
// NOTE: For coding purposes you have to use ASCII characters . and -, not Unicode characters.

// The Morse code table is preloaded for you as a dictionary, feel free to use it:

// Coffeescript/C++/Go/JavaScript/Julia/PHP/Python/Ruby/TypeScript: MORSE_CODE['.--']
// C#: MorseCode.Get(".--") (returns string)
// Elixir: @morse_codes variable (from use MorseCode.Constants). Ignore the unused variable warning for morse_codes because it's no longer used and kept only for old solutions.
// Elm: MorseCodes.get : Dict String String
// Haskell: morseCodes ! ".--" (Codes are in a Map String String)
// Java: MorseCode.get(".--")
// Kotlin: MorseCode[".--"] ?: "" or MorseCode.getOrDefault(".--", "")
// Rust: self.morse_code
// Scala: morseCodes(".--")
// C: provides parallel arrays, i.e. morse[2] == "-.-" for ascii[2] == "C"
// All the test strings would contain valid Morse code, so you may skip checking for errors and exceptions. In C#, tests will fail if the solution code throws an exception, please keep that in mind. This is mostly because otherwise the engine would simply ignore the tests, resulting in a "valid" solution.

// Good luck!

// After you complete this kata, you may try yourself at Decode the Morse code, advanced.

// my
decodeMorse = function(morseCode){
  const morseWord = []
  let counter = 0
  morseCode.split(' ').map(a => { 
    if(a === '' && morseWord.length !== 0){
      counter += 1  
    }else if ( a !== ''){
      if(counter === 2) {
        morseWord.push(' ' + 'a') 
        counter = 0
      }else{
        morseWord.push('a') 
      }
    }
  })
  return morseWord.join('')
}

//best 
decodeMorse2 = function(morseCode){
  return morseCode
    .trim()
    .split(/  | /)
    .map( (code) => MORSE_CODE[code] || ' ')
    .join('');
}

//console.log(decodeMorse('  .... . -.--   .--- ..- -.. .  '))


decodeMorse3 = function(morseCode){
  const dotDash = []
  let pauseDotDash = ''
  let pauseCharWord = ''
  let pauseWord = ''
  morseCode.split('0').filter((e, p, s) => e !== '' && s.indexOf(e) === p).sort(comparar).map(a => dotDash.push(a))
  morseCode.split('1').filter((e, p, s) => e !== '' && s.indexOf(e) === p).sort(comparar).map((a, i) => {
    if(i === 0){
      pauseDotDash = a
    } else if(i === 1){
      if( a.length % 7){
        pauseWord = a 
      } else {
        pauseCharWord = a
      }
    } else {
      if( a.length % 7){
        pauseWord = a 
      } else {
        pauseCharWord = a
      }
    }
  })
  console.log(pauseDotDash)
  let current_counter = '11'
  let x = `/${current_counter}/g`
  console.log(x)
  return morseCode.replace(/11/g, '22')
  //https://www.codewars.com/kata/54b72c16cd7f5154e9000457/train/javascript
//   morseCode.split('0').filter((e, p, s) => e !== '' && s.indexOf(e) === p).map(a => {
//     if(dot === '') {
//       dot = a
//     }else{
//       if ( dot.length > a.length ){
//         dash = dot
//         dot = a
//       } else {
//         dash = a
//       }
//     }
//   })
//  morseCode.split('1').filter((e, p, s) => e !== '' && s.indexOf(e) === p).map(a => {
//    if(pauseDotDash === '') {
//      pauseDotDash = a
//    }else{
//     if(pauseDotDash.length > a.length ) {
//       if(pauseCharWord.length > a.length) {
//         if(pauseCharWord.length < pauseDotDash.length){
//           pauseWord = pauseDotDash
//           pauseDotDash = a
//         }else{
//           pauseWord = pauseCharWord
//           pauseCharWord = pauseDotDash
//           pauseDotDash = a
//         }
//       } else {
//         pauseWord = pauseDotDash
//         pauseDotDash = pauseCharWord
//         pauseCharWord = a
//       }
//     } else {
//       if (pauseCharWord.length > a.length) {
//         pauseWord = pauseCharWord
//         pauseCharWord = a
//       } else {
//         if (pauseCharWord.length < pauseDotDash.length){
//           console.log(pauseDotDash,'d', pauseCharWord ,'d2', pauseWord,'d3', a)
//           let temp = pauseDotDash
//           pauseWord = a
//           pauseDotDash = pauseCharWord.length
//           pauseCharWord = temp
//         } else {
//           pauseCharWord = pauseWord
//           pauseWord = a
//         }
//       }
//     }
//  }})
//   return [pauseDotDash, pauseCharWord, pauseWord, dot, dash]
}

function comparar(a, b) {
  if (a.length < b.length) {
    return -1;
  }
  if (a.length > b.length) {
    return 1;
  }
  return 0;
}

console.log(decodeMorse3('1100110011001100000011000000111111001100111111001111110000000000000011001111110011111100111111000000110011001111110000001111110011001100000011'))