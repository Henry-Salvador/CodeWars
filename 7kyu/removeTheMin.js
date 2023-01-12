/* Given an array of integers, remove the smallest value. Do not mutate the original array/list. If there are multiple elements with the same value, remove the one with a lower index. If you get an empty array/list, return an empty array/list.

Don't change the order of the elements that are left.

Examples
* Input: [1,2,3,4,5], output = [2,3,4,5]
* Input: [5,3,2,1,4], output = [5,3,2,4]
* Input: [2,2,1,2,1], output = [2,2,2,1] */

/*use for loop to iterate through an array and storing the smallest value
use findIndex/find to find the first index with min value and remove
return the new array/none-original array. 
 */

function removeSmallest(numbers) {
    numbers.findIndex( (element) => {
        for(let i = 0; i < numbers.length; i++){
            for(let j = i + 1; j <numbers.length; j++){
                if(numbers[i] > numbers[j]){
                    min 
                }
            }
            let min = 1000;
            if(numbers[i] <= min){
                 min = numbers[i];
            }
        }
    })
  return [];
}

//failed solution
//one solution below
function removeSmallest(numbers) {
  numbers = numbers.slice(0);   //make shallow copy
  const min = Math.min(...numbers); //find min by using Math.min method on new array
  numbers.splice(numbers.indexOf(min), 1);  //remove element by using indexOf(min) index, and removing 1 elements;
  return numbers;   //return new array.
}