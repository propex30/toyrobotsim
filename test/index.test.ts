import { processQuery } from '@src/controller/processQuery';
import { CalculateMoves } from '@src/controller/calculateMoves';

describe('test the robot query responses', () => {
	const calc: CalculateMoves = new CalculateMoves();
	afterEach(() => {
		jest.resetModules();
	});

	it('should handle bad PLACE Command by ignoring it and returning empty string', () => {

		const testArgs  = 'PLACE 5,3,NORTH';

		// Act
		const result = processQuery(calc, testArgs);

		// Assert
		expect(result).toBe('Bad placement string');
	});

	it('should handle PLACE Command', () => {
		const testArgs  = 'PLACE 2,3,NORTH';
		const result = processQuery(calc, testArgs);
		expect(result).toBe('');
	});

	it('should handle REPORT Command', () => {
		const testArgs1  = 'PLACE 2,3,NORTH';
		processQuery(calc, testArgs1);
		const testArgs2  = 'REPORT';
		const result2 = processQuery(calc, testArgs2);
		expect(result2).toBe('2,3,NORTH');
	});

	it('should handle Multiple PLACE Commands and REPORT', () => {
		const testArgs1  = 'PLACE 2,3,NORTH';
		processQuery(calc, testArgs1);
		const testArgs2  = 'REPORT';

		const result2 = processQuery(calc, testArgs2);
		expect(result2).toBe('2,3,NORTH');

		const testArgs3  = 'PLACE 0,0,WEST';
		processQuery(calc, testArgs3);

		const testArgs4  = 'REPORT';
		const result4 = processQuery(calc, testArgs4);

		expect(result4).toBe('0,0,WEST');

	});

	it('should handle Move Command', () => {

		const testArgs1  = 'PLACE 0,0,NORTH';
		processQuery(calc, testArgs1);

		const testArgs  = 'MOVE';
		processQuery(calc, testArgs);

		const testArgs4  = 'REPORT';
		const result4 = processQuery(calc, testArgs4);
		expect(result4).toBe('0,1,NORTH');

	});

	it('should ignore Move Command that goes off the board', () => {

		const testArgs1  = 'PLACE 4,4,NORTH';
		processQuery(calc, testArgs1);

		const testArgs  = 'MOVE';
		processQuery(calc, testArgs);

		const testArgs4  = 'REPORT';
		const result4 = processQuery(calc, testArgs4);
		expect(result4).toBe('4,4,NORTH');

	});

	it('should handle LEFT Command', () => {

		const testArgs1  = 'PLACE 4,4,NORTH';
		processQuery(calc, testArgs1);

		const testArgs  = 'LEFT';
		processQuery(calc, testArgs);

		const testArgs4  = 'REPORT';
		const result4 = processQuery(calc, testArgs4);
		expect(result4).toBe('4,4,WEST');
	});

	it('should handle RIGHT Command', () => {
		const testArgs1  = 'PLACE 4,4,NORTH';
		processQuery(calc, testArgs1);

		const testArgs  = 'RIGHT';
		processQuery(calc, testArgs);

		const testArgs4  = 'REPORT';
		const result4 = processQuery(calc, testArgs4);
		expect(result4).toBe('4,4,EAST');

		const testArgs6  = 'RIGHT';
		processQuery(calc, testArgs6);

		const testArgs5  = 'REPORT';
		const result5 = processQuery(calc, testArgs5);
		expect(result5).toBe('4,4,SOUTH');
	});


	it('should ignore commands that make it fall off the table', () => {
		const testArgs  = 'PLACE 4,4,NORTH';

		processQuery(calc, testArgs);

		const testArgs2  = 'REPORT';

		const result = processQuery(calc, testArgs2);

		expect(result).toBe('4,4,NORTH');

		const testArgs3  = 'MOVE';

		processQuery(calc, testArgs3);

		const testArgs4  = 'REPORT';

		const result2 = processQuery(calc, testArgs4);
		// result2 is still the same as before as a move north would place the robot off the table
		expect(result2).toBe('4,4,NORTH')

	});

});