/* 
!Create a function with two arguments that will return an array of the first n multiples of x.

Assume both the given number and the number of times to count will be positive numbers greater than 0.

Return the results as an array or list ( depending on language ).

Examples
countBy(1,10) === [1,2,3,4,5,6,7,8,9,10]
countBy(2,5) === [2,4,6,8,10]
------------------------------------------------------------
process:

*function declaration:   function countBy(x, n)

*Starting with a declared empty array.
    let's use push() to add elements into the array one by one
    reminder: syntax : push(item1,item2, ...)
    elements in array is (x), (x*(1 through n)), or all multiples of x up to n

 ? SOLUTION: */

function countBy(x, n) {
    let z = [];
    for(let i = 1; i <= n; i++){
        z.push(x * i);
    }
    return z;
  }

  //note: my solution was actually the exact same as the top rated solutions to this challenge.