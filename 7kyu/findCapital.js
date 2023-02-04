//Write a function that takes a single string (word) as argument. The function must return an ordered list containing the indexes of all capital letters in the string.

//example 'CodEWaRs' => [0,3,4,6]

function capitals (word){
    let arr = word.split("") //turn string into an array

    return arr.forEach( (letter , index) =>{
        if(letter = letter.toUpperCase())
        return index;
    }
        )
}

//2nd top rated solution

var capitals = function (word) {
	return word.split('').reduce(function(memo, v, i) {
    return v === v.toUpperCase() ? memo.concat(i) : memo;
  }, []);
};