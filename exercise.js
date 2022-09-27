// Define a class called Person that takes in three parameters in the constructor (firstName, lastName and age). Create the getters and setters methods for each property and a getter method called fullName that returns the full name.

// class Person {
// // ...
// }

// const person = new Person('Mario', 'Rossi', 25);
// console.log(person.fullName);

// person.firstName = 'Maria';
// person.lastName = 'Verdi';
// console.log(person.fullName);

class Person {
  constructor(firstName, lastName, age) {
    this._firstName = firstName; // wrote the underscore in-front to stop the stack overflow when writing setters and getters. (to have a different name)
    this._lastName = lastName;
    this._age = age;
  }

  set firstName(firstName) {
    this._firstName = firstName;
  }

  get firstName() {
    return this._firstName;
  }

  set lastName(lastName) {
    this._lastName = lastName;
  }

  get lastName() {
    return this._lastName;
  }

  set age(age) {
    this._age = age;
  }

  get age() {
    return this._age;
  }

  set fullName(fullName) {
    this._fullName = fullName; // this is not used, added just in case.
  }

  get fullName() {
    return this.firstName + " " + this.lastName; // these are getters and not proprieties of the object.
  }
}

const person = new Person("Mario", "Rossi", 25);
console.log(person.fullName);

person.firstName = "Maria";
person.lastName = "Verdi";
console.log(person.fullName);
