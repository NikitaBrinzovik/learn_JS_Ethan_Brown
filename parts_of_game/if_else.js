const bets = { crown: 0, anchor: 0, heart: 0, spade: 0, club: 0, diamond: 0};

let totalBet = rand(1, funds);
if (totalBet === 7){
    totalBet = funds;
    bets.herat = totalBet;
} else {
    //распределение всех ставок
}

funds = funds -totalBet;