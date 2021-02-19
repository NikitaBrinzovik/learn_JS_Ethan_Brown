//    CALL
const bruce = { name: 'Bruce' };
const madeline = { name: 'Madeline' };
//this function doesn't touched with any object, but we use 'THIS'
function greet() {
    return `Привет! Меня зовут ${this.name}!`;
}
greet() // ПРивет! меня зовут ! - this не привязана
greet.call(bruce) ; // привет! меня зовут Bruce - 'this'  привяз к брюс
greet.call(madeline) ; // привет! меня зовут madeline - привяз madeline


function update(birthYear, occupation) {
    this.birthYear = birthYear;
    this.occupation = occupation;
}
update.call(bruce, 1949, 'singer');
update.call(madeline, 1942, 'actress');

//APPLY

update.apply(bruce, [1955, 'actor']);
//bruce теперь { name: 'Bruce', birthYear: 1955, occupation: 'actor'}
update.apply(madeline, [1918, 'writer']);

const arr = [2, 3, -5, 15, 7];
Math.min.apply(null, arr); // тут вместо this стоит null так как в функцие
Math.max.apply(null, arr); // Math.max and Math.min не используется this вообще

const newBruce = [1940, 'martial artist'];
update.call(bruce, ...newBruce); //эквивалент apply(bruce, newBruce)
Math.min(...arr);
Math.max(...arr);

//BIND

const updateBruce = update.bind(bruce);

updateBruce(1904, 'actor');
//bruce теперь name; bruce, birthYear: 1904, occupation: 'actor'
updateBruce.call(madeline, 1274, 'king');
//bruce теперь  name:Bruce, birthYear: 1274, occupation: 'king'
//madeline не было присвоенно!!!!

const updateBruce1949 =update.bind(bruce, 1949);
updateBruce1949('singer, writer');