var a = 1
let b = 1
const c = 1

var mouse = {
  name: 'Mickey',
  sayHi: function() {
    console.lg('Hi, my name is' + this.name);
  }
}

var cat = {
  name: 'Tom',
}

var say = mouse.sayHibnd(cat);

say()