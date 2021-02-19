console.log('перед блоком');
{
    console.log('внутри блока');
    const x = 3;
    console.log(x); //выводит 3 
}// standalone block-автономный блок{} без if/for  и проч
console.log(`за пределами блока; x=${x}`); //ReferenceError: х не определена


