// return the two oldest/oldest ages within the array of ages passed in.
function twoOldestAges(ages){
  function compareNum (a, b){
    return a - b;
  }
  let sortArr = ages.sort(compareNum) 
  let oldest = ages.splice(ages.length - 2)
  return oldest
}
