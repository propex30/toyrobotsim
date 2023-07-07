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

	setRobotGridSize(gridSize: number):BoardRobot | string {
		console.log(this.robot)
		if(this.robot){
			this.robot.MAX_BOARD_INDEX = gridSize - 1;
		}else{
			return 'Error: Robot is not set up yet'
		}
		return this.robot
	}

	placeRobotAtCoords(x: number, y: number){
		return this.robot = new BoardRobot(x,y);
	}
}
