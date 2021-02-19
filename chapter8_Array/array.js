arr1 = [1, 2, 3];
arr1[5] = 8; // [1, 2, 3, undefine, undefine, 8]

const arr88 = new Array(); //создал пустой массив

const arr = ['b', 'c', 'd'];
arr.push('e'); // возвращает 4; теперь arr [b, c, d, e]
arr.pop(); // возвращает e; теперь arr [b, c, d]
arr.unshift('a'); // возвращает 4; теперь arr [a, b, c, d]
arr.shift(); // возвращает a; теперь arr [b, c, d]

const arr = [1, 2, 3];
arr.concat(4, 5, 6); //возвращает [1, 2, 3, 4, 5, 6]; arr неизменён
arr.concat([4, 5, 6]); //возв [[1, 2, 3, 4, 5, 6]; arr неизменен
arr.concat([4, 5], 6); //возвращает [1, 2, 3, 4, 5, 6]; arr неизменён
arr.concat( [4, [5, 6]] ); //возвращает [1, 2, 3, 4, [5, 6]]; arr неизменён

const arr = [1, 2, 3, 4, 5];
arr.slice(3); //возвр [4, 5]; arr неизменен
arr.slice(2, 4); //возвр [3, 4]; arr неизменен
arr.slice(-2); //возвр [4, 5]; arr неизменен
arr.slice(1, -2); //возвр [2, 3]; arr неизменен
arr.slice(-2, -1); //возвр [4]; arr неизменен

const arr = [1, 5, 7];
arr.splice(1, 0, 2, 3, 4); //возвр []; теперь arr [1, 2, 3, 4, 5, 7]
arr.splice(5, 0, 6); //возвр []; теперь arr [1, 2, 3, 4, 5, 6, 7]
arr.splice(1, 2); //возвр [2, 3]; теперь arr [1, 4, 5, 6, 7]
arr.splice(2, 1, 'a', 'b'); //возвр [5]; теперь arr [1, 4,'a', 'b', 6, 7]

const arr = [ 1, 2, 3, 4]; //копирование и вставка в пределах массива
arr.copyWithin(1, 2); // теперь arr [1, 3, 4, 4]
arr.copyWithin(2, 0, 2); // теперь arr [1, 3, 1, 3]
arr.copyWithin(0, -3, -1); // теперь arr [3, 1, 1, 3]

//заполнение массива
const array = new Array(5).fill(1); //arr инициализируется [ 1, 1, 1, 1, 1]
arr.fill('a'); // теперь arr [a, a, a, a, a]
arr.fill('b', 1); // теперь arr [a, b, b, b, b]
arr.fill('c', 2, 4); // теперь arr [a, b, c, c, b]
arr.fill(5.5, 4); // теперь arr [a, 5.5, 5.5, 5.5, 5.5]
arr.fill(0, -3, -1); // теперь arr [a, 5.5, 0, 0, 5.5]

//обращение и сортировка массива
const arr = [1, 2,3, 4, 5];
arr.reverse(); //arr = 5 4 3 2 1 

const arr = [5, 4, 3, 2, 1];
arr.sort(); // arr 1 2 3 4 5

const arr = [{name: 'Suaz'}, {name: 'Jim'}, {name: 'Trevor'}];
arr.sort // ничего не случится
arr.sort((a, b) => a.name > b.name); //алфавитный порядок по св-ву name
arr.sort((a, b) => a.name[1] < b.name[1]); // обратный алфавитный 
//порядок по второму символу в св-ве name
