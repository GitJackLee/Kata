/*
Convert number to reversed array of digits

Given a random number:

    C#: long;
    C++: unsigned long;

You have to return the digits of this number within an array in reverse order.

Example:

348597 => [7,9,5,8,4,3]
*/

function digitize(n){
  //Convert to string, split into an array, reverse it, map over each element in the array and change from a string to a number
  return n.toString().split("").reverse().map(Number);
}

//Best practice and most clever
function digitize(n){
  return (n + '').split('').map(Number).reverse();
}
