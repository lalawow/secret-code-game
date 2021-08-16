import { reactive } from "vue";
const store = {
  debug: true,

  state: reactive({
    message: "Hello!",
    colorSize: 8,
    puzzleLength: 5,
    inGame: false,
    puzzle: new Array(5).fill(""),
    solutions: [],
    results: [],
    currentSolution: new Array(5).fill(""),
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
  },

  setPuzzle(newValue) {
    this.state.puzzle = newValue;
    this.resetSolutions();
    this.pushSolutions(newValue);
  },
  pushSolutions(newValue) {
    this.state.solutions.push([...newValue]);
    const result = genResult(this.state.puzzle, newValue);
    this.state.results.push(result);
  },
  resetSolutions() {
    this.state.solutions = [];
    this.state.currentSolution = ["", "", "", "", ""];
    console.log("solutions", this.state.currentSolution);
  },
  resetCurrentSolution() {
    const solution = this.state.currentSolution;
    console.log(this.state.currentSolution);
    solution.forEach((cell, index) => {
      solution[index] = "";
    });
  },
  fillSolution(position, value) {
    this.state.currentSolution[position] = value;
  },
};

export default store;
