
<!--function curry(func) {
  // Your code here
}

// Example usage:
function add(a, b, c) {
  return a + b + c;
}

const curriedAdd = curry(add);

console.log(curriedAdd(1)(2)(3)); //--> 
var curry = function(a, b, c)  {
    return a * b * c;
    
}
const addCurry = (a) => {
    return (b) => {
        return (c) => {
            return a + b + c
        }
    }
}
const addCurried = (a) => {
	return (b) => {
			return a + b 
		};
	};



console.log(curry(1, 3, 5)) // 15
console.log(addCurried(1, 3) (5)) // 6
console.log(addCurry(1)(3)(5)) // 9
