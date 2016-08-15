/*
Welcome. In this kata, you are asked to square every digit of a number.

For example, if we run 9119 through the function, 811181 will come out.

Note: The function accepts an integer and returns an integer

*/

function squareDigits(num){
 var numArr = num.toString().split("");
 var squared = numArr.map(function(number){
   return number*number;
 }).join("");
return Number(squared);
}

squareDigits(9119);

//Best practices and most clever
function squareDigits(num){
  return Number(('' + num).split('').map(function (val) { return val * val;}).join(''));
}
