for(let i=bigArrayOfNumbers.length-1; i>= 0; i--) {
    if(isPrime(bigArrayOfNumbers[i])) bigArrayOfNumbers.splice(i, 1);
}