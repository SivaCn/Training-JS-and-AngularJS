var isPrime = (function (){
    var cache = {};
    function isPrime(n){
        if (typeof cache[n] !== 'undefined')
            return cache[n];
        console.log('processing ', n);
        cache[n] = true;
        for(var index = 2; index <= (n/2); index++){
            if (n % index === 0){
                cache[n] = false;
                break;
            }
        }
        return cache[n];
    }
	return isPrime;
})();