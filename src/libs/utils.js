import { colorArray } from "./constants";
export const genPuzzle = ({ colorSize, puzzleLength }) => {
  const res = [];
  for (let i = 0; i < puzzleLength; i++) {
    res.push(colorArray[parseInt(colorSize * Math.random())]);
  }
  return res;
};
