//indexOf and lastIndexOf

const o = {name: 'jerry'};
const arr = [1, 5, 'a', o, true, 5, [1, 2], '9'];
arr.indexOf(5);        //возвращает 1 (индекс элемента, строго равный искоммоу элементу)
arr.lastIndexOf(5);    //возвращает 5
arr.indexOf('a');      //возвращает 2
arr.lastIndexOf('a');  //возвращает 2
arr.indexOf({name: 'Jerry'}); //возвращает -1 (значит совпадений не найдено)
arr.indexOf(o);               // возвращает 3
arr.indexOf([1, 2]);          //возвращает -1
arr.indexOf('9');             //возвращает 7
arr.indexOf(9);               //возвращает -1
arr.indexOf('a', 5);          //возвращает -1
arr.indexOf(5, 5);            //возвращает 5
arr.lastIndexOf(5, 4);        //возвращает 1
arr.lastIndexOf(true, 3);     //возвращает -1
 
//findIndex
const arr1 = [{ id: 5, name: "Jud"}, {id: 7, name: "Francis"}];
arr1.findIndex(o => o.id === 5);            //возвращает 0
arr1.findIndex(o => o.name === "Francis");  //возвращает 1
arr1.findIndex(o => o === 3);               //возвращает -1
arr1.findIndex(o => o.id === 17);           //возвращает -1

//find - возвращает сам элемент, а не индекс
const arr2 = [{ id: 5, name: "Jud"}, {id: 7, name: "Francis"}];
arr2.find(o => o.id === 5); //возвращает { id: 5, name: "Jud"}
arr2.find(o => o.id === 2); //возвращает null

const arr3 = [1, 17, 16, 5, 4, 16, 10, 3, 49];
arr.find((x, i) => i > 2 && Number.isInteger(Math.sqrt(x))); //возвращает 4
//console.log вернул true... может позже пойму

class Person {
    constructor(name) {
        this.name = name;
        this.id = Person.nextId++;
    }
}
Person.nextId = 0;
const jamie = new Person('Jamie'),
    juliet = new Person('Juliet'),
    peter = new Person('Peter'),
    jay = new Person ('Jay'),
const arr = [jamie, juliet, peter, jay];
//возможность1: прямое сравнение идентификатора:
arr.find(p=> p.id === juliet.id); //возвращает объект juliet
//возможность 2: использование аргумента 'this':
arr.find( p => p.id === this.id, juliet); //возвращает объект juliet

const arr = [4, 6, 16, 36];
arr.every(x => x%2===0); //trye; нет нечётных чисел
arr.every(x => Number.isInteger(Math.sqrt(x))); // false; 6-не квадрат

const arr = [5, 7, 12, 15, 17];
arr.some(x => x%2===0); // true; 12 чётно
arr.some(x => Number.isInteger(Math.sqrt(x))); // false; нет квадратов
