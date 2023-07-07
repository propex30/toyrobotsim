import * as readline from 'readline';
import {processQuery} from './controller/processQuery';
import {CalculateMoves} from './controller/calculateMoves';
import {robotCoords} from './controller/robot';

const rl = readline.createInterface({
	input: process.stdin,
	output: process.stdout
});

const startGridX = 0;
const startGridY = 0;


const calc: CalculateMoves = new CalculateMoves();


export function cliAskQuestion(test: boolean) {
	if(test){
		console.log(calc)
		return;
	}
	rl.question('Robot Controller: Please enter Your move: ', (answer) => {
		if(answer.toLowerCase() === 'exit'){
			rl.close();
		} else {
			const response: robotCoords[] | string  = processQuery(calc, answer);
			if(response){
				console.log(response);
			}
			cliAskQuestion(false);  // recursion here
		}
	});
}


export function cliAskGridQuestion(test: boolean, feedback: string | null) {
	if(test){
		console.log(calc)
		return;
	}
	rl.question(`${feedback ?? ''}Please enter Your grid size: e.g "10" \n`, (answer) => {
		if(answer.toLowerCase() === 'exit'){
			rl.close();
		} else {
			// if we don't get a number back get the user to try again
			const answerNumber: number = +answer.trim();
			if(answer && !isNaN(answerNumber)){
				const gridResponse = calc.setRobotGridSize(+answer.trim());
				if(typeof gridResponse === 'string'){
					// log to console/user if we get error string back due to robot not set up
					console.log(gridResponse)
				}else {
					console.log(`Grid set up to ${answerNumber} x ${answerNumber}`)
				}

			}else {
				cliAskGridQuestion(false, 'that\'s not a number try 5 or 10 ');
			}
			cliAskQuestion(false);
		}


	});
}

calc.placeRobotAtCoords(startGridX, startGridY);
cliAskGridQuestion(false,null);