//// OOP - Object Oriented Programming

const me = {
  name: 'james',
  age: 27
}

class Person {
  // class body
  constructor(name, age) {
    this.name = name // name is a default property of the class
    this.age = age // THIS refers to Person class
  }

  // can define methods = functions associated with a class
  greet() {
    console.log('Hello, my name is', this.name)
  }
}

const you = new Person('Bob', 23)
const them = new Person('Ashley', 31)

console.log(you)
them.greet()

//// Inheritance


// new class inherits template of parent class
class Gamer extends Person {
  constructor(name, age, videogame) { 
    super(name, age) // assign name and age in parent (Person class)
    this.videogame = videogame // assigns videogame in Gamer class
  }
}

const guy = new Gamer('Jeff', 41, 'Genshin') // instantiation

console.log(guy)

//// Getters / Setters

// getting information and setting information in an instantiated class
class Info {
  constructor(name) {
    this._name = name
  }

  // technically don't have to write this -> benefit is to intercept the update to perform other functions or calcs

  get name() {
    console.log('Fetched name data')
    return this._name
  }

  set name(value) {
    this._name = value
  }
}

const obj = new Info('Timothy')
console.log(obj.name)

obj.name = 'Timantha'
console.log(obj.name)