const app = require("../app");
const math = require("../math"); //you cannot destructure when using mock, because you cannot assign to contant variable

math.add = jest.fn(); //create fake function using jest.fn(). Where or because we do not want to run the math.add.
//Why we do not want to run math.add is because calling the real thing can be expensive or we want to standardize
//the result
math.subtract = jest.fn();

test("calls math.add", () => {
  app.doAdd(1, 2);
  expect(math.add).toHaveBeenCalledWith(1, 2);
});

test("calls math.subtract", () => {
  app.doSubtract(1, 2);
  expect(math.subtract).toHaveBeenCalledWith(1, 2);
});

// //This test will fail
// test("calls math.multiply", () => {
//   app.doMultiply(1, 2);
//   expect(math.multiply).toHaveBeenCalledWith(1, 2);
// });
