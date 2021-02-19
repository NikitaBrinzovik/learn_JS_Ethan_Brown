//Маскировка переменной
{
    let x = 5;
    console.log(x);
    {
        let x = 'blue';
        console.log(x);
    }
    console.log(x);
}
console.log(x);

{
    let x = {col: 'Green'};
    let y = x;
    let z = 4;
    console.log(x.col);
    console.log(y);
    console.log(z);
    {
        let x = 8;
        let z = 'red';

        console.log(x);
        console.log(y.col);
        console.log(z);

        y.col='black';
    }
    console.log(x); // АХТУНГ! тут будет black!! ссылается на тот-же объект,что
    // и 'y' который изменил свойство color
    console.log(y);
    console.log(z);
}