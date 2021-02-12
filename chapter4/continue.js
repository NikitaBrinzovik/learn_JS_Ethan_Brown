while(funds > 1 && funds < 100) {
    let totalBet = rand (1, funds) ;
    if (totalBet === 13) {
        console.log('Неудача! Пропустить этот раунд!');
    } else {
    //Играем!
    }
}

//Используем continue

while (funds > 1 && funds < 100) {
    let totalBet = rand(1, funds);
    if (totalBet === 13) {
        console.log('Неудача! Пропустить раунд..');
        continue;
    }
    //Играем дальше!
}