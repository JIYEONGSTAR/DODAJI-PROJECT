import React from "react";
import SelectCard from "components/cards/SelectCard";
import { connect } from "react-redux";
function Main(props) {
  let data = props.data;

  const handleClick = (e) => {
    console.log(e);
  };
  console.log(data);

  return (
    <div>
      {data.map((d) => (
        <SelectCard
          question={d.q}
          answer1={d.a[0].answer}
          answer2={d.a[1].answer}
          onClick={handleClick}
        />
      ))}
    </div>
  );
}

const mapStateToProps = (state) => {
  return { data: state.data };
};

const mapDispatchToProps = (dispatch) => {
  return { handleAnswer: (id) => dispatch({ type: "handleAnswer", id: id }) };
};
export default connect(mapStateToProps, mapDispatchToProps)(Main);
