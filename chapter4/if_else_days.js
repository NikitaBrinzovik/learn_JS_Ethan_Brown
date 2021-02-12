if(new Date().getDay() === 3) {
    totalBet = 1;
    console.log('Это среда и ставить будем только по 1 пенни');
} else if(funds === 7) {
     totalBet = funds;
} else {
     console.log('Здесь нет никаких суеверий!');
}