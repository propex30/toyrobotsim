import { CalculateMoves } from './calculateMoves';
import {robotCoords} from '@src/controller/robot'; // adjust the path to match the location of your file

export function processQuery(calc: CalculateMoves, args: string): robotCoords[] | string  {
	return calc.processMove(args);
}