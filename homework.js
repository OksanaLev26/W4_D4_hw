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

class Person {
    constructor(name, age = 0, height = 0, weight = 0, mood = 0, hamsters = [], bankAccount = 0) {
        this.name = name;
        this.age = age;
        this.height = height;
        this.weight = weight;
        this.mood = mood;
        this.hamsters = hamsters;
        this.bankAccount = bankAccount;
    }

    getName() {
        return this.name;
    }

    getAge() {
        return this.age;
    }

    getWeight() {
        return this.weight;
    }

    greet() {
        console.log(`Hello, ${this.name}!`);
    }

    eat(num) {
        this.weight += num;
        this.mood += num;
    }

    exercise(num) {
        this.weight -= num;
    }

    ageUp(num) {
        this.age += num;
        this.height += num;
        this.weight += num;
        this.mood -= num;
        this.bankAccount += 10 * num;
    }

    buyHamster(hamster) {
        this.hamsters.push(hamster);
        this.mood += 10;
        this.bankAccount -= hamster.getPrice();
    }
}

const person = new Person('Timmy', 5, 140, 35, 10);
const firstHamster = new Hamster('Timmy', 'Gus');
console.log(person);
person.eat(5);
person.exercise(5);
console.log(person);
person.ageUp(4);
person.buyHamster(firstHamster);
console.log(person);
person.ageUp(6);
console.log(person);
person.eat(2);
console.log(person);
person.exercise(2);
console.log(person);

class Dinner {
    constructor(appetizer, entree, dessert) {
        this.appetizer = appetizer;
        this.entree = entree;
        this.dessert = dessert;
    }
}

class Chef {
    constructor() {
        this.dinners = [];
    }
    makeDinner(appetizer, entree, dessert) {
        const newDinner = new Dinner(appetizer, entree, dessert);
        this.dinners.push(newDinner);
    }

    printDinners() {
        console.log(this.dinners);
    }
}

const chef = new Chef();
console.log(chef);
chef.makeDinner('orange-glazed meatballs', 'grilled hamburgers', 'apple pie');
chef.makeDinner('chicken parmesan slider bake', 'sliced Beef brisket', 'tiramisu');
chef.makeDinner('grilled tomato-peach pizza', 'deep fried BBQ ribs', 'cake');
chef.printDinners();