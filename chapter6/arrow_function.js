//different ways to hustel 

const f1 = function() { return 'hello!'};
//or
const f1 = () => 'hello!';

const f2 = function(name) { return `hello, ${name}!`; };
//or
const f2 = name => `Hello, ${name}!`;

const f3 = function (a, b) { return a + b ;};
//or
const f3 = (a,b) => a + b;

//real stuff
const o = {
    name: 'Genka',
    greetBackwards: function() {
        const getReverseName = () => {
            let nameBackwards = '';
            for (let i=this.name.length-1; i>=0; i--) {
                nameBackwards += this.name[i];
            }
            return nameBackwards;
        };
        return `${getReverseName()} si eman ym ,olleH`;
    },
};
o.greetBackwards();