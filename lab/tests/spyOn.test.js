const game = require("../game");
const utils = require("../utils");

test("returns winner", () => {
  const mockedGetWinner = jest.spyOn(utils, "getWinner");
  mockedGetWinner.mockImplementation((p1, p2) => p2);

  const winner = game("Mary", "Bob");
  expect(winner).toBe("Bob");
  expect(mockedGetWinner).toHaveBeenCalledTimes(2);
  utils.getWinner.mock.calls.forEach(args => {
    expect(args).toEqual(["Mary", "Bob"]);
  });

  mockedGetWinner.mockRestore();
});
