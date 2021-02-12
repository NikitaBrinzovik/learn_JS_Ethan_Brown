let i = 0;
for(; i < bigArrayOfNumbers.length; i++) {
    if(isPrime(bigArrayOfNumbers[i])) break;
}
if(i === bigArrayofNumbers.length) console.log('Нет простых чисел!');
else console.log(`Первое простое число находится в ${i} элементе массива.`);
