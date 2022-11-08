/* Your task is to convert strings to how they would be written by Jaden Smith. The strings are actual quotes from Jaden Smith, but they are not capitalized in the same way he originally typed them.

Example:

Not Jaden-Cased: "How can mirrors be real if our eyes aren't real"
Jaden-Cased:     "How Can Mirrors Be Real If Our Eyes Aren't Real"
process: split(" ") string method to seperate each word (each word will be an element in an *array*), 
process - .map(word, index) iterates through each and all elements in array
process -.toUpperCase first index of string element + slice(1) to add rest of letters unaltered. 
process - use join(' ') to create a string from array elements.
*/

//Solution:
String.prototype.toJadenCase = function (string) {
    return string.split(" ").map( word => word[0].toUpperCase() + word.slice(1) ).join(' ');
    
  
};