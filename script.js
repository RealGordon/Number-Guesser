/*
 JavaScript functions to power a small guessing game
 __author: gordon.amamoo@amalitech.org
*/

let humanScore = 0;
let computerScore = 0;
let currentRoundNumber = 1;

// Write your code below:
//generate the new secret target number (0-9) at the start of each new round
const generateTarget=()=>Math.floor(Math.random()*10);

/**
* @param{number} `userGuess` `computerGuess` `secretTarget` 
*/
const compareGuesses=(userGuess,computerGuess,secretTarget)=>{
const userDiff=Math.abs(userGuess-secretTarget);
const computerDiff=Math.abs(computerGuess-secretTarget);
//return `true` in all cases except when the computers guess is closer to the
// `secretTarget` than that of the user
return (computerDiff < userDiff)?false: true;
}
/**
*function  to correctly increase the winner’s score after each round.
* @param{string} `winner` => "human" or "computer"
*/
const updateScore= winner=>{
  (winner==="human")? (humanScore++): (computerScore++);
}


const advanceRound=()=>currentRoundNumber++ ;

