class Person {
    constructor(firstName, lastName) {
        this.firstName = firstName;
        this.lastName = lastName;
    }

    get fullName() {
        return `${this.firstName} ${this.lastName}`;
    }

    set fullName(value) {
        [this.firstName, this.lastName] = value.split(' ');

    }
}

const myPerson = new Person('Alex', 'Nest');

console.log(myPerson.fullName);

myPerson.lastName = 'Test';

console.log(myPerson.fullName);

myPerson.fullName = 'Alex Nest';

console.log(myPerson.fullName);