
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

class Animal {
  constructor(name) {
    this.name = name;
  }
  eat() {
  console.log('Eating...!');
  }
}

class Bird extends Animal {
  fly() {
    console.log('Flying...!');
  }
}

class Parrot extends Bird {
  speak() {
    console.log('alo alo...!');
  }
}

const bird = new Parrot('Bồ câu')
bird.speak()