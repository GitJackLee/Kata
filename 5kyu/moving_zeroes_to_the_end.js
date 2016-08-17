//Write an algorithm that takes an array and moves all of the zeros to the end, preserving the order of the other elements.
//moveZeros([false,1,0,1,2,0,1,3,"a"]) // returns[false,1,1,2,1,3,"a",0,0]

var moveZeros = function (arr) {
  var copy = arr;
  var zeroesArr = [];

  function isZero(value){
    if(value === 0){
      zeroesArr.push(0);
    }
    return value !== 0;
  }

  var noZeroArr = copy.filter(isZero);

  return noZeroArr.concat(zeroesArr);
}

moveZeros([false, "hi", "lolno", 1, 2, 0, 1, 0, 1, 0, 3, 0, 1])

//Best answer and most clever
var moveZeros = function (arr) {
  return arr.filter(function(x) {return x !== 0}).concat(arr.filter(function(x) {return x === 0;}));
}
