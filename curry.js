const multipyThree = (a, b, c) => {
    return a * b * c;
    
}
const curyMultiplyThree = curry(multipyThree);

console.log(multipyThree(1, 3, 5)) // 15
console.log(multipyThree(1, 2)(5)) // 10
console.log(multipyThree(1)(2)(5)) // 10