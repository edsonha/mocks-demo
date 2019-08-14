const app = require("../app");
const math = require("../math");

// Set all module functions to jest.fn
jest.mock("../math.js");
// automatically mocking all functions in math.js

test("calls math.add", () => {
  app.doAdd(1, 2);
  expect(math.add).toHaveBeenCalledWith(1, 2);
});

test("calls math.subtract", () => {
  app.doSubtract(1, 2);
  expect(math.subtract).toHaveBeenCalledWith(1, 2);
});

test("calls math.multiply", () => {
  app.doMultiply(1, 2);
  expect(math.multiply).toHaveBeenCalledWith(1, 2);
});
