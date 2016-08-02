/*
You get an array of numbers, return the sum of all of the positives ones.

Example [1,-4,7,12] => 1 + 7 + 12 = 20
*/

function positiveSum(arr){
  var sum = 0;
  for(var i = 0; i < arr.length; i++){
    if(arr[i] > 0){
      sum += arr[i];
    }
  }
  return sum;
}


//Best practices and most clever
function positiveSum(arr){
  return arr.reduce((a,b)=> a + (b > 0 ? b : 0),0);
}
