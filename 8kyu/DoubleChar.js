//Given a string, you have to return a string in which each character (case-sensitive) is repeated once
/*
doubleChar("String") ==> "SSttrriinngg"

doubleChar("Hello World") ==> "HHeelllloo  WWoorrlldd"

doubleChar("1234!_ ") ==> "11223344!!__  "
*/

//My answer
function doubleChar(str){
  var doubled = "";

  for(var i = 0; i < str.length; i++){
    doubled += str[i] + str[i];
  }
  return doubled;
}

//Best practice answer
const doubleChar = (str) => str.split("").map(c => c + c).join("");

//Most clever answer
function doubleChar(str){
  return str.replace(/(.)/g, "$1$1");
}
