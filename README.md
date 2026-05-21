# Number Guessing Game

[![npm version](https://badge.fury.io/js/%40hardik_raj_baral%2Fnumber-guessing-game.svg)](https://www.npmjs.com/package/@hardik_raj_baral/number-guessing-game)

A fun command-line number guessing game built with Node.js!

**Project URL:** [https://roadmap.sh/projects/number-guessing-game](https://roadmap.sh/projects/number-guessing-game)

## Description

The computer thinks of a number between 1 and 100, and you have to guess it! The game offers three difficulty levels with varying numbers of lives (attempts):

- **Easy**: 10 lives
- **Medium**: 5 lives
- **Hard**: 3 lives

## Features

- 🎮 Three difficulty modes
- 📊 Attempt counter to track your guesses
- 🔄 Play multiple rounds without restarting
- 💡 Hints: The game tells you if your guess is too high or too low
- 🚀 Easy CLI installation via npm
- ⌨️ Interactive prompts with input validation

## Requirements

- Node.js (v12 or higher)
- npm

## Installation

Install globally via npm:

```bash
npm install -g @hardik_raj_baral/number-guessing-game
```

Or use npx to play without installing:

```bash
npx @hardik_raj_baral/number-guessing-game play
```

## How to Play

### Start the game:

```bash
number-guessing-game play
```

Or use the shorthand command:

```bash
ngg play
```

You can also specify a difficulty level directly:

```bash
number-guessing-game play --difficulty easy
number-guessing-game play -d medium
ngg play --difficulty hard
```

### During Gameplay:

1. Choose a difficulty level:
   - **Easy**: 10 attempts
   - **Medium**: 5 attempts
   - **Hard**: 3 attempts

2. The game will prompt you to enter a number between 1 and 100

3. The game will tell you:
   - "Go higher" - your guess is too low
   - "Go lower" - your guess is too high

4. Guess the correct number before running out of lives to win!

5. After each game, you can choose to play again or exit

## Game Rules

- You must enter a number between 1 and 100
- Each incorrect guess costs you one life
- The game ends when you either:
  - Correctly guess the number (WIN)
  - Run out of lives (LOSE)
- After each round, you can choose to play again or quit

## Example Gameplay

```
The game has started
Welcome to the Number Guessing Game!
I'm thinking of a number between 1 and 100.

? Choose a difficulty (Use arrow keys)
❯ Easy (10 lives)
  Medium (5 lives)
  Hard (3 lives)

you have choose easy mode you have 10 lives
Computer has guessed the Number between 1 - 100
? Enter your guess : 50
Go higher
? Enter your guess : 75
Go lower
? Enter your guess : 62
you win!!!. You guessed the number in 2 attempts

? Do you want to play again? (Y/n)
```

## Available Commands

```bash
number-guessing-game play [options]
ngg play [options]
```

### Options:

- `-d, --difficulty [level]` - Set difficulty level (easy, medium, hard)
- `-h, --help` - Display help information
- `-v, --version` - Display version number

## Technologies Used

- **Node.js** - Runtime environment
- **Commander.js** - CLI argument parsing
- **Inquirer.js** - Interactive prompts

## License

ISC License - Feel free to use and modify this game as you like!

## Author

Hardik Raj Baral

## Repository

[https://github.com/HardikRajBaral/number-guessing-game](https://github.com/HardikRajBaral/number-guessing-game)

## Contributing

Contributions are welcome! Feel free to open an issue or submit a pull request on GitHub.
