const app = require("./app");
const math = require("./math");

test("example on mockClear", () => {
  math.add = jest.fn(() => "add");

  expect(app.doAdd(1, 2)).toEqual("add");
  expect(app.doAdd(1, 2)).toEqual("add");
  expect(math.add).toHaveBeenCalledTimes(2);

  // Clears the number of times called retains mock implementation
  math.add.mockClear();
  expect(app.doAdd(1, 2)).toEqual("add");
  expect(math.add).toHaveBeenCalledTimes(1);
});

test("example on mockReset", () => {
  math.add = jest.fn(() => "add");

  expect(app.doAdd(1, 2)).toEqual("add");
  expect(app.doAdd(1, 2)).toEqual("add");
  expect(math.add).toHaveBeenCalledTimes(2);

  // Clears the number of times called as well as mock implementation
  math.add.mockReset();
  expect(app.doAdd(1, 2)).toEqual(undefined);
  expect(math.add).toHaveBeenCalledTimes(1);
});

xtest("example on mockRestore", () => {
  const math = require("./math");
  const addMock = jest.spyOn(math, "add");

  // override the implementation
  addMock.mockImplementation(() => "mock");
  expect(app.doAdd(1, 2)).toEqual("mock");

  // restore the original implementation
  addMock.mockRestore();
  expect(app.doAdd(1, 2)).toEqual(3);
});
