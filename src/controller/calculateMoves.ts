import {BoardRobot} from './robot';

// take the first word of a command and process accordingly
export class CalculateMoves {
	robot: BoardRobot | null = null;
	processMove(args: string): string | null {

		const argsArray = args.split(' ');

		return this.robot?.moveRobot();

	}
}
