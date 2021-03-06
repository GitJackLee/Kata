//Given two integers, which can be positive and negative, find the sum of all the numbers between including them too and return it. If both numbers are equal return a or b. Note! a and b are not ordered!

/*
Example:
GetSum(1, 0) == 1   // 1 + 0 = 1
GetSum(1, 2) == 3   // 1 + 2 = 3
GetSum(0, 1) == 1   // 0 + 1 = 1
GetSum(1, 1) == 1   // 1 Since both are same
GetSum(-1, 0) == -1 // -1 + 0 = -1
GetSum(-1, 2) == 2  // -1 + 0 + 1 + 2 = 2
*/

function GetSum(a, b){
  var argArr = [a, b];
  argArr.sort(function(a, b){return a-b});
  var low = argArr[0];
  var high = argArr[1];
  var result = 0;

  for(var i = low; i <= high; i++){
    result += i;
  }
  return result;
}

GetSum(1, 2);

//Best and most clever answer
const GetSum = (a, b) => {
  let min = Math.min(a, b),
      max = Math.max(a, b);
  return (max - min + 1) * (min + max) / 2;
}

//Next best answer
function GetSum( a,b ){
  if(a == b) return a;
  else if(a < b) return a + GetSum(a+1, b);
  else return a + GetSum(a-1,b);
}
