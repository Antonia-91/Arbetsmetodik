// ----- KOD 1 ------- //

let cars = ["volvo", "saab", "bmw", "tesla"];
cars.forEach(function (car) {
  console.log(car);
});
//console.log(cars);

// Arrow
cars.forEach((car) => console.log(car));

// ----- KOD 2 ------- //

let fruits = ["apple", "banana", "orange"];
let hundar = ["hugo", "sally", "boss", "molly"];
let katter = ["majja", "kisse", "misse"];

const forEachFunction = function (array) {
  array.forEach(function (item) {
    console.log(item);
  });
};
forEachFunction(katter);

// Arrow
const forEachFunction = (array) => array.forEach((item) => console.log(item));
forEachFunction(katter);

// ----- KOD 3 ------- //

let flowers = ["rose", "tulip", "lily", "orchid"];

flowers.forEach(function (flower, index) {
  console.log("flower:", flower, "|", "index: ", index);
});
