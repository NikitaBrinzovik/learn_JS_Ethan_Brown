const hand = [randFace(), randFace(), randFace()];
for(let face of hand)
    console.log(`You rolled...${face}!`);

    //если нам известны индексы, то используем обычный for
const hand = [randFace(), randFace(), randFace()];
for (let i=0; i<hand.length; i++)
    console.log(`Roll ${i+1}: ${hand[i]}`);