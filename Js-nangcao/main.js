
// function Mouse(name) {
//   this.name = name;
// }

// Mouse.prototype.run = function() {
//   console.log(`${this.name} is running}`);
// }

class Mouse {
  constructor(name) {
    this.name = name;
  }
  run() {
  console.log(`${this.name} is running}`);
  }
}

const mouse = new Mouse('Mickey')
mouse.run()