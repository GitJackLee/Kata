/*
A palindrome is a word, phrase, number, or other sequence of characters which reads the same backward or forward. Allowances may be made for adjustments to capital letters, punctuation, and word dividers.

true === isPalindrome("anna")
false === isPalindrome("walter")
*/

function isPalindrome(line){
  var lineReversed = line.split("").reverse().join("");
  if(line === lineReversed){
    return true;
  }
  return false;
}

//Best practice
function isPalindrome(line){
  return (String(line) == String(line).split('').reverse().join("") );
}

/*
describe("Palindrome", function() {
    it("should identifies that a string is palindrome", function() {
        Test.assertEquals(isPalindrome("anna"), true);
    });

    it("should identifies that a string is not palindrome", function() {
        Test.assertEquals(isPalindrome("walter"), false);
    });

    it("should identifies that a number is palindrome", function() {
        Test.assertEquals(isPalindrome(12321), true);
    });

    it("should identifies that a number is not palindrome", function() {
        Test.assertEquals(isPalindrome(123456), false);
    });

    it("should identifies that a string is palindrome on punctuation", function() {
        Test.assertEquals(isPalindrome("."), true);
    });

    it("should identifies that a string is palindrome on punctuation", function() {
        Test.assertEquals(isPalindrome(".!!."), true);
    });
});
*/
