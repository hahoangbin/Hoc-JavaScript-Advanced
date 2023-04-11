
function Mouse(name) {
  this.name = name;
}

Mouse.prototype.run = function() {
  console.log(`${this.name} is running}`);
}

const mickey = new Mouse('Mickey');
mickey.run()

const jerry = {
  name: 'Jerry',
  run() {
    console.log(`${this.name} is running}`);
  }
}
jerry.run()