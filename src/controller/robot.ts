export enum Direction {
	N = 'N',
	E = 'E',
	S = 'S',
	W = 'W'
}

export type RobotCoords = {
	x: number,
	y: number
}

export class BoardRobot {
	x: number;
	y: number;

	public MAX_BOARD_INDEX = 9;
	public MIN_BOARD_INDEX = 0;

	constructor(x: number, y: number) {
		this.x = x;
		this.y = y;
	}

	// We only allow movement in the direction specified if our current location is not already on the edge of the board, last row or column for that coordinate (min or max board index)
	moveRobot(direction: string): RobotCoords | number {
		switch (direction) {
		case Direction.N:
			if (this.y < this.MAX_BOARD_INDEX) {
				this.y++;
			} else {
				return 1; // Board edge indicator
			}
			break;
		case Direction.E:
			if (this.x < this.MAX_BOARD_INDEX) {
				this.x++;
			} else {
				return 1; // Board edge indicator
			}
			break;
		case Direction.S:
			if (this.y > this.MIN_BOARD_INDEX) {
				this.y--;
			} else {
				return 1; // Board edge indicator
			}
			break;
		case Direction.W:
			if (this.x > this.MIN_BOARD_INDEX) {
				this.x--;
			} else {
				return 1; // Board edge indicator
			}
			break;
		default:
			return 2; // Not a valid move indicator
		}

		return { x: this.x, y: this.y };
	}
}
