//!Write a function that returns
//! both the minimum and maximum n
//! umber of the given list/array.

function minMax(arr){
    let lowest = Math.min(...arr)
    let highest = Math.max(...arr)
    
    return [lowest,highest];
  }
//top rated
  function minMax(arr){
    return [Math.min(...arr), Math.max(...arr)];
  }