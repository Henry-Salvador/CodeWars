/* 
!Given a string, you have to return a string in which each character (case-sensitive) is repeated once.

Examples (Input -> Output):
* "String"      -> "SSttrriinngg"
* "Hello World" -> "HHeelllloo  WWoorrlldd"
* "1234!_ "     -> "11223344!!__  "
-----------------------------------------------------
process :
we need to be able to grab each letter and insert an extra one.
string.at(index)allows us to return the value/letter at that index.
string.repeat(n) to repeat a character twice.
*using a for loop, i < length of string
*using concat() we can add the same letter after the index
"String"

?SOLUTION*/

//!Failed to come up with solution, will paste 2 provided solutions below.
//************solution 1************

const doubleChar = (str) => str.split("").map(c => c + c).join("");
/* (str) is an anynomous function's parameter.
  returns str.split("")
            *splits the string into an array of each letter.
            * Being an array now, allows us to use map(), an array method.
          .map(c => c + c)
            *map() calls a function for each element of the array, and returns the resulting array.
            *c is the arguement, element, in this case. this function returns element, or letter, plus the same letter.
            *this effectively makes an array in which elements are 2 of the same letters.
          .join("")
            *join() creates a string by combining the elements using provided arguements.
            *since provided arguement is "" it effectively makes the entire array, into one string.
 */

//*=============solution 2============
function doubleChar(str) {
    var word = ''; //creates empty string to add letters into.
    for (var i = 0; i < str.length; i++){ //use a loop iterate each index of string
      word = word + str[i] + str[i]; //updates stored string with 2 of the same index/ letters of original string
    };
    return word; //returns the new string made, with double chars.
  };
  