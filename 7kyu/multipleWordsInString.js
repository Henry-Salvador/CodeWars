//!You are to write a function that takes a string as its first parameter. This string will be a string of words.

//!You are expected to then use the second parameter, which will be an integer, to find the corresponding word in the given string. The first word would be represented by 0.

//!Once you have the located string you are finally going to multiply by it the third provided parameter, which will also be an integer. You are additionally required to add a hyphen in between each word.

function modifyMultiply (str,loc,num) {
    let arr = []
    let newArr = []
    
    arr = str.split(" ");
    let newStr = arr[loc];
    console.log(newArr);
    
    for(let i = num; i > 0; i--){
       newArr.push(newStr)
      console.log(newArr)
    }
   
  return newArr.join("-")
  } 

  //*top solution
  
  
  function modifyMultiply (str,loc,num) {
    return (str.split(" ")[loc]+"-").repeat(num).slice(0,-1)
  } 