/*
!Write a function that accepts an array of 10 ints(0-9), and return as a string as in the form of a phone number

* createPhoneNumber([1, 2, 3, 4, 5, 6, 7, 8, 9, 0]) => returns "(123) 456-7890"

the return format must be correct in order to complete this challenge
Don't forget space after closing parentheses.
 */
// array : [3, 2, 3, 4, 7, 6, 2, 1, 8, 1]
//?Program
function createPhoneNumber(numbers){
    let areaCode = numbers.slice(0,3).join(''); //grab first 3 digits from area, use join to get rid of commas "3,2,3" => "323"
    console.log("areacode: "+ areaCode)
    let firstGroup = numbers.slice(3,-4).join('');
    let secondGroup = numbers.slice(-4).join('');
    let phone = `(${areaCode}) ${firstGroup}-${secondGroup}`    //use templates to combine all numbers in correct format

    return phone;//return final formatted phone number.
}

//?Solutions by others worth exploring below:
function createPhoneNumber(numbers){
  var format = "(xxx) xxx-xxxx";
  
  for(var i = 0; i < numbers.length; i++)
  {
    format = format.replace('x', numbers[i]);
  }
  
  return format;
}

function createPhoneNumber(numbers){
  numbers = numbers.join('');
  return '(' + numbers.substring(0, 3) + ') ' 
      + numbers.substring(3, 6) 
      + '-' 
      + numbers.substring(6);
} pu