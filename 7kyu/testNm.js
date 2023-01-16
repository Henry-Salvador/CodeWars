var number=function(array){
    let newArr = [];
    let text = "";
    for(let i = 0; i < array.length; i++){
        text = `${i+1}: ` + array[i];
        newArr.push(text)
      }
  return newArr;
  }