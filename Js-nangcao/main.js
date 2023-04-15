
// function Mouse(name) {
//   this.name = name;
// }

// Mouse.prototype.run = function() {
//   console.log(`${this.name} is running}`);
// }

// class Mouse {
//   constructor(name) {
//     this.name = name;
//   }
//   run() {
//   console.log(`${this.name} is running}`);
//   }
// }

// const mouse = new Mouse('Mickey')
// mouse.run()

// class Animal {
//   constructor(name) {
//     this.name = name;
//   }
//   eat() {
//   console.log('Eating...!');
//   }
// }

// class Bird extends Animal {
//   fly() {
//     console.log('Flying...!');
//   }
// }

// class Parrot extends Bird {
//   speak() {
//     console.log('alo alo...!');
//   }
// }

// const bird = new Parrot('Bồ câu')
// bird.speak()

// method overridings
// class CoffeeMachine {
//   makeCoffee() {
//     console.log('Making Coffee Machine');
//   }
// }
// class SpecialCoffee extends CoffeeMachine {
//   makeCoffee(cb) {
//     console.log('MakingCoffeeMachine...hihi haha ................');
//     cb()
//   }
// }

// const Coffee = new SpecialCoffee()
// Coffee.makeCoffee(function() {
//   console.log('call the boss');
// })

// super
// class Hero {
//   constructor(name, hp, damage) {
//     this.name = name;
//     this.hp = hp;
//     this.damage = damage;
//   }
// }

// applyDamage(damage); {
//   this.hp -= damage
// }

// attack(enemy); {
//   enemy.applyDamage(this.damage)
// } 

// class RangeHero extends Hero {
//   constructor(name, damage, hp, range) {
//     super(name, damage, hp)
//     this.range = range
//   }

//   attack(enemy) {
//     super.attack(enemy)
//     this.hp += this.damage
//   }
// }

// const heroAAA = new RangeHero('A', 500, 20)
// const heroBBB = new Hero('B', 1000, 11)
// console.log({heroAAA, heroBBB});

// heroAAA.attack(heroBBB)
// console.log({heroAAA, heroBBB});

// class Foo {
//   static someMethod() {
//     console.log('someMethod...');
//   }

//   anotherMethod() {
//     console.log('another method...');
//   }
// }
// Foo.someMethod()

// function foo() {

// }

// Foo.prototype.anotherMethod = function() {

// }

// Foo.someMethod = function() {
  
// }

// Rest 
// function rest(e, ...rest) {
//   console.log(e);
//   console.log(...rest);
//   console.log(arguments);
// }
// rest(2, 3, 6, 45,1, 44)


// function sum(...nums) {
//   return nums.reduce((a, b) => a + b)
// }
// sum(1,2 ,3, 4, 5)

// function concat(separator, ...strings) {
//  return strings.join(separator)
// }
// concat('.',  'a', 'b', 'c')

//Spread
const a = [1, 2, 3, 4, 5]
const b = [1, ...a, 6]
console.log(b);

function sum(...numbers) {
  console.log(numbers);
}
sum(...a)