//IIFE - immediately invoked function expression- это 
//немедленно вызываемые фунциональные выражения
(function () {
    //это тело IIFE
})();

const message = (function() {
    const secret = 'Здесь указан пароль!';
    return `Пароль имеет длину ${secret.length} символов.`;
})();
console.log(message);

const f = (function() {
    let count = 0;
    return function() {
        return `Меня вызывали ${++count} раз(a).`;
    }
})();
f(); //раз(а)
f(); //Меня вызывали 2 раз(а)
//...