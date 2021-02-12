let firstPrime = null;
for (let n of bigArrayOfNumbers) {
    if (isPrime(n) && firstPrime === null) firstPrime = n;
}

// если первое простое число будет вначале, то проделаем лишнюю работу

let firstPrime = null;
for(let n of bigArrayOfNumbers) {
    if(isPrime(n) && firstPrime === 0) {
    firstPrime = n;
    break;
    }
}