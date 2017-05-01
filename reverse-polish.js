const pureCli = require('./pure-cli');

function reducer(state, input) {
	if (state === null) {
		return ({ stack: [ ]});
	}
	else if (input === '+'){
		let poop = state.stack.length;
		var sliced = state.stack.slice(0, poop-2)
		poop2 = parseInt(state.stack.slice(poop-1)) + parseInt(state.stack.slice(poop-2))
		return {stack: sliced.concat([poop2])};
	}
	else if (input === '-'){
		let poop = state.stack.length;
		var sliced = state.stack.slice(0, poop-2)
		poop2 = parseInt(state.stack.slice(poop-1)) - parseInt(state.stack.slice(poop-2))
		return {stack: sliced.concat([poop2])};
	}
	else if (input === '*'){
		let poop = state.stack.length;
		var sliced = state.stack.slice(0, poop-2)
		poop2 = parseInt(state.stack.slice(poop-1)) * parseInt(state.stack.slice(poop-2))
		return {stack: sliced.concat([poop2])};
	}
	else if (input === '/'){
		let poop = state.stack.length;
		var sliced = state.stack.slice(0, poop-2)
		poop2 = parseInt(state.stack.slice(poop-1)) / parseInt(state.stack.slice(poop-2))
		return {stack: sliced.concat([poop2])};
	}
	else if (input === 'q'){
		return{
			stack: state.stack,
			action: 'end'
		}
	}
	else if (input !== NaN){
		let new_stack = state.stack.concat([parseInt(input)]);
		return {stack: new_stack};
	}


}


module.exports = reducer;

function display(state) {
  console.log(state.stack.join(' '));
}

if (require.main === module) {
  pureCli(reducer, display);
}
