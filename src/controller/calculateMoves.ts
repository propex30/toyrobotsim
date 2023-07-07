import {BoardRobot} from './robot';

// take the first word of a command and process accordingly
export class CalculateMoves {
	robot: BoardRobot | null = null;

	processMove(args: string): string[] | string {
		if (!this.robot) {
			return 'Robot Location error';
		}

		const locationMoves: string[] = [];
		const argsArray = args.split(' ');
		argsArray.forEach(arg => {
			const result = this.robot?.moveRobot(arg);
			if (result && typeof result === 'object') {
				locationMoves.push(`robot position is X: ${result.x} Y: ${result.y}`);
			} else if (result && result === 1) {
				locationMoves.push(`Board Edge Reached, position is still X: ${this?.robot?.x} Y: ${this?.robot?.y}`);
			} else if (result && result === 2) {
				locationMoves.push('Not a valid move');
			}
		});
		return locationMoves;

	}

	setRobotGridSize(gridSize: number): BoardRobot | string {
		if (!this.robot) {
			return 'Error: Robot is not set up yet';
		}

		this.robot.MAX_BOARD_INDEX = gridSize - 1;
		return this.robot;
	}

	placeRobotAtCoords(x: number, y: number): BoardRobot {
		return this.robot = new BoardRobot(x, y);
	}
}
