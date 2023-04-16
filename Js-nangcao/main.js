

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

const arr = [10, 20, 30, 40, 50]
const [a, , ,b] = arr
console.log(b);

const obj = {
  a: 10,
  b: 20,
  c: 30
}
const {a: x, b: y, c: z} = obj
console.log(x, y, z);