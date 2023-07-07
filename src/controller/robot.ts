import {BOARD_EDGE_INDICATOR, Direction, INVALID_MOVE_INDICATOR, RobotCoords} from '../types/types'

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
				return BOARD_EDGE_INDICATOR;
			}
			break;
		case Direction.E:
			if (this.x < this.MAX_BOARD_INDEX) {
				this.x++;
			} else {
				return BOARD_EDGE_INDICATOR;
			}
			break;
		case Direction.S:
			if (this.y > this.MIN_BOARD_INDEX) {
				this.y--;
			} else {
				return BOARD_EDGE_INDICATOR;
			}
			break;
		case Direction.W:
			if (this.x > this.MIN_BOARD_INDEX) {
				this.x--;
			} else {
				return BOARD_EDGE_INDICATOR;
			}
			break;
		default:
			return INVALID_MOVE_INDICATOR;
		}

		return { x: this.x, y: this.y };
	}
}
