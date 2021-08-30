import { colorArray } from "./constants";

export const getLocalItem = (key) => localStorage.getItem(key);

export const setLocalItem = (key, value) =>
  localStorage.setItem(key, JSON.stringify(value));

export const genPuzzle = ({ colorSize, puzzleLength }) => {
  const res = [];
  for (let i = 0; i < puzzleLength; i++) {
    res.push(colorArray[parseInt(colorSize * Math.random())]);
  }
  return res;
};

export const genResult = (puzzle, solution) => {
  const _puzzle = [...puzzle];
  const _solution = [...solution];
  const result = {
    correct: 0,
    close: 0,
    wrong: 0,
  };
  solution.forEach((c, index) => {
    if (c === puzzle[index]) {
      result.correct = result.correct + 1;
      _solution[index] = null;
      _puzzle[index] = null;
    }
  });
  _solution.forEach((c) => {
    if (c && _puzzle.indexOf(c) > -1) {
      result.close = result.close + 1;
      _puzzle[_puzzle.indexOf(c)] = null;
    }
  });
  result.wrong = puzzle.length - result.correct - result.close;
  return result;
};
