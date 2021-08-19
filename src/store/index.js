import { reactive } from "vue";
import { PUZZLE_LENGTH, COLOR_SIZE } from "../config";
import { genResult } from "../libs/utils";

// const { PUZZLE_LENGTH, COLOR_SIZE } = CONFIG;

const store = {
  debug: true,

  state: reactive({
    message: "Hello!",
    colorSize: COLOR_SIZE,
    puzzleLength: PUZZLE_LENGTH,
    inGame: false,
    puzzle: new Array(PUZZLE_LENGTH).fill(""),
    solutions: [],
    results: [],
    currentSolution: new Array(PUZZLE_LENGTH).fill(""),
    youWin: false,
    startAt: null,
    endAt: null,
  }),

  setMessageAction(newValue) {
    if (this.debug) {
      console.log("setMessageAction triggered with", newValue);
    }

    this.state.message = newValue;
  },

  clearMessageAction() {
    if (this.debug) {
      console.log("clearMessageAction triggered");
    }

    this.state.message = "";
  },

  setInGame(newValue) {
    this.state.inGame = newValue;
    if (newValue) this.state.youWin = false;
  },

  setPuzzle(newValue) {
    this.state.puzzle = newValue;
    this.resetSolutions();
  },
  pushSolutions(newValue) {
    this.state.solutions.push([...newValue]);
    const result = genResult(this.state.puzzle, newValue);
    this.state.results.push(result);
    if (result.correct === this.state.puzzleLength) {
      this.state.youWin = true;
      this.state.endAt = Date.now();
      this.setInGame(false);
    }
  },
  resetSolutions() {
    this.state.solutions = [];
    this.state.currentSolution = new Array(this.state.puzzleLength).fill("");
  },
  resetCurrentSolution() {
    const solution = this.state.currentSolution;
    solution.forEach((cell, index) => {
      solution[index] = "";
    });
  },
  fillSolution(position, value) {
    this.state.currentSolution[position] = value;
  },
  setStateValue(value) {
    this.state = { ...this.state, ...value };
    console.log(this.state);
  },
};

export default store;
