import * as readline from 'readline';
import {processQuery} from './controller/processQuery';
import {CalculateMoves} from './controller/calculateMoves';
import {BoardRobot} from './controller/robot';

const rl = readline.createInterface({
	input: process.stdin,
	output: process.stdout
});

const startGridX = 0;
const startGridY = 0;


const calc: CalculateMoves = new CalculateMoves();


export function cliAskQuestion() {
	rl.question('Robot Controller: Please enter Your move: ', (answer) => {
		if(answer.toLowerCase() === 'exit'){
			rl.close();
		} else {
			const response: string | BoardRobot | null = processQuery(calc, answer);
			if(response){
				console.log(response);
			}
			cliAskQuestion();  // recursion here
		}
	});
}
calc.placeRobotAtStart(startGridX,startGridY)
cliAskQuestion(); // initial call