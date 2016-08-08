/*
Create a function that calculates the sum of the two lowest numbers given an array of 5 positive integers. No floats or empty arrays will be passed.

For example, when an array is passed like [19,5,42,2,77], the output should be 7.

[10,343445353,3453445,3453545353453] should return 3453455.
*/

function sumTwoSmallestNumbers(numbers){
  var sortedNumbers = numbers.sort(function(a,b){return a-b;});
  var lowest = sortedNumbers[0];
  var secondLowest = sortedNumbers[1];
  return lowest + secondLowest;
}

//Best practice and most clever
function sumTwoSmallestNumbers(numbers){
  numbers = numbers.sort(function(a,b){return a - b;});
  return numbers[0] + numbers [1];
}

/*
describe("Your function", _ => {
  it("should work for basic tests", _ => {
    Test.assertEquals(sumTwoSmallestNumbers([5, 8, 12, 19, 22]), 13 , "Sum should be 13");
    Test.assertEquals(sumTwoSmallestNumbers([15, 28, 4, 2, 43]), 6 , "Sum should be 6");
    Test.assertEquals(sumTwoSmallestNumbers([3, 87, 45, 12, 7]), 10 , "Sum should be 10");
    Test.assertEquals(sumTwoSmallestNumbers([23, 71, 33, 82, 1]), 24 , "Sum should be 24");
    Test.assertEquals(sumTwoSmallestNumbers([52, 76, 14, 12, 4]), 16 , "Sum should be 16");
  });
});
*/
