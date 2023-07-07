import { CalculateMoves } from '@src/controller/calculateMoves';

export function processQuery(calc: CalculateMoves, args: string): string[] | string  {
	return calc.processMove(args);
}