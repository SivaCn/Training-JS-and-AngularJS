function Employee(id, name, salary){
	//Assumption - this function will be invoked with 'new'
	//so, this -> new object;
	
	this.id = id;
	this.name = name;
	this.salary = salary;
	
	this.display = function(){
		console.log(this.id, this.name, this.salary);
    }

	//and, this -> returned by default
}

function Employee(id, name, salary){
	//Assumption - this function will be invoked with 'new'
	//so, this -> new object;
	
	this.id = id;
	this.name = name;
	this.salary = salary;

	//and, this -> returned by default
}

Employee.prototype.display = function(){
	console.log(this.id, this.name, this.salary);
}