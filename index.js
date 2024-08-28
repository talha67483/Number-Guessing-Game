#! /usr/bin/env node
import inquirer from "inquirer";
const randomNumber = Math.floor(Math.random() * 6 + 1);
// console.log(randomNumber);
const answer = await inquirer.prompt([
    {
        name: "userGuessNumber",
        type: "number",
        message: "please guess a number between 1-6:"
    },
]);
if (answer.userGuessNumber === randomNumber) {
    console.log(" Congratulation you guess a right number ");
    if (answer.userGuessNumber === 1) {
        console.log("you guess the number one ");
    }
    else if (answer.userGuessNumber === 2) {
        console.log("you guess the number two ");
    }
    else if (answer.userGuessNumber === 3) {
        console.log("you guess the number three ");
    }
    else if (answer.userGuessNumber === 4) {
        console.log("you guess the number four ");
    }
    else if (answer.userGuessNumber === 5) {
        console.log("you guess the number five ");
    }
    else if (answer.userGuessNumber === 6) {
        console.log("you guess the number six ");
    }
}
else {
    console.log(" you guess a wrong number");
}
