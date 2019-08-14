const app = require("../app");
const math = require("../math");

test("calls math.add", () => {
  const addMock = jest.spyOn(math, "add");

  // override the implementation
  addMock.mockImplementation(() => "mock");
  expect(app.doAdd(1, 2)).toEqual("mock");

  // restore the original implementation
  addMock.mockRestore(); //comment this line and all the test will fail
  expect(app.doAdd(1, 2)).toEqual(3);
  expect(app.doAdd(3, 2)).toEqual(5);
});

it("test if mock restore is not done", () => {
  expect(app.doAdd(3, 3)).toEqual(6);
});
