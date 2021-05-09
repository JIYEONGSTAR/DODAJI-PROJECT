import { createStore } from "redux";
import _data from "data.json";
import axios from "axios/axios";

const getQuestion = () => {
  let questions = [];
  axios.get("question/all").then((result) => {
    result.data.forEach((item) => {
      questions.push(item);
    });
  });
  return questions;
};
const getAnswer = () => {
  let answers = [];
  axios.get("answer/all").then((result) => {
    result.data.forEach((item) => {
      answers.push(item);
    });
  });
  return answers;
};

function reducer(state, action) {
  if (state === undefined) {
    // let mockData = _data.concat();
    return {
      name: "",
      // data: mockData,
      question: getQuestion(),
      answer: getAnswer(),
      answer1: [],
      answer2: [],
      result: { 1: 0, 2: 0, 3: 0, 4: 0, 5: 0, 6: 0 },
      finalResult: "",
    };
  }
  let newName = state.name;
  let newAnswer = [...state.answer];
  let newAnswer1 = newAnswer.filter((e) => e.answerId === 1);
  let newAnswer2 = newAnswer.filter((e) => e.answerId === 2);
  let newResultId = action.result;
  let newResult = { ...state.result };
  let newFinalResult = state.finalResult;

  switch (action.type) {
    case "setName":
      newName = action.name;
      break;
    case "handleAnswer":
      newResult[newResultId] += 1;
      break;
    case "handleResult":
      newFinalResult = newFinalResult.concat(
        newResult[1] > newResult[2] ? "1" : "2"
      );
      newFinalResult = newFinalResult.concat(
        newResult[3] > newResult[4] ? "3" : "4"
      );
      newFinalResult = newFinalResult.concat(
        newResult[5] > newResult[6] ? "5" : "6"
      );
      break;
    case "handleBack":
      newResult[newResultId] -= 1;
      break;
    default:
      break;
  }
  return {
    ...state,
    name: newName,
    answer1: newAnswer1,
    answer2: newAnswer2,
    result: newResult,
    finalResult: newFinalResult,
  };
}
export default createStore(
  reducer,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);
