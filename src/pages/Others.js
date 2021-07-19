import React from "react";
import { connect } from "react-redux";
const Others = ({ others, realResult }) => {
  const list = others;

  return (
    <div>
      <tr>이름</tr>
      <tr>결과</tr>
      {list.map((list) => (
        <>
          <td>{list.personName}</td>
          <td>
            {
              realResult.find(
                (data) => data.realResultId === list.personResultId
              ).realResultDescription
            }
          </td>
        </>
      ))}
    </div>
  );
};
const mapStateToProps = (state) => {
  return {
    others: state.others,
    realResult: state.realResult,
  };
};
export default connect(mapStateToProps)(Others);
