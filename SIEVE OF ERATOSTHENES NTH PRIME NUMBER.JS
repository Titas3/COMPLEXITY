function SieveOfEratosthenes(primes) {
	var IsPrime = Array(MAX_SIZE).fill(true);
  
	var p, i;
	for (p = 2; p * p < MAX_SIZE; p++) {
  
	  if (IsPrime[p] == true) {
  
		for (i = p * p; i < MAX_SIZE; i += p)
		  IsPrime[i] = false;
	  }
	}
	for (p = 2; p < MAX_SIZE; p++)
	  if (IsPrime[p]== true) {
		  
		primes.push(p);

	  }
  }
  
  var N = 9;
  var primes = [];
  var MAX_SIZE = 1000001;
  // Function call
  SieveOfEratosthenes(primes);
  
  console.log(N +
	"th prime number is " + primes[N - 1]
  );
  