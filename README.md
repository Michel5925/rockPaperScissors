# Rock Paper Scissors

A JavaScript implementation of the classic **Rock Paper Scissors** game, built as part of my JavaScript learning journey.

The game allows a player to compete against a computer-generated choice across **5 rounds**, with the player's and computer's scores tracked throughout the game.

## Features

* Rock, Paper and Scissors choices
* Randomly generated computer choices
* Five-round game
* Win and loss detection
* Draw detection
* Player and computer score tracking
* Case-insensitive player input
* Console-based game output

## Technologies

* **HTML5** — Page structure
* **CSS3** — Styling and layout
* **JavaScript** — Game logic and score tracking

## What I Learned

This project helped me develop my understanding of:

* JavaScript functions
* Variables and program state
* `if` / `else if` conditional logic
* `for` loops
* Random number generation with `Math.random()`
* User input with `prompt()`
* String methods such as `toLowerCase()`
* Incrementing and tracking scores
* Creating reusable functions
* Structuring game logic

## How It Works

The computer randomly selects one of three choices:

```text
Rock
Paper
Scissors
```

The player enters their choice when prompted.

Each round compares the player's choice with the computer's choice:

* Rock beats Scissors
* Paper beats Rock
* Scissors beats Paper
* Matching choices result in a draw

The game runs for **5 rounds**, updating the player's or computer's score after each round. At the end, the final scores are displayed in the browser console.

## Scoring

The game maintains two scores:

```javascript
let humanScore = 0;
let computerScore = 0;
```

A winning round increments the appropriate score, while a draw leaves both scores unchanged.

## What This Project Demonstrates

This project was an early step in learning how **JavaScript can add logic and interactivity to a webpage**.

It helped me move from basic HTML and CSS into writing JavaScript programs that accept user input, make decisions, generate random values and maintain state throughout a program.

---

Built as part of my **JavaScript learning journey**.
