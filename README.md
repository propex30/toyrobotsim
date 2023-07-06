# Toy Robot Simulator

The Toy Robot Simulator is a CLI application built in TypeScript. It simulates a robot moving on a 5x5 unit tabletop based on user commands.

## Installation and Setup

1. Clone this repository and navigate into the directory in your terminal.
2. Run `npm install` to install the necessary dependencies.
3. Run `npm run start` to start the application.

## Functionality

The application implements the toy robot simulation with the following commands: `PLACE X,Y,F`, `MOVE`, `LEFT`, `RIGHT`, and `REPORT`. The `PLACE` command puts the toy robot on the table in position `X,Y` and facing `F` (north, south, east, west). The other commands move the robot around and report its current position.

## Code Quality

The codebase follows clean code principles with well-structured, self-descriptive, and easy-to-read code. Constants are used instead of magic numbers to improve code readability. In addition, the project is modularized, splitting functionality across multiple files for better organization and maintenance.

## Testing

The application is tested using Jest. Run `npm run test` to execute the tests. I used a combination of unit and integration tests to ensure all major functionalities are working as expected.

## Problem Solving

The approach to problem-solving in this project involved breaking down the larger problem of the toy robot simulation into smaller, manageable tasks, such as input parsing, handling individual commands, and maintaining the state of the robot.

## Tradeoffs

I decided to use recursion for user input to keep the CLI running and accepting commands. However, if the application was to be scaled or handling an immense amount of commands, this approach may lead to a stack overflow. An iterative approach would be better for handling larger scale applications.

## Future Improvements

With more time, I could have included:
1. More comprehensive test coverage including edge cases.
2. A graphical UI for better user experience.
3. More complex commands for the robot, such as diagonal movement or predefined path following.

## Function Descriptions

1. **`cliAskQuestion()` (in index.ts):**
   This function initiates a recursive loop to constantly take user input and process it as a robot command until the user inputs 'exit', at which point it closes the readline interface.


2. **`processQuery(calc: CalculateMoves, args: string)` (in processQuery.ts):**
   This function takes an instance of `CalculateMoves` and a string as arguments. It calls the `processMove` method on the `CalculateMoves` instance with the string argument, essentially processing the string as a command for the robot.


3. **`processMove(args: string)` (in CalculateMoves class in calculateMoves.ts):**
   This function takes a string of arguments, parses it, and based on the first word of the command, calls the appropriate method on the robot instance (if it exists). The commands can be 'PLACE', 'MOVE', 'LEFT', 'RIGHT', 'REPORT', or any other command that is ignored.


4. **`checkIfAllowedPlacement(x: number, y: number, direction: Direction)` (in CalculateMoves class in calculateMoves.ts):**
   This function checks if the given x and y coordinates, and the direction are valid for placing the robot on the board. It returns a boolean indicating whether the placement is allowed or not.


5. **`moveRobot()` (in BoardRobot class in robot.ts):**
   This function moves the robot one step in the direction it's currently facing, if the move is within the board boundaries. It does not return anything.


6. **`rotateRobot(turn: string)` (in BoardRobot class in robot.ts):**
   This function rotates the robot 90 degrees in the direction specified by the 'turn' argument (either 'LEFT' or 'RIGHT'). The new direction is calculated using an array of the possible directions and the modulus operator, which ensures that the rotation wraps around at the boundaries.
