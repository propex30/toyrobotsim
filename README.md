# Toy Robot Simulator

The Toy Robot Simulator is a CLI application built in TypeScript. It simulates a robot moving on a GRID based on user commands.

## Installation and Setup

1. Clone this repository and navigate into the directory in your terminal.
2. Run `npm install` to install the necessary dependencies.
3. Run `npm run start` to start the application.

## Functionality

The Grid can be set to any Square size by user input

The application implements the toy robot simulation movement with the following commands: 'N', 'E', 'S', 'W' and can process a series of commands on one line provided they are seperated by spaces.

The application will provide feedback on the robots current positioning and when it reaches the edge of board.

If user input is not a direction it will provide feedback on the bad command ("Not a valid move')

The application can also be exited by typing "exit" at any time.

## Code Quality

The codebase follows clean code principles with well-structured, self-descriptive, and easy-to-read code. Constants are used instead of magic numbers to improve code readability. 

## Testing

The application is tested using Jest. Run `npm run test` to execute the tests. I used a combination of unit and integration tests to ensure all major functionalities are working as expected.

## Problem Solving

The approach to problem-solving in this project involved breaking down the larger problem of the toy robot simulation into smaller, manageable tasks, such as input parsing, handling individual commands, and maintaining the state of the robot.

## Tradeoffs

I decided to use recursion for user input to keep the CLI running and accepting commands. However, if the application was to be scaled or handling an immense amount of commands, this approach may lead to a stack overflow. An iterative approach would be better for handling larger scale applications.

Each robot has a grid assigned which does mean we have to set up the robot before the grid which feels a bit clunky, given more time i'm be tempted to break this off into its own class.

Would have made the commands case insensitive with a bit more time.

Would have like to include a few more unit tests to test some of the edge cases and error handling.

We currently just start the robot in the bottom left hand corner, but I did include a coord function so it can be started from anywhere which could be useful later. 