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
			for(var i=0; i < products.length-1; i++)
				for(var j=i+1; j < products.length; j++)
					if (products[i].id > products[j].id){
						var temp = products[i];
						products[i] = products[j];
						products[j] = temp;
					}
		}
		sort();
		console.table(products);
	});

	//Final sort version
	function sort(list, comparer){
		var comparerFn = function(){ return 0; };
		if (typeof comparer === 'function')
			comparerFn = comparer;
		if (typeof comparer === 'string')
			comparerFn = function(item1, item2){
				if (item1[comparer] > item2[comparer]) return 1;
				if (item1[comparer] < item2[comparer]) return -1;
				return 0
			};

		for(var i=0; i < list.length-1; i++)
			for(var j=i+1; j < list.length; j++)
				if (comparerFn(list[i], list[j]) > 0){
					var temp = list[i];
					list[i] = list[j];
					list[j] = temp;
				}
	}
	describe('Any list by any attribute', function(){
		/*function sort(list, attrName){
			for(var i=0; i < list.length-1; i++)
				for(var j=i+1; j < list.length; j++)
					if (list[i][attrName] > list[j][attrName]){
						var temp = list[i];
						list[i] = list[j];
						list[j] = temp;
					}
		}*/
		describe('Products by cost', function(){
			sort(products, 'cost');
			console.table(products);
		});

		describe('Products by units', function(){
			sort(products, 'units');
			console.table(products);
		});
	});

	describe('Any list by any comparer', function(){
		/*function sort(list, comparerFn){
			for(var i=0; i < list.length-1; i++)
				for(var j=i+1; j < list.length; j++)
					if (comparerFn(list[i], list[j]) > 0){
						var temp = list[i];
						list[i] = list[j];
						list[j] = temp;
					}
		}*/
		describe('Products by value [cost * units]', function(){
			var productComparerByValue = function(p1, p2){
				var p1Value = p1.cost * p1.units,
					p2Value = p2.cost * p2.units;
				if (p1Value < p2Value) return -1;
				if (p1Value > p2Value) return 1;
				return 0;
			}

			sort(products, productComparerByValue);
			console.table(products);
		});

		
	});
});

describe('Filter', function(){
	describe("All stationary products", function(){
		function filterStationaryProducts(){
			var result = [];
			for(var index = 0; index < products.length; index++){
				if (products[index].category === 'stationary')
					result.push(products[index]);
			}
			return result;
		}
		var stationaryProducts = filterStationaryProducts();
		console.table(stationaryProducts);
	});

	describe('Any list by any criteria', function(){
		function filter(list, criteriaFn){
			var result = [];
			for(var index = 0; index < list.length; index++){
				if (criteriaFn(list[index]))
					result.push(list[index]);
			}
			return result;
		}

		function negate(criteriaFn){
			return function(){
				return !criteriaFn.apply(this, arguments);
			}
		}


		var isStationaryProduct = function(product){
			return product.category === 'stationary';
		};
		describe('All stationary products [category === "stationary"]', function(){
			
			var stationaryProducts = filter(products, isStationaryProduct);
			console.table(stationaryProducts);
		});
		describe('All non stationary products [category !== "stationary"]', function(){
			/*var isNotStationaryProduct = function(product){
				return !isStationaryProduct(product);
			};*/

			var isNotStationaryProduct = negate(isStationaryProduct);

			var nonStationaryProducts = filter(products, isNotStationaryProduct);
			console.table(nonStationaryProducts);
		});


		var isCostlyProduct = function(product){
			return product.cost > 50;
		};

		describe('All costly products [cost > 50]', function(){
			
			var costlyProducts = filter(products, isCostlyProduct);
			console.table(costlyProducts);
		})

		describe('All affordable products [cost <= 50]', function(){
			/*var isAffordableProduct = function(product){
				//return product.cost <= 50;
				return !isCostlyProduct(product);
			};*/

			var isAffordableProduct = negate(isCostlyProduct);

			var affordableProducts = filter(products, isAffordableProduct);
			console.table(affordableProducts);
		})
	})
})                    






























































