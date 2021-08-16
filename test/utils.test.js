import { genResult } from "../src/libs/utils";

test("result is correct", () => {
  const puzzle = ["1", "2", "1", "1", "3"];
  const solution = ["4", "2", "1", "1", "5"];
  const result = genResult(puzzle, solution);
  expect(result).toMatchObject({ correct: 3, close: 0, wrong: 2 });
});
