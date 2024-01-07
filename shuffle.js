const shuffle = function (array) {
  return array.sort(() => Math.random() - 0.5);
};

const shuffle2 = function (array) {};
console.log(shuffle([1, 2, 3, 4]));
