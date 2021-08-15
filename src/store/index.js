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
    this.state.solutions.push(newValue);
  },
  resetSolutions() {
    this.state.solutions = [];
  },
};

export default store;
