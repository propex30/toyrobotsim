export enum Direction {
	N = 'N',
	E = 'E',
	S = 'S',
	W = 'W'
}

export interface RobotCoords {
	x: number;
	y: number;
}

export const BOARD_EDGE_INDICATOR = 1;
export const INVALID_MOVE_INDICATOR = 2;