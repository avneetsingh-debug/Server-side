function isNumber(value) {
    return typeof value === "number" && !isNaN(value);
}


console.log(isNumber(25));      
console.log(isNumber("hello")); 
console.log(isNumber(3.14));    
console.log(isNumber("123"));   