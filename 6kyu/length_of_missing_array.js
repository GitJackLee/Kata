/*
You get an array of arrays.
If you sort the arrays by their length, you will see, that their length-values are consecutive.
But one array is missing!


You have to write a method, that return the length of the missing array.

Example:
[[1, 2], [4, 5, 1, 1], [1], [5, 6, 7, 8, 9]] --> 3


If the array of arrays is null/nil or empty, return 0.
When an array in the array is null or empty, return 0 too!
There will always be a missing element and its length will be always between the given arrays.

Have fun coding it and please don't forget to vote and rank this kata! :-)

I have created other katas. Have a look if you like coding and challenges.
*/

function getLengthOfMissingArray(arrayOfArrays) {
  var missingLength = 0;
  var invalid = 0;
  if(!arrayOfArrays || arrayOfArrays[0] == null) return invalid;
  for(var i = 0; i < arrayOfArrays.length; i++){
    if(arrayOfArrays[i] == null || arrayOfArrays[i].length === 0){
      return invalid;
    }
  }

  var sortedLength = arrayOfArrays.map(function(array){
    return array.length;
  }).sort(function(a,b){return a-b});
  var first_elem = sortedLength[0];

  for(var i = 0; i < sortedLength.length-1; i++){
    if( (sortedLength[i+1]) - (sortedLength[i]) > 1 ){
      missingLength = sortedLength[i]+1;
      return missingLength;
    }
  }
}

//Best practices
function getLengthOfMissingArray(arr) {
  return !arr||(ar=arr.map((x,i)=>x?x.length:0).sort((a,b)=>a-b)).indexOf(0)>-1
         ?0:ar.filter((x,i)=>x!=i+ar[0]).concat([1])[0]-1
}
