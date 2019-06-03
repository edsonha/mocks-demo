const app = require("./app");
const add = require("./math");

jest.mock("./math");

test("calls math.add", () => {
  app.doAdd(1, 2);
  expect(add).toHaveBeenCalledWith(1, 2);
});
