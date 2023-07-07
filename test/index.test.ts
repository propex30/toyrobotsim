import { CalculateMoves } from '@src/controller/calculateMoves';
import {cliAskQuestion} from '@src/index';

describe('test the robot query responses', () => {
	const calc: CalculateMoves = new CalculateMoves();
	afterEach(() => {
		jest.resetModules();
	});

	it('should run the cli and have correct initial setup', () => {
		calc.placeRobotAtCoords(0,0);
		cliAskQuestion(true);
	});

	it('should set a starting grid of 10 x 10', () => {

	});

});