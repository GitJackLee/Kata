/*
Return the number (count) of vowels in the given string.

We will consider a, e, i, o, and u as vowels for this Kata.
*/

function getCount(str){
  var vowels = /[aeiou]/gi;
  var vowelsCount = str.match(vowels);
  if(vowelsCount === null){
    return 0;
  } else {
    return vowelsCount.length;
  }
}

//Best answer and most clever
function getCount(str){
  return (str.match(/[aeious]/gi)||[]).length;
}
