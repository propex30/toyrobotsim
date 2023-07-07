# Toy Robot Simulator

The Toy Robot Simulator is a CLI application built in TypeScript. It simulates a robot moving on a GRID based on user commands.

## Installation and Setup

1. Clone this repository and navigate into the directory in your terminal.
2. Run `npm install` to install the necessary dependencies.
3. Run `npm run start` to start the application.

## Functionality

The application implements the toy robot simulation with the following commands: 'N', 'E', 'S', 'W' and can process a series of commands on one line provided they are seperated by spaces.

## Code Quality

The codebase follows clean code principles with well-structured, self-descriptive, and easy-to-read code. Constants are used instead of magic numbers to improve code readability. 

## Testing

The application is tested using Jest. Run `npm run test` to execute the tests. I used a combination of unit and integration tests to ensure all major functionalities are working as expected.

## Problem Solving

The approach to problem-solving in this project involved breaking down the larger problem of the toy robot simulation into smaller, manageable tasks, such as input parsing, handling individual commands, and maintaining the state of the robot.

## Tradeoffs

I decided to use recursion for user input to keep the CLI running and accepting commands. However, if the application was to be scaled or handling an immense amount of commands, this approach may lead to a stack overflow. An iterative approach would be better for handling larger scale applications.
Each robot has a grid assigned which does mean we have to set up the robot before the grid which feels, give more time i'm be tempted to break this off into its own class.
Would have made the comamnds case insensitive with a bit more time.


## Function Descriptions

1. **`cliAskQuestion()` (in index.ts):**
   This function initiates a recursive loop to constantly take user input and process it as a robot command until the user inputs 'exit', at which point it closes the readline interface.


2. **`processQuery(calc: CalculateMoves, args: string)` (in processQuery.ts):**
   This function takes an instance of `CalculateMoves` and a string as arguments. It calls the `processMove` method on the `CalculateMoves` instance with the string argument, essentially processing the string as a command for the robot.


3. **`processMove(args: string)` (in CalculateMoves class in processQuery.test.ts):**
   needs updating

4. **`moveRobot()` (in BoardRobot class in robot.ts):**
   This function moves the robot in one of the 4 cardinal directions, if the move is within the board boundaries. It does not return anything.
