const readline = require("readline");
const chalk = require("chalk");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

console.log("Did you watch Mirzapur? Let's check your knowledge...\n");
let score = 0;
rl.question(
  chalk.green("Who played the role of guddu pandit?\n"),
  (answerOne) => {
    console.log(
      chalk.red.bold("Your answer:") +
        answerOne.toLowerCase() +
        "." +
        chalk.red.bold(" Correct answer:") +
        "ali fazal\n"
    );
    if (answerOne.toLowerCase() === "ali fazal") {
      score++;
    } else {
      score--;
    }
    rl.question(
      chalk.green("Who killed bablu pandit in season one?\n"),
      (answerTwo) => {
        console.log(
          chalk.red.bold("Your answer:") +
            answerTwo.toLowerCase() +
            "." +
            chalk.red.bold(" Correct answer:") +
            "divyendu sharma\n"
        );
        if (answerTwo.toLowerCase() === "divyendu sharma") {
          score++;
        } else {
          score--;
        }
        rl.question(
          chalk.green("Which actress played the role of golu gupta?\n"),
          (answerThree) => {
            console.log(
              chalk.red.bold("Your answer:") +
                answerThree.toLowerCase() +
                "." +
                chalk.red.bold(" Correct answer:") +
                "shweta tripathi\n"
            );
            if (answerThree.toLowerCase() === "shweta tripathi") {
              score++;
            } else {
              score--;
            }
            rl.question(
              chalk.green("What is the actual name of kaleen bhaiya?\n"),
              (answerFour) => {
                console.log(
                  chalk.red.bold("Your answer:") +
                    answerFour.toLowerCase() +
                    "." +
                    chalk.red.bold(" Correct answer:") +
                    "pankaj tripathi\n"
                );
                if (answerFour.toLowerCase() === "pankaj tripathi") {
                  score++;
                } else {
                  score--;
                }
                rl.question(
                  chalk.green(
                    "What character shriya pilgaonkar played in mizapur?\n"
                  ),
                  (answerFive) => {
                    console.log(
                      chalk.red.bold("Your answer:") +
                        answerFive.toLowerCase() +
                        "." +
                        chalk.red.bold(" Correct answer:") +
                        "sweety gupta\n"
                    );
                    if (answerFive.toLowerCase() === "sweety gupta") {
                      score++;
                    } else {
                      score--;
                    }
                    console.log(chalk.bold.bgMagenta("Your score is " + score));
                    if (score >= 3) {
                      console.log(chalk.blue.bold("You played well!"));
                    } else {
                      console.log(
                        chalk.blue.bold(
                          "You need to rewatch mirzapur to improve your knowledge."
                        )
                      );
                    }
                    console.log("Thank you for playing this game.");
                    rl.close();
                  }
                );
              }
            );
          }
        );
      }
    );
  }
);
