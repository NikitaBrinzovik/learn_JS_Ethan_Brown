
function getGreeting() {
    return 'Hello world!';
}


const arr =[1, 2, 3];
arr[1] = getGreeting;
arr[1] ();

function getSentence({ subject, verb, object }) {
    return `${subject} ${verb} ${object}`;
}
const o = {
    subject: 'I',
    verb: 'love',
    object: 'JavaScript',
}

getSentence(o);

//можно и деструктурировать массив

function getSentence([ subject, verb, object ]) {
    return `${subject} ${verb} ${object}`;
}

const arr = [ 'I', 'love', 'JavaScript' ];
getSentence(arr);

//оператор расширения(...) для сбора любых доп аргументов

function addPrefix(prefix, ...words) {
    //это не самый лучший способ
    const prefixedWords = [];
    for(let i=0; i<words.length; i++) {
        prefixedWords[i] = prefix + words[i];
    }
    return prefixedWords;
}
addPrefix('con', 'verse', 'vex'); //'converse and convex


function f(a, b = 'default', c = 3) {
    return `${a} - ${b} - ${c}`;
}
f(5, 6, 7); //'5-6-7'
f(5, 6) ; //'5-6-3'
f(5) ; // ' 5-default-3'
f(); //'undefined-default-3'


const o2 = {
    name: "wal", ////свойство базового типа
    bark: function() { return 'Woof!'; } //свойство функции метод
}
// можно короче
const o3 = {
    name: 'Wal',
    bark() {return 'Woof!';},
}




