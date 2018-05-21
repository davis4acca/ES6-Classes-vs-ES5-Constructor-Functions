class Person {
    constructor(name = 'Garry') {
        this.name = name;
    }

    // .prototype
    greet() {
        console.log(`Hi i'm ${this.name}`)
    }
}




// extends does the same thing as util.inherits it sets up the proto chain for the newly created object
// newObj.__proto__.proto__ === Person.prototype
class Policeman extends Person {
    constructor(badgeNumber) {
        super(); // sugar for Person.call(this)
        this.badgeNumber = badgeNumber;
    }
}



var Officer = new Policeman('4451');

Officer.__proto__ === Policeman.prototype // true
Officer.__proto__.__proto__ === Person.prototype // true