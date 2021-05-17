import { createStore } from "redux";
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
const getType = () => {
  let questions = [];
  axios.get("type/all").then((result) => {
    result.data.forEach((item) => {
      questions.push(item);
    });
  });
  return questions;
};
// const postresult = () => {
//   let finalResult = reducer.finalResult;
//   axios.post("", finalResult).then(result);
// };

function reducer(state, action) {
  if (state === undefined) {
    return {
      name: "",
      question: getQuestion(),
      answer: getAnswer(),
      type: getType(),
      answer1: [],
      answer2: [],
      finalResult: "",
    };
  }
  let newName = state.name;
  let newAnswer = [...state.answer];
  let newAnswer1 = newAnswer.filter((e) => e.answerId === 1);
  let newAnswer2 = newAnswer.filter((e) => e.answerId === 2);
  let newResult = { ...state.result };
  let newFinalResult = state.finalResult;
  let newType = [...state.type];
  switch (action.type) {
    case "setName":
      newName = action.name;
      break;
    case "handleAnswer":
      parseInt(action.value) % 2 !== 0
        ? (newType[action.typeId - 1].count += 1)
        : (newType[action.typeId - 1].count -= 1);
      break;
    case "handleResult":
      newFinalResult = newFinalResult.concat(
        newType[0].count > 0 ? "1" : "2",
        newType[1].count > 0 ? "3" : "4",
        newType[2].count > 0 ? "5" : "6"
      );
      break;
    case "handleBack":
      parseInt(action.prevalue) % 2 !== 0
        ? (newType[action.typeId - 1].count -= 1)
        : (newType[action.typeId - 1].count += 1);
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
    type: newType,
    finalResult: newFinalResult,
  };
}
export default createStore(
  reducer,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);
