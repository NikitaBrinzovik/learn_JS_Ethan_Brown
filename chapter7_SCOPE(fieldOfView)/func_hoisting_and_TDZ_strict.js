//подъём функции
f(); //выводит функцию f
function f() {
    console.log('f')
}

//TDZ - temporal(временная) dead zone
//переменные объявленные до слова let находятся в TDZ


// USE STRICT строгий режим
(function() {
'use strict'
    //весь ваш код будет здесь..
})();