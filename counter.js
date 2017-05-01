const pureCli = require('./pure-cli');

function reducer(state, input) {
 if (state === null) {
   return 0;
 }
 else if(state != null) {
   if(input === '+') {
     return (state + 1);
   }
   else if(input === '-') {
     return (state - 1)
   }
   else if(input === 'q') {
	   return ('end');
   }
   else if(input != NaN) {
     return (state * input);
   }

   else {
	   return state;
   }
 }
}

module.exports = reducer;

function display(state) {
 console.log(state);
}

if (require.main === module) {
 pureCli(reducer, display);
}

// [4:00]
// This is the code for counter.js
