# Number Guessing Game

A fun command-line number guessing game built with Node.js!

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

## Requirements

- Node.js (v12 or higher)

## Installation

1. Clone or download this project
2. Navigate to the project directory:
   ```bash
   cd number-guessing-game
   ```

## How to Play

1. Run the game:
   ```bash
   node number-guessingGame.js
   ```

2. Choose a difficulty level (1 for Easy, 2 for Medium, 3 for Hard)

3. Start guessing the number between 1 and 100

4. The game will tell you:
   - If your guess is too high: "Go lower"
   - If your guess is too low: "Go higher"

5. Guess the correct number before running out of lives to win!

6. After each game, you can choose to play again or exit

## Game Rules

- You must enter a number between 1 and 100
- Each incorrect guess costs you one life
- The game ends when you either:
  - Correctly guess the number (WIN)
  - Run out of lives (LOSE)

## Example Gameplay

```
Welcome to the Number Guessing Game!
I'm thinking of a number between 1 and 100.

Choose a difficulty
1. Easy
2. Medium
3. Hard
Enter your choice: 1

You have chosen easy mode, you have 10 lives
Computer has guessed the number between 1 - 100
Enter your guess: 50
Go higher
Enter your guess: 75
Go lower
Enter your guess: 62
You win! You guessed the number in 3 attempts
```

## License

Feel free to use and modify this game as you like!

## Author

Created as a game development project.
