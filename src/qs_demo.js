let qs = require('qs')

let obj = {
    name: 'jeff',
    age: 30
}
console.log('obj =')
console.log(obj)

console.log('qs.stringify(obj) =')
console.log(qs.stringify(obj))

let qsStringifyStr = 'name=jeff&age=30'
console.log('qs.parse(qsStringifyStr) =')
console.log(qs.parse(qsStringifyStr))

console.log('JSON.stringify(obj) =')
console.log(JSON.stringify(obj))

let jsonStr = '{"name":"jeff","age":30}'
console.log('JSON.parse(jsonStr) =')
console.log(JSON.parse(jsonStr))

