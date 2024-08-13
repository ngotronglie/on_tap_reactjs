function some() {
  return 2 + 3;
}
console.log(some());

function sum(a, b) {
  return a + b;
}
console.log(sum(2, 3));

/**
 * 1.regular function (named function)
 * 2.anonymous function(Expression function)
 */

const sum2 = function (a, b) {
  return a + b;
  // anonymous function
};

console.log(sum2(2, 3)); // call function

// arrow function
const sum3 = (a, b) => a + b;
console.log(sum3(2, 3));

((a, b) => a + b)(2, 3);

const sum4 = (a, b) => a + b;
console.log(sum3(2, 3));
