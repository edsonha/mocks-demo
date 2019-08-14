const game = require("../game");
const utils = require("../utils");

// //1st implementation - using jest.fn
// utils.getWinner = jest.fn((p1, p2) => p2);

//2nd implementation - using jest.mock
jest.mock("../utils", () => {
  return {
    getWinner: jest.fn((p1, p2) => p2)
    //this method allows you to return more method which return something that you like for example, in the math.js
    // add: jest.fn((a,b) => "mock"),
    // subtract: jest.fn((a,b) => "foo")
  };
});

test("returns winner", () => {
  const winner = game("Mary", "Bob");
  expect(winner).toBe("Bob");
  expect(utils.getWinner).toHaveBeenCalledTimes(2); //there is no possibility of 3 because Bob is always declared as winner
  utils.getWinner.mock.calls.forEach(args => {
    expect(args).toEqual(["Mary", "Bob"]); //checking if the parameter from the game function is going down to getWinner function
  });
});
