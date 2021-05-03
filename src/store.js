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
    let mockData = _data.concat();
    return {
      name: "",
      selected_answer: 0,
      data: mockData,
      question: getQuestion(),
      answer: getAnswer(),
      answer1: [],
      answer2: [],
    };
  }
  let answer = [...state.answer];

  let answer1 = answer.filter((e) => e.answerId === 1);
  let answer2 = state.data.filter((e) => e.answerId === 2);

  switch (action.type) {
    case "setName":
      break;
    default:
      break;
  }
  return {
    ...state,
    name: action.name,
    answer1: answer1,
    answer2: answer2,
  };
}
export default createStore(
  reducer,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);
