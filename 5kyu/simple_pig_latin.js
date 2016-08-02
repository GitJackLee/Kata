/*
Move the first letter of each word to the end of it, then add 'ay' to the end of the word.

pigIt('Pig latin is cool'); // igPay atinlay siay oolcay
*/

function pigIt(str){
  var arr = str.split(" ");
  return arr.map(function(elem){
    var firstLetter = elem.slice(0, 1);
    var everythingElse = elem.slice(1);
    return everythingElse + firstLetter + "ay";
  }).join(" ");
}

pigIt("Pig latin is cool");

//Best practices
function pigIt(str){
  return str.split(' ').map(function(el){
    return el.slice(1) + el.slice(0, 1) + "ay";
  }).join(' ');
}

//Most clever
function pigIt(str){
  return str.replace(/(\w)(\w*)(\s|$)/g, "\$2\$1ay\$3")
}
