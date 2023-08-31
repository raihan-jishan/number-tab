import React from "react";
import { People as data } from "../../DATA/People.js";
const OldnumberList = () => {
  // get data by props
  return (
    <div className="data-table">
      {data.map((data) => {
        return (
          <div className="number-card  ">
            <h1> {data.name} </h1>

            <h1>{data.number}</h1>

            <h1>{data.type}</h1>

            <div className="delete-btns"></div>
          </div>
        );
      })}
    </div>
  );
};

export default OldnumberList;
