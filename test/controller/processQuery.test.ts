import {processQuery} from '@src/controller/processQuery';
import {CalculateMoves} from '@src/controller/calculateMoves';

describe('test the robot query responses', () => {
	const calc: CalculateMoves = new CalculateMoves();
	afterEach(() => {
		jest.resetModules();
	});


	it('should handle Multiple Direction Commands to move to the centre of the board and report position in the case of a 10 grid board', () => {
		calc.placeRobotAtCoords(0,0);
		calc.setRobotGridSize(10);
		const testArgs1 = 'N E N E N E N E';
		const result = processQuery(calc, testArgs1);

		expect(result[7]).toBe('robot position is X: 4 Y: 4');

	});

	it('should report back on Commands that make the robot go off the board', () => {
		calc.placeRobotAtCoords(0,0);
		const testArgs1 = 'N N W';
		const result = processQuery(calc, testArgs1);
		expect(result[2]).toBe('Board Edge Reached, position is still X: 0 Y: 2');
		const testArgs2 = 'N N N N N N N N N N N N';
		const result2 = processQuery(calc, testArgs2);
		expect(result2[6]).toBe('robot position is X: 0 Y: 9');
		expect(result2[7]).toBe('Board Edge Reached, position is still X: 0 Y: 9');

	});

});