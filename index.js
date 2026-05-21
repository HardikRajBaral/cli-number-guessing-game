#!/usr/bin/env node

import { easy, medium, hard, start } from "./game.js";

import { Command } from "commander";

const program = new Command();

program
  .name("number-guessing-game")
  .description("A fun command-line number guessing game built with Node.js!")
  .version("1.0.0");

program
  .command("play")
  .description("Start the number guessing game")
  .option("-d, --difficulty [level]", "You have chosen difficulty level")
  .action((option) => {
    console.log("The game has started");
    console.log(
      "Welcome to the Number Guessing Game!\nI'm thinking of a number between 1 and 100.",
    );
    const { difficulty } = option;
    if (difficulty === "easy") {
      easy();
    } else if (difficulty === "medium") {
      medium();
    } else if (difficulty === "hard") {
      hard();
    } else {
      start();
    }
  });

program.parse(process.argv);
