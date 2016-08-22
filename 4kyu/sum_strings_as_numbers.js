/*
Given the string representations of two integers, return the string representation of the sum of those integers.

For example:

sumStrings('1','2') // => '3'

C# sumStrings("1","2") // => "3"

A string representation of an integer will contain no characters besides the ten numerals "0" to "9".
*/

function sumStrings(a,b) {
var sorted = a + " " + b;
var str = "";
var result = 0;
var arr = sorted.split(" ");
arr = arr.sort(function(a,b){ return b-a});
sorted = arr;
a = sorted[0];
b = sorted[1];

for(i = a.length-1, j = b.length-1; i >= 0; i--, j--){
  if(i === 0 && Number(a[i]) === 0 && Number(b[j]) === 0){
    continue;
  } else if(isNaN(Number(b[j])) && Number(a[i+1]) + Number(b[j+1]) >= 10){
    result = (Number(a[i])) + 1;
    str += result % 10;
  } else if(isNaN(Number(b[j]))){
    result = Number(a[i]);
    str += result;
  } else if(((Number(a[i+1]) + Number(b[j+1])) >= 10) || result >= 10){
    result = (Number(a[i]) + Number(b[j])) + 1;
    str += result % 10;
  } else if ((Number(a[i]) + Number(b[j])) >= 10){
    result = Number(a[i]) + Number(b[j]);
    str += result % 10;
  } else {
    result = Number(a[i]) + Number(b[j]);
    str += result;
  }
}

if(result >= 10){
  str += "1";
  return str.split("").reverse().join("");
}
  return str.split("").reverse().join("");

}

//Best Practices
String.prototype.reverse = function() {
  return this.split('').reverse().join('');
}

function sumStrings(a,b) {
  a = a.reverse(); b = b.reverse();
  var carry = 0;
  var index = 0;
  var sumDigits = [];
  while (index < a.length || index < b.length || carry != 0) {
    var aDigit = index < a.length ? parseInt(a[index]) : 0;
    var bDigit = index < b.length ? parseInt(b[index]) : 0;
    var digitSum = aDigit + bDigit + carry;
    sumDigits.push((digitSum % 10).toString());
    carry = Math.floor(digitSum / 10);
    index++;
  }
  sumDigits.reverse();
  while (sumDigits[0] == '0') sumDigits.shift();
  return sumDigits.join('');
}

//Most Clever
function sumStrings(a, b) {
  var res = '', c = 0;
  a = a.split('');
  b = b.split('');
  while (a.length || b.length || c) {
    c += ~~a.pop() + ~~b.pop();
    res = c % 10 + res;
    c = c > 9;
  }
  return res.replace(/^0+/, '');
}
