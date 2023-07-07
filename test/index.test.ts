import { CalculateMoves } from '@src/controller/calculateMoves';
import {cliAskQuestion} from '@src/index';

describe('test the initial setup on index file', () => {
	const calc: CalculateMoves = new CalculateMoves();
	afterEach(() => {
		jest.resetModules();
	});

	it('should run the cli and have correct initial setup', () => {
		calc.placeRobotAtCoords(0,0);
		const result = cliAskQuestion(true);
		if(result !== undefined){
			expect (result.robot?.x).toBe(9);
			expect (result.robot?.y).toBe(9);

		} else{
			fail('Expected result to be an object, but received undefined.');

		}
	});

});