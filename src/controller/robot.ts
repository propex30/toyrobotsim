export enum Direction {
	N = 'N',
	E = 'E',
	S = 'S',
	W = 'W'
}

export class BoardRobot {
	x: number;
	y: number;
	direction: Direction;

	private readonly MAX_BOARD_INDEX = 4;
	private readonly MIN_BOARD_INDEX = 0;

	constructor(x: number, y: number, direction: Direction) {
		this.x = x;
		this.y = y;
		this.direction = direction;
	}

	// We only allow movement in the direction specified if our current location is not already on the edge of the board, last row or column for that coordinate (min or max board index)
	moveRobot(): void {
		switch(this.direction){
		case Direction.N:
			if(this.y < this.MAX_BOARD_INDEX){
				this.y++;
			}
			break;
		case Direction.E:
			if(this.x < this.MAX_BOARD_INDEX){
				this.x++;
			}
			break;
		case Direction.S:
			if(this.y > this.MIN_BOARD_INDEX){
				this.y--;
			}
			break;
		case Direction.W:
			if(this.x > this.MIN_BOARD_INDEX){
				this.x--;
			}
			break;
		}
	}
}
