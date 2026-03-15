function isRegExp(value) {
    return value instanceof RegExp;
}


let a = /hello/;
let b = "hello";

console.log(isRegExp(a));
console.log(isRegExp(b)); 