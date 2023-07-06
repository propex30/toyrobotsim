import {BoardRobot, robotCoords} from './robot';

// take the first word of a command and process accordingly
export class CalculateMoves {
	robot: BoardRobot | null = null;

	processMove(args: string): robotCoords[] | string {
		const locationMoves: robotCoords[] = [];
		const argsArray = args.split(' ');
		if (this.robot) {
			argsArray.forEach(arg => {
				const result	 = this.robot?.moveRobot(arg);
				if(result !== undefined){
					locationMoves.push(result);
				}

			});
			return locationMoves;

		} else {
			return 'Robot Location error';
		}
	}

	placeRobotAtStart(x: number, y: number){
		return this.robot = new BoardRobot(x,y);
	}
}
