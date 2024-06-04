// 1. Write a JavaScript class named Rectangle that has two properties, width and height, initialized through its constructor. Then, instantiate an object of Rectangle with a width of 5 and a height of 10.

class Rectangle {
  constructor(width, height) {
    this._width = width
    this._height = height
  }

  calcArea() {
    return this._width * this._height
  }
}

let newRect = new Rectangle(5, 10)
console.log(newRect)

// 2. How do you create a constructor within a class named Circle that initializes a property radius and sets its value based on the argument passed when a new Circle instance is created? Create an instance of Circle with a radius of 4.

class Circle {
  constructor(radius) {
    this._radius = radius
  }
}

let newCirc = new Circle(4)
console.log(newCirc)

// 3. Explain how you would add a method named calculateArea to the Rectangle class that calculates the area of the rectangle. How does this method get added to the prototype of the class, and how can all instances of Rectangle access it?

console.log(newRect.calcArea())

// 4. In the context of a class method in JavaScript, what does the this keyword refer to, and how would you use it inside a method named describe in a class Person to access the instance's properties named name and age?

class Person {
  constructor(name, age) {
    this._name = name
    this._age = age
  }

  describe() {
    console.log('My name is', this._name, "and I'm", this._age.toString(), 'years old.' )
  }
}

let tim = new Person('Tim', 20)
tim.describe()

// 5. Create a class named Animal with a constructor that initializes a property species. Then, define a subclass named Dog that inherits from Animal and adds an additional property name in its constructor. How do instances of Dog access methods defined on Animal's prototype?

class Animal {
  constructor(species) {
    this._species = species
  }
}

class Dog extends Animal {
  constructor(species, name) {
    super(species)
    this._name = name
  }
}

let newPuppy = new Dog('Dog', 'Borkette')
console.log(newPuppy)