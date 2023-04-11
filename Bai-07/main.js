var abc = () => Date.now();
abc()

const names = ['thanh', 'minh', 'maxh'] // mang

const obj = {
  0: 'minh',
  1: 'maxh',
  2: 'tom',
  length: 3
}

for ( let i = 0; i < obj.length; i ++ ) {
  console.log(obj[i]);
}

function sum() {

  let result = 0;
  for ( let i = 0; i < arguments.length; i ++ ) {
    result += arguments[i]
  }
  console.log(result);
  return result
}

sum(1, 3, 3, 5, 7, 4, 6, 55,23, 2)

function getting(name = 'My friends', city = 'hn') {
  if ( city == 'hn' ) {
    return `Xin chào, ${name}`
  }
  if ( city == 'en' ) {
    return `Hi, ${name}`
  }
  if ( city =='jv' ) {
    return `mitsubitsi, ${name}`
  }
}

getting('minh', 'en')

function sums() {
  const numbers = Array.from(arguments)
  return numbers.reduce((sums, num) => sums + num, 0)
}

function average() {
  const x = sums.apply(this, arguments)
  const b = x/arguments.length
  console.log(b)
}

average(3, 45, 34,6, 3,6, 23)
console.log(average)
console.log(sums)