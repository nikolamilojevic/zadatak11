var a = 'var from app.js';
let b = 'let from app.js';

var myVars = function() {
	var e = 'var from inside anonymous function';
	var h = 'let from inside anonymous function';
	console.log(a);
	console.log(b);
	console.log(c);
	// console.log(d);
	console.log(e);
	console.log(f);
	// console.log(g);
	console.log(h);
}

myVars();

