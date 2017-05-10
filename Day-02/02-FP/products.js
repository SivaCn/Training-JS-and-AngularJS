var products = [
	{id : 9, name : 'Pen', cost : 80, units : 40, category : 'stationary'},
	{id : 4, name : 'Len', cost : 60, units : 20, category : 'grocery'},
	{id : 6, name : 'Ten', cost : 50, units : 90, category : 'grocery'},
	{id : 3, name : 'Den', cost : 40, units : 50, category : 'stationary'},
	{id : 5, name : 'Zen', cost : 70, units : 70, category : 'stationary'},
]

/*
sort
filter
all
any
groupBy
*/

function describe(title, fn){
	console.group(title);
	fn();
	console.groupEnd();
}

describe('Default List', function(){
	console.table(products);
});

describe('Sort', function(){
	describe('default sort [Products by id]', function(){
		function sort(){

		}
		sort();
		console.table(products);
	});

	describe('Any list by any attribute', function(){
		function sort(/**/){

		}
		describe('Products by cost', function(){
			//sort();
			console.table(products);
		});

		describe('Products by units', function(){
			//sort();
			console.table(products);
		});
	});
});








































