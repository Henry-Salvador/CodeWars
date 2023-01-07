/* Write a function that given, an array arr, returns an array containing at each index i the amount of numbers that are smaller than arr[i] to the right.

For example:

* Input [5, 4, 3, 2, 1] => Output [4, 3, 2, 1, 0]
* Input [1, 2, 0] => Output [1, 1, 0] */

//make use of filter method to make a new array and return that array's length and push into [i]'s index.

function smaller(nums){
    let newArr = [];
    let final = [];
    for (let i = 0; i < nums.length; i++){
        newArr = nums.filter(item => item > item[i]) //filter array by returning only items that are only greater than current iteration's item.
        final.push(newArr.length)   //push onto the array the length of new array.
    }
    return final;
}

//FAILED solution above
//1 solution below
function smaller(nums) {
 return nums.map((n, i) => { //map through entire array, (item, index)
   return nums.slice(i).filter(v => v < n).length//
   //num.slice(index) to isolate array to just the elements right of provided index.
   //with portion of array - filter(item) and return truthies (map's current item < sliced next items)
   //ultimately return the .length of the manipulated array.
 });
}