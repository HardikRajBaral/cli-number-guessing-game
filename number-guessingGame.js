const readline = require("readline");

let input = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

function easy() {
  console.log("you have choose easy mode you have 10 lives");
  const guess = Math.floor(Math.random() * 100);
  console.log("Computer has guessed the Number between 1 - 100");
  let lives = 10;
  let attempts = 0;
  function check(ans) {
    ans = Number(ans);
    if (ans > 100) {
      console.log("Please enter a number between 1 - 100");
      input.question("Enyer your guess :", check);
    } else {
      if (lives == 0) {
        console.log("you Loose ");
        input.question("do you want to play again? (y/n)", restart);

        return;
      }
      if (ans == guess) {
        console.log(
          `you win!!!. You guessed the number in ${attempts} attempts`,
        );
        input.question("do you want to play again? (y/n)", restart);
        return;
      } else if (ans < guess) {
        console.log("Go higher ");
        lives--;
        attempts++;
        input.question("Enyer your guess :", check);
      } else {
        console.log("Go lower");
        lives--;
        attempts;
        input.question("Enyer your guess :", check);
      }
    }
  }
  input.question("Enyer your guess :", check);
}

function medium() {
  console.log("you have choose medium mode you have 5 lives");
  const guess = Math.floor(Math.random() * 100);
  console.log("Computer has guessed the Number between 1 - 100");
  let lives = 5;
  let attempts = 0;
  function check(ans) {
    ans = Number(ans);
    if (ans > 100) {
      console.log("Please enter a number between 1 - 100");
      input.question("Enyer your guess :", check);
    } else {
      if (lives == 0) {
        console.log("you Loose ");
        input.question("do you want to play again? (y/n)", restart);
        return;
      }
      if (ans == guess) {
        console.log(
          `you win!!!. You guessed the number in ${attempts} attempts`,
        );
        input.question("do you want to play again? (y/n)", restart);
        return;
      } else if (ans < guess) {
        console.log("Go higher ");
        lives--;
        attempts++;
        input.question("Enyer your guess :", check);
      } else {
        console.log("Go lower");
        lives--;
        attempts++;
        input.question("Enyer your guess :", check);
      }
    }
  }
  input.question("Enyer your guess :", check);
}

function hard() {
  console.log("you have choose hard mode you have 3 lives");
  const guess = Math.floor(Math.random() * 100);
  console.log("Computer has guessed the Number between 1 - 100");
  let lives = 3;
  let attempts = 0;
  function check(ans) {
    ans = Number(ans);
    if (ans > 100) {
      console.log("Please enter a number between 1 - 100");
      input.question("Enyer your guess :", check);
    } else {
      if (lives == 0) {
        console.log("you Loose ");
        input.question("do you want to play again? (y/n)", restart);
        return;
      }
      if (ans == guess) {
        console.log(
          `you win!!!. You guessed the number in ${attempts} attempts`,
        );
        input.question("do you want to play again? (y/n)", restart);
        return;
      } else if (ans < guess) {
        console.log("Go higher ");
        lives--;
        attempts++;
        input.question("Enyer your guess :", check);
      } else {
        console.log("Go lower");
        lives--;
        attempts++;
        input.question("Enyer your guess :", check);
      }
    }
  }
  input.question("Enyer your guess :", check);
}

function start() {
  console.log(
    "Welcome to the Number Guessing Game!/nI'm thinking of a number between 1 and 100.",
  );
  input.question(
    "Choose a difficulty /n1. Easy /n2. Medium /n3. Hard /nEnter your choice: ",
    (choice) => {
      switch (choice) {
        case "1":
          easy();
          break;
        case "2":
          medium();
          break;
        case "3":
          hard();
          break;
        default:
          console.log("Invalid choice. Please choose 1, 2, or 3.");
          start();
          break;
      }
    },
  );
}

function restart(ans) {
  if (ans.toLowerCase() === "y") {
    start();
  } else {
    input.close();
  }
}

start();
