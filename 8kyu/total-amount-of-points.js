/* 
!Our football team has finished the championship.

Our team's match results are recorded in a collection of strings. Each match is represented by a string in the format "x:y", where x is our team's score and y is our opponents score.

For example: ["3:1", "2:2", "0:1", ...]

Points are awarded for each match as follows:

if x > y: 3 points (win)
if x < y: 0 points (loss)
if x = y: 1 point (tie)
We need to write a function that takes this collection and returns the number of points our team (x) got in the championship by the rules given above.

Notes:

our team always plays 10 matches in the championship
0 <= x <= 4
0 <= y <= 4 
>process: using .split(":") we can seperate integers in strings.
>use an accumulator to update points based off criteria
>return points

*/
//?SOLUTION
function points(games) {
  let pts = 0;
  for(let i = 0; i < games.length; i++ ){
    let score = games[i].split(":")
    let x = score[0];
    let y = score[1];
    if(x > y){
      pts +=3;
    }else if (x == y){
      pts +=1
    }
  }
    return pts;
  }

  //*trying to convert above function using arrow expressions

  let points = game =>{
    let pts = 0;
    game.forEach(i => {
      let score = i.split(":");
      let x = score[0];
      let y = score[1];
      pts = (x > y) ? pts += 3 : 
      (x == y) ? pts +=1 : pts;
    });
    return pts
  }

  //!both solutions work! link to challenge to look at other solution as it varies
  //!greatly, and some interesting methods used that seem worth getting to know better.
  //*link:https://www.codewars.com/kata/5bb904724c47249b10000131/solutions/javascript
  //>this is top voted solution
  const points=games=>games.reduce((output,current)=>{
    return output += current[0]>current[2] ? 3 : current[0]===current[2] ? 1 : 0;
  },0)
  //>.reduce is very similar to .forEach, but has essentially a built in accumulator
  //>meaning there is no need for our own like above's "pts" var.
  //>this solution also did not make extra work by splitting the strings to compare ints
  //>instead it simply compared chars/ints at [0] and [2] of each string.
  //>the ? operator is identical, but because of .reduce() and accumulation, much shorter
  //>making it an nice, yet perfectly easy to understand one line return function.