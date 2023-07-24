class Hamster {
    constructor(owner = '', name) {
        this.owner = owner;
        this.name = name;
        this.price = 15;
    }

    wheelRun() {
        console.log('squeak squeak');
    }

    eatFood() {
        console.log('nibble nibble');
    }

    getPrice() {
        return this.price;
    }
}

