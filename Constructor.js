var util = require('util');

function Person(name) {
    this.name = name;
}

Person.prototype.greet = function () {
    console.log(`Hi i'm ${this.name}`)
}


function Policeman(badgeNumber) {
    Person.call(this)
    this.badgeNumber = badgeNumber;
}

util.inherits(Policeman, Person);

var Officer = new Policeman('4451');

Officer.greet();