const game = require("../game");
const utils = require("../utils");

test("returns winner player2", () => {
  const mockedGetWinner = jest.spyOn(utils, "getWinner");
  mockedGetWinner.mockImplementation((p1, p2) => p2);

  const winner = game("Mary", "Bob");
  expect(winner).toBe("Bob");
  expect(mockedGetWinner).toHaveBeenCalledTimes(2);
  utils.getWinner.mock.calls.forEach(args => {
    expect(args).toEqual(["Mary", "Bob"]);
  });

  mockedGetWinner.mockRestore(); //without this, it will affect the next test
});

test("returns winner player1", () => {
  const mockedGetWinner = jest.spyOn(utils, "getWinner");
  mockedGetWinner.mockImplementation((p1, p2) => p1);

  const winner = game("Mary", "Bob");
  expect(winner).toBe("Mary");
  expect(mockedGetWinner).toHaveBeenCalledTimes(2);
  utils.getWinner.mock.calls.forEach(args => {
    expect(args).toEqual(["Mary", "Bob"]);
  });

  mockedGetWinner.mockRestore();
});
