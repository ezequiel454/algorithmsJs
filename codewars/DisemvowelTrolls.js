// Trolls are attacking your comment section!

// A common way to deal with this situation is to remove all of the vowels from the trolls' comments, neutralizing the threat.

// Your task is to write a function that takes a string and return a new string with all vowels removed.

// For example, the string "This website is for losers LOL!" would become "Ths wbst s fr lsrs LL!".

// Note: for this kata y isn't considered a vowel.

// Test.assertEquals(disemvowel("This website is for losers LOL!"),
//   "Ths wbst s fr lsrs LL!")

//my
function disemvowel(str) {
  return str.split('').filter(a => a.toLowerCase() !== 'a' && a.toLowerCase() !== 'e' && a.toLowerCase() !== 'i' && a.toLowerCase() !== 'o' && a.toLowerCase() !== 'u' ).join('');
}

//best 1
function disemvowel2(str) {
  return str.replace(/[aeiou]/gi, '');
}

//best 2
function disemvowel3(str) {
  var vowels = ['a', 'e', 'i', 'o', 'u'];
  
  return str.split('').filter(function(el) {
    return vowels.indexOf(el.toLowerCase()) == -1;
  }).join('');
}