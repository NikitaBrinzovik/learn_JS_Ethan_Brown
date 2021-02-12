switch(totalBet) {
    case 7:
        totalBet = funds;
        break;
    case 13:
        funds= funds - 1; //подать пенс на милыстыню.
        //нет break, так что переходим на case 11 
    case 11:
        totalBet =  0;
        break;
    case 21:
        totalBet = 21;
        break;
    default:
        console.log('здесь нет никаких суеверий!');
        break; //break не обязателен, так как нет разделов дальше, но это хороший тон
}