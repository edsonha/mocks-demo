test("returns undefined by default", () => {
  const fakeFunction = jest.fn();

  let result = fakeFunction("foo");
  fakeFunction("foobar");
  fakeFunction("foobar2");

  expect(result).toBeUndefined();
  expect(fakeFunction).toHaveBeenCalled(); // Check if fake function has been called
  expect(fakeFunction).toHaveBeenCalledTimes(3); // Check if fake function has been called 3 times
  expect(fakeFunction).toHaveBeenCalledWith("foo"); // Check if foo is called by fakeFunction
  expect(fakeFunction.mock.calls).toEqual([["foo"], ["foobar"], ["foobar2"]]); // check what are the parameter that is passed to fakeFunction
  expect(fakeFunction.mock.calls.length).toEqual(3);
});

test("mock implementation", () => {
  const mock = jest.fn(() => "bar");
  // mock.mockImplementation(() => "barhaha"); // you change the return of mock after mock function is established

  expect(mock("foo")).toBe("bar");
  expect(mock).toHaveBeenCalledWith("foo"); //This to check the mock foo has been called. See above function
  expect(mock("foobar")).toBe("bar");
  expect(mock).toHaveBeenCalledWith("foobar"); //This to check the mock foo has been called. See above function
});

test("also mock implementation", () => {
  const mock = jest.fn().mockImplementation(() => "bar");

  expect(mock("foo")).toBe("bar");
  expect(mock).toHaveBeenCalledWith("foo");
  expect(mock("foobar")).toBe("bar");
  expect(mock).toHaveBeenCalledWith("foobar");
});

test("mock implementation one time", () => {
  //mock implementation happen once
  const mock = jest.fn().mockImplementationOnce(() => "bar");

  expect(mock("foo")).toBe("bar");
  expect(mock).toHaveBeenCalledWith("foo");

  expect(mock("baz")).toBe(undefined);
  expect(mock).toHaveBeenCalledWith("baz");

  expect(mock("foo")).toBe(undefined);
});

test("mock return value", () => {
  const mock = jest.fn();
  mock.mockReturnValue("bar");

  expect(mock("foo")).toBe("bar");
  expect(mock).toHaveBeenCalledWith("foo");
  expect(mock("foobar")).toBe("bar");
  expect(mock).toHaveBeenCalledWith("foobar");
});

test("mock promise resolution", () => {
  //mock with promise / async await resolution
  const mock = jest.fn();
  mock.mockResolvedValue("bar");

  expect(mock("foo")).resolves.toBe("bar");
  expect(mock).toHaveBeenCalledWith("foo");
  expect(mock("foobar")).resolves.toBe("bar");
  expect(mock).toHaveBeenCalledWith("foobar");
});
