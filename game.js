import inquirer from "inquirer";

async function askGuess() {
  const { guess } = await inquirer.prompt([
    {
      type: "input",
      name: "guess",
      message: "Enter your guess :",
      validate: (value) => {
        const num = Number(value);
        if (isNaN(num)) return "Please enter a valid number";
        if (num < 1 || num > 100)
          return "Please enter a number between 1 and 100";
        return true;
      },
    },
  ]);
  return Number(guess);
}

export async function easy() {
  console.log("you have choose easy mode you have 10 lives");
  const guess = Math.floor(Math.random() * 100);
  console.log("Computer has guessed the Number between 1 - 100");
  let lives = 10;
  let attempts = 0;
  while (lives > 0) {
    const ans = await askGuess();
    if (ans === guess) {
      console.log(`you win!!!. You guessed the number in ${attempts} attempts`);
      break;
    } else if (ans < guess) {
      console.log("Go higher ");
    } else {
      console.log("Go lower");
    }
    lives--;
    attempts++;
    console.log(`You have ${lives} lives left`);
  }
  if (lives === 0) {
    console.log("you Loose T_T !!! ");
  }
  await restart();
}

export async function medium() {
  console.log("you have choose medium mode you have 5 lives");
  const guess = Math.floor(Math.random() * 100);
  console.log("Computer has guessed the Number between 1 - 100");
  let lives = 5;
  let attempts = 0;

  while (lives > 0) {
    const ans = await askGuess();
    if (ans === guess) {
      console.log(`you win!!!. You guessed the number in ${attempts} attempts`);
      break;
    } else if (ans < guess) {
      console.log("Go higher ");
    } else {
      console.log("Go lower");
    }
    lives--;
    attempts++;
    console.log(`You have ${lives} lives left`);
  }
  if (lives === 0) {
    console.log("you Loose T_T !!! ");
  }
  await restart();
}

export async function hard() {
  console.log("you have choose hard mode you have 3 lives");
  const guess = Math.floor(Math.random() * 100);
  console.log("Computer has guessed the Number between 1 - 100");
  let lives = 3;
  let attempts = 0;
  while (lives > 0) {
    const ans = await askGuess();
    if (ans === guess) {
      console.log(`you win!!!. You guessed the number in ${attempts} attempts`);
      break;
    } else if (ans < guess) {
      console.log("Go higher ");
    } else {
      console.log("Go lower");
    }
    lives--;
    attempts++;
    console.log(`You have ${lives} lives left`);
  }
  if (lives === 0) {
    console.log("you Loose T_T !!! ");
  }
  await restart();
}

export async function start() {
  const { level } = await inquirer.prompt([
    {
      type: "list",
      name: "level",
      message: "Choose your difficulty level",
      choices: [
        { name: "Easy", value: "easy" },
        { name: "Medium", value: "medium" },
        { name: "Hard", value: "hard" },
      ],
    },
  ]);
  if (level === "easy") {
    await easy();
  } else if (level === "medium") {
    await medium();
  } else {
    await hard();
  }
}

async function restart() {
  const { ans } = await inquirer.prompt([
    {
      type: "confirm",
      name: "ans",
      message: "Do you want to play again?",
      default: false,
    },
  ]);
  return ans ? start() : console.log("Thank you for playing! Goodbye!");
}
