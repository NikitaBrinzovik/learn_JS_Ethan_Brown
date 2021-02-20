const cart = [{name:"Widget", price: 9.95}, {name: "Gadget", price: 22.95}];
const names = cart.map(x => x.name); //["Widget", "Gadget"]
const prices = cart.map(x => x.price); //[9.95, 22.95]
const discountPrices = prices.map(x => x*0.8); // [7.96, 18.36]
const lcNames = names.map(String.toLowerCase); // ["widget", "gadget"]

// если хотим объеденить два массива:
const items1 = ["Widget", "Gadget"],
const prices1 = [9.95, 22.95],
const cart1 = items1.map((x, i) => ({ name: x, price: prices1[i]}));
//cart1: [{name:"Widget", price: 9.95}, {name: "Gadget", price: 22.95}];

//создать колоду игральных карт
const cards = [];
for(let suit of ['H', 'C', 'D', 'S']) // червы трефы бубны пики
    for(let value=1; value<=13; value++)
        cards.push({ suit, value});
cards.filter(c => c.value === 2);
cards.filter(c => c.suit === 'D');
