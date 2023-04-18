

// let a1 = 1
// let a2 = 1
// console.log(a1 === a2);

// let obj1 = {a: 1}
// let obj2 = {a: 1}
// console.log(obj1 === obj2);

// let a3 = a2
// a3 = 2
// console.log(a2);

// let obj3 = obj2
// obj3.a = 2
// console.log(obj2);

// const obj1 = {
//   a: 1,
//   b: 2,
//   c: 3,
//   d: {
//     e: 10
//   }
// }

// let obj2 = {
//   ...obj1,
//   z: 22
// }
// obj2.d.e = 11

// console.log(obj1, obj2);

// function debug(name) {
//   return function(str) {
//     console.log(`[${name}] ${str}`);
//   }
// }

// const log = debug('Mouse')
// log('Error happened')

// function waitAndRun(ms, func)  {
//   setTimeout(func, ms);
// }

// function run() {
//   console.log('run function');
// }
// waitAndRun(3000, run)

// destructuring
// const arr = [10, 20, 30, 40, 50]
// const [a, b, c, d, e] = arr

document.addEventListener("click", function (e) {
  let body = document.querySelector("body");
  console.log(body)
  let heart = document.createElement("span");
  console.log(heart);
  let x = e.offsetX;
  let y = e.offsetY;
  heart.style.left = x + "px";
  heart.style.top = y + "px";

  let size = Math.random() * 80;
  heart.style.width = 20 + size + "px";
  heart.style.height = 20 + size + "px";

  let transformValue = Math.random() * 360;
  heart.style.transform = "rotate(" + transformValue + "deg)";

  body.appendChild(heart);

  setTimeout(() => {
    heart.remove();
  }, 1000);
});