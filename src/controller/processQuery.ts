import { CalculateMoves } from './calculateMoves';

export function processQuery(calc: CalculateMoves, args: string): string[] | string  {
	return calc.processMove(args);
}