let funds = 50;

while( funds > 1 && funds < 100) {

    funds = funds + 2; //two sters further
    funds = funds -1; //one step back
}

//return number [m , n] (include)
function rand(m, n) {
    return m + Math.floor((n-m +1)*Math.random());
}

//return random string, that equal  one of six variants 
function randFace() {
    return ['crown', 'anchor', 'heart', 'spade', 'club', 'diamond']
        [rand(0, 5)];
}
