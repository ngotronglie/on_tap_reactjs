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
 * 3. call back function
 * 4.IIFE
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

const returnObject = () => {
  name: "Nguyen Van A";
  age: 18;
};
const returnObject2 = () => ({
  name: "Nguyen Van A",
  age: 18,
});
console.log(returnObject2());

const returnArray = () => [1, 2, 3];
console.log(returnArray());

const demo = () => () => {
  console.log("demo");
};
const demo2 = () => {
  return () => {
    return "demo2";
  };
};

// call back function

const congViecA = () => {
  congViecB();
  console.log("cong viec A");
};

const congViecB = () => {
  setTimeout(() => {
    console.log("cong viec B");
  }, 2000);
  // console.log("cong viec B");
};

congViecA();

// IIFE // ham khong can goi

(function () {
  console.log("hello");
})();
