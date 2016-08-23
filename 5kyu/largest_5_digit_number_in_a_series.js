/*
In the following 6 digit number:

283910

91 is the greatest sequence of 2 digits.

Complete the solution so that it returns the largest five digit number found within the number given.. The number will be passed in as a string of only digits. It should return a five digit integer. The number passed may be as large as 1000 digits.

Adapted from ProjectEuler.net
*/

function solution(digits){
  var placeholder = [];
  var largestFive = 0;

  for(var i = 0; i <= digits.length; i++){
    if(placeholder.length === 5){
      if(+placeholder.join("") > largestFive){
        largestFive = +placeholder.join("");
      }
      placeholder.shift();
    }
    placeholder.push(digits[i]);
  }
  return largestFive;
}

//Best practices and most clever
function solution(digits){
  if (digits.length <= 5) return Number(digits);
  return Math.max(Number(digits.substr(0, 5)), solution(digits.substr(1)));
}
