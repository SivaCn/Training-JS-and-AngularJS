function add(x,y){
	function parseArg(n){
		if (Array.isArray(n)) return add.apply(this, n);
		if (typeof n === 'function') return parseArg(n());
		return isNaN(n) ? 0 : parseInt(n,10);
	}
	return arguments.length <= 1 ? parseArg(arguments[0]) : parseArg(arguments[0]) + add([].slice.call(arguments, 1));
}

//As a method of an obj
//	this -> obj

//As a function
//	this -> global scope (window)

//Using the call() of the function

//Using the apply() of the function

/*sum(10,20,30,40)
	return 10 + sum(20,30,40)
			return 20 + sum(30,40)
					return 30 + sum(40)
							return 40*/






















