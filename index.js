#! /usr/bin/env node
import inquirer from "inquirer";
async function main() {
    async function calculate() {
        const answer = await inquirer.prompt([
            { message: "Enter first number", type: "number", name: "firstNumber" },
            { message: "Enter second number", type: "number", name: "secondNumber" },
            {
                message: "Select one of the operators to perform operation.",
                type: "list",
                name: "operator",
                choices: ["Addition", "Subtraction", "Multiplication", "Division"],
            },
        ]);
        if (answer.operator === "Addition") {
            console.log(answer.firstNumber + answer.secondNumber);
        }
        else if (answer.operator === "Subtraction") {
            console.log(answer.firstNumber - answer.secondNumber);
        }
        else if (answer.operator === "Multiplication") {
            console.log(answer.firstNumber * answer.secondNumber);
        }
        else if (answer.operator === "Division") {
            console.log(answer.firstNumber / answer.secondNumber);
        }
        else {
            console.log("Please enter a valid operation.");
        }
        const again = await inquirer.prompt([
            {
                message: "Do you want to perform another calculation?",
                type: "confirm",
                name: "repeat",
            },
        ]);
        if (again.repeat) {
            await calculate();
        }
        else {
            console.log("Goodbye!");
        }
    }
    await calculate();
}
main();
