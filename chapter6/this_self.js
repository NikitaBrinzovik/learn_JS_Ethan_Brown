//КЛЮЧЕВОЕ THIS

const o4 = {
    name: 'Wal',
    speak() {return `My name is ${this.name}!`; },
}
o4.speak()

const o = {
    name: 'Julie',
    greetBackwards: function() {
        const self = this;
        function getReverseName() {
            let nameBackwards = '';
            for (let i=self.name.length-1; i>=0; i--) {
                nameBackwards += self.name[i];
            }
            return nameBackwards;
        }
        return `${getReverseName()} si eman ym ,olleH`;
    },
}
o.greetBackwards();