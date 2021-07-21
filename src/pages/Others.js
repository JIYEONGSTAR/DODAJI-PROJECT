import React from "react";
import { connect } from "react-redux";
import "css/Others.css";
import { Link } from "react-router-dom";
import Button from "components/Button";
const Others = ({ others, realResult }) => {
  const list = others;

  return (
    <div className="resultTable">
      <div className="myTable">
        <table className="mytable">
          <thead>
            <tr>
              <th scope="cols">이름</th>
              <th scope="cols">유형</th>
            </tr>
          </thead>
          <tbody>
            {list.map((list) => (
              <tr>
                <th scope="row">{list.personName}</th>
                <th>
                  {
                    realResult.find(
                      (data) => data.realResultId === list.personResultId
                    ).realResultDescription
                  }
                </th>
              </tr>
            ))}
          </tbody>
        </table>

        <div className="toMain">
          <Link to="/">
            <Button sentence="메인화면으로" />
          </Link>
        </div>
      </div>
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
