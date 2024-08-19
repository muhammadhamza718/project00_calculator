#! usr/bin/env node

import inquirer from "inquirer";

const answer = await inquirer.prompt([
  { message: "Enter First Number: ", type: "number", name: "firstNumber" },
  { message: "Enter Second Number: ", type: "number", name: "secondNumber" },
  {
    message: "Select one of the operator to perform operation",
    type: "list",
    name: "operator",
    choices: ["Addition", "subtraction", "Multiplication", "division"],
  },
]);

//                         Conditional Test

if (answer.operator === "Addition") {
  console.log(answer.firstNumber + answer.secondNumber);
} else if (answer.operator === "subtraction") {
  console.log(answer.firstNumber - answer.secondNumber);
} else if (answer.operator === "Multiplication") {
  console.log(answer.firstNumber * answer.secondNumber);
} else if (answer.operator === "division") {
  console.log(answer.firstNumber / answer.secondNumber);
} else {
  ("please select valid operators");
}
