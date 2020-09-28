function palindrome(str) {
  var re = /[^A-Za-z0-9]/g;
  var lowRegStr = str.toLowerCase().replace(re, '');
  var reverseStr = lowRegStr.split('').reverse().join('');
  return reverseStr === lowRegStr;
}

var value = "";
var isPalindrome = palindrome("Roma me tem amor");

isPalindrome ? value = "SIm": value = "Não";

console.log("O valor informado na string é um palíndromo? " +value+ "!");
