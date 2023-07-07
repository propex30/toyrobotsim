import {processQuery} from '@src/controller/processQuery';
import {CalculateMoves} from '@src/controller/calculateMoves';

describe('test the robot query responses', () => {
	const calc: CalculateMoves = new CalculateMoves();
	afterEach(() => {
		jest.resetModules();
	});


	it('should handle Multiple PLACE Commands and REPORT position', () => {
		const testArgs1 = 'N E N E N E N E';
		const result4 = processQuery(calc, testArgs1);

		expect(result4).toBe('Position is 4,4');

	});

	it('should report back on Commands that make the robot go off the board', () => {

		const testArgs1 = 'N N W N';
		const result4 = processQuery(calc, testArgs1);
		expect(result4).toBe('ROBOT went off Board on command 3 (W) of N N W');

	});

});