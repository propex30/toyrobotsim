import {CalculateMoves} from '@src/controller/calculateMoves';


describe('test the robot query responses', () => {
	const calc: CalculateMoves = new CalculateMoves();
	afterEach(() => {
		jest.resetModules();
	});

	it('should set a starting grid of 10 x 10', () => {
		//needed so we have a robot to assign the grid tox
		calc.placeRobotAtCoords(0, 0);
		const result = calc.setRobotGridSize(10);
		if(typeof result !== 'string'){
			expect(result.MAX_BOARD_INDEX).toBe(9);
			expect(result.MAX_BOARD_INDEX).toBe(9);

		}else {
			fail('Expected result to be an object, but received a string.');
		}

	});

	it('should set a starting place for the robot in south west corner', () => {
		const result = calc.placeRobotAtCoords(0, 0);
		expect(typeof result).toBe('object');
		expect(result.x).toBe(0);
		expect(result.y).toBe(0);
	});

});