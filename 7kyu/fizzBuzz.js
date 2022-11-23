function fizzbuzz(n){
    let arr = []
      for(let i = 1; i <= n; i++){
        if (i % 3 == 0 && i % 5 == 0)
          arr.push('FizzBuzz');
    else if (i % 5 == 0) 
      arr.push("Buzz");
    else if (i % 3 == 0) 
      arr.push("Fizz");
        else
          arr.push(i)
        }
    
    return arr;
    }

    //*top solution 

    function fizzbuzz(n)
{
  var i = 1, arr = [];
  while(i <= n) {
    var fizz = (i % 3 == 0);
    var buzz = (i % 5 == 0);
    if(fizz || buzz) {
      arr.push((fizz?"Fizz":"") + (buzz?"Buzz":""));
    }
    else {
      arr.push(i);
    }
    i++;
  }
  return arr;
}

var fizzify = fizzbuzz;