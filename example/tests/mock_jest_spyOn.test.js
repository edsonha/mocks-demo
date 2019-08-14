const app = require("../app");
const math = require("../math");

test("calls math.add", () => {
  const addMock = jest.spyOn(math, "add");

  // calls the original implementation
  expect(app.doAdd(1, 2)).toEqual(3);
  expect(app.doAdd(2, 2)).toEqual(4);

  // and the spy stores the calls to add
  expect(addMock).toHaveBeenCalledWith(1, 2);
  expect(addMock).toHaveBeenCalledWith(2, 2);
  expect(addMock).toHaveBeenCalledTimes(2);
});

test("calls math.subtract", () => {
  const subtractMock = jest.spyOn(math, "subtract");

  // calls the original implementation
  expect(app.doSubtract(5, 2)).toEqual(-3);

  // and the spy stores the calls to add
  expect(subtractMock).toHaveBeenCalledWith(5, 2);
  expect(subtractMock).toHaveBeenCalledTimes(1);
});
