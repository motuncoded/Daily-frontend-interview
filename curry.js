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
console.log(addCurried(1, 3) (5)) // 10
console.log(addCurry(1)(3)(5)) // 10