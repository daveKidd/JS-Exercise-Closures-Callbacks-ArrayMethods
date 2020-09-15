// ⭐️ Example Challenge START ⭐️

/**
 * ### Challenge `processFirstItem`
 * 
 * @instructions
 * Implement a higher-order function called `processFirstItem`.
 * It takes two arguments:
 * @param stringList an array of strings.
 * @param callback function that takes a string as its argument.
 * @returns the result of invoking `callback` with the FIRST element in `stringList`.
 * 
 * Example of usage of this higher-order function:
 * Invoking `processFirstItem` passing `['foo', 'bar']` and `(str) => str + str`,
 * should return 'foofoo'.
*/
let arrayOfStrings = ["Why", "Hello", "There"];
function processFirstItem(stringList, callback) {
  return callback(stringList[0])
}
processFirstItem(arrayOfStrings,function(firstItem){
  console.log(firstItem+firstItem);
})
// ⭐️ Example Challenge END ⭐️


///// M V P ///////

/* Task 1: `counterMaker`
 * Study the code for counter1 and counter2. Answer the questions below.
 * 
 * 1. What is the difference between counter1 and counter2? - counter1 would remember what count is.  counter2 wouldn't
 * 
 * 2. Which of the two uses a closure? How can you tell? - counter1 uses closure.  You can tell becaue there is a nested
 * variable, count that reaches outward to add one to count.  It has a function nested in the other one.
 * 
 * 3. In what scenario would the counter1 code be preferable? In what scenario would counter2 be better? 
 *  counter1 would be great if you didn't need to remember the value of count and only needed to do it to one item in 
 * the code.  counter2 is great to apply to different functions and will remember what count is for each function
*/

// counter1 code
function counterMaker() {
  let count = 0;
  return function counter() {
    count++;
  }
}

const counter1 = counterMaker();

// counter2 code
let count = 0;

function counter2() {
  return count++;
}


/* Task 2: inning() 

Write a function called `inning` that generates a random number of points that a team scored in an inning. This should be a whole number between 0 and 2. */

function inning(){  
  return Math.floor(Math.random() * 3);
}


/* Task 3: finalScore()

Write a higher order function called `finalScore` that accepts the callback function `inning` (from above) and a number of innings and and returns the final score of the game in the form of an object.

For example, 

finalScore(inning, 9) might return: 
{
  "Home": 11,
  "Away": 5,
}

*/ 

function finalScore(cb,inn){
  let scoreObj = {};
  let homeTotal = 0;
  let awayTotal = 0;
  
  for(i=0;i<=inn;i++){
    let homeRandom = cb();
    homeTotal += homeRandom;
    let awayRandom = cb();
    awayTotal += awayRandom;    
  }

  scoreObj.Home = homeTotal;
  scoreObj.Away = awayTotal;
  console.log(scoreObj);
  console.log("In " + inn + " innings the total score was Home: " + scoreObj.Home + " and Away: " + scoreObj.Away);  
}
finalScore(inning,9);

/* Task 4: 

Create a function called `scoreboard` that accepts the following parameters: 

(1) Callback function `getInningScore`
(2) Callback function `inning`
(2) A number of innings

and returns the score at each pont in the game, like so:

1st inning: awayTeam - homeTeam
2nd inning: awayTeam - homeTeam
3rd inning: awayTeam - homeTeam
4th inning: awayTeam - homeTeam
5th inning: awayTeam - homeTeam
6th inning: awayTeam - homeTeam
7th inning: awayTeam - homeTeam
8th inning: awayTeam - homeTeam
9th inning: awayTeam - homeTeam

Final Score: awayTeam - homeTeam */
// function getInningScore(inn,numInn){
//   let totalAway = 0;
//   let totalHome = 0;
//   for(i=1;i<=numInn;i++){
//     totalHome += inn();
//     totalAway += inn();
//     console.log("Inning " + i + ": Away Team: " + totalAway + " - Home Team: " + totalHome);
//   }
//   if(totalAway > totalHome){
//     console.log("Away Team Wins!");
//   }
//   else if(totalHome > totalAway){
//     console.log("Home Team Wins!");
//   }
//   else{
//     console.log("It's a tie!");
//   }
// }
// function scoreboard(getInn, inn, numInn) {
//   getInn(inn,numInn);
// }
// scoreboard(getInningScore,inning, 12);

//another way to to do it

function getInningScore(inn){
  return inn();  
}
function scoreboard(getInn, inn, numInn) {
  let homeTotal = 0;
  let awayTotal = 0;
  for(i=1;i<=numInn;i++){
    homeTotal += getInn(inn);
    awayTotal += getInn(inn);
    console.log("Inning " + i + ": Away Team: " + awayTotal + " - Home Team: " + homeTotal);
  }
}
scoreboard(getInningScore,inning, 12);



