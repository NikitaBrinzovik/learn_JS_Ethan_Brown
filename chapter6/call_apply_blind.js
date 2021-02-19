//    CALL
const bruce = { name: 'Bruce' };
const madeline = { name: 'Madeline' };
//this function doesn't touched with any object, but we use 'THIS'
function greet() {
    return `Привет! Меня зовут ${this.name}!`;
}
greet() // ПРивет! меня зовут ! - this не привязана
getGreeting.call(bruce) ; // привет! меня зовут Bruce - 'this'  привяз к брюс
getGreeting.call(madeline) ; // привет! меня зовут madeline - привяз madeline


function update(birthYear, occupation) {
    this.birthYear = birthYear;
    this.occupation = occupation;
}
update.call(bruce, 1949, 'singer');
update.call(madeline, 1942, 'actress');