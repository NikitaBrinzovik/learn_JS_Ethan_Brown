let name = 'Irena';
let age = 25;
function greet(name) {console.log(`Hello! My name is ${name}`)};
function getBirthYear() {return new Date().getFullYear() - age;};

//лучше сделать так:
let user = {
    name: 'Irena',
    age: 25,
}
function greet() {
    console.log(`Hello, my name is ${user.name}!`)
}
function getBirthYear() {
    return new Data().getFullYear() -user.age;
}
// НИЧЕГО НЕ ПОНЯЛ, но в учебнике написанно, что так лучше!(см. следующие строчки)
// Типа теперь можно вызвать из любой области видимости, но оно не работает...
function greet(user) {
    console.log(`Hello, my name is ${user.name}!`)
}
function getBirthYear(user) {
    return new Data().getFullYear() -user.age;
}
