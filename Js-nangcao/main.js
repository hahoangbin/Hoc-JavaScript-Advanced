
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
class Hero {
  constructor(name, hp, damage) {
    this.name = name;
    this.hp = hp;
    this.damage = damage;
  }
}

applyDamage(damage) {
  this.hp -= damage
}

attack(enemy) {
  enemy.applyDamage(this.damage)
} 

class RangeHero extends Hero {
  constructor(name, damage, hp, range) {
    super(name, damage, hp)
    this.range = range
  }

  attack(enemy) {
    super.attack(enemy)
    this.hp += this.damage
  }
}

const heroAAA = new RangeHero('A', 500, 20)
const heroBBB = new Hero('B', 1000, 11)
console.log({heroAAA, heroBBB});

heroAAA.attack(heroBBB)
console.log({heroAAA, heroBBB});
