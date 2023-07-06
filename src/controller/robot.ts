export enum Direction {
	NORTH = 'NORTH',
	EAST = 'EAST',
	SOUTH = 'SOUTH',
	WEST = 'WEST'
}

type TurnDirection = 'LEFT' | 'RIGHT';

export class BoardRobot {
	x: number;
	y: number;
	direction: Direction;

	private readonly MAX_BOARD_INDEX = 4;
	private readonly MIN_BOARD_INDEX = 0;
	private readonly NUM_DIRECTIONS = 4;

	constructor(x: number, y: number, direction: Direction) {
		this.x = x;
		this.y = y;
		this.direction = direction;
	}

	// We only allow movement in the direction specified if our current location is not already on the edge of the board, last row or column for that coordinate (min or max board index)
	moveRobot(): void {
		switch(this.direction){
		case Direction.NORTH:
			if(this.y < this.MAX_BOARD_INDEX){
				this.y++;
			}
			break;
		case Direction.EAST:
			if(this.x < this.MAX_BOARD_INDEX){
				this.x++;
			}
			break;
		case Direction.SOUTH:
			if(this.y > this.MIN_BOARD_INDEX){
				this.y--;
			}
			break;
		case Direction.WEST:
			if(this.x > this.MIN_BOARD_INDEX){
				this.x--;
			}
			break;
		}
	}

	/** turn within the points of a compass clockwise or anticlockwise constraining to 0 - 3 as indexes
	 * we turn the direction into an indexed array to represent the points of a compass with a numbered basis
	 * then we minus or add one to that index to do the rotation constraining to < 4, so it wraps to the beginning
	 */
	rotateRobot(turn: TurnDirection): void {
		const directions = Object.values(Direction);
		const index = directions.indexOf(this.direction);

		if(turn === 'LEFT') {
			this.direction = directions[(index + this.NUM_DIRECTIONS - 1) % this.NUM_DIRECTIONS] as Direction;
		} else{
			this.direction = directions[(index + 1) % this.NUM_DIRECTIONS] as Direction;
		}
	}
}
