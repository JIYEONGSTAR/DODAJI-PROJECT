import { createStore } from "redux";
import _data from "data.json";

function reducer(state, action) {
  if (state === undefined) {
    let mockData = _data.concat();
    return {
      name: "",
      selected_answer: 0,
      data: mockData,
    };
  }

  switch (action.type) {
    case "setName":
      return { ...state, name: action.name };
    default:
      break;
  }
}
export default createStore(
  reducer,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);
