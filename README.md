### qs.stringify() 与 JSON.stringify() 区别：
```
let obj = {
    name: 'jeff',
    age: 30
}

console.log(qs.stringify(obj))
// name=jeff&age=30
console.log(JSON.stringify(obj))
// {"name":"jeff","age":30}
```