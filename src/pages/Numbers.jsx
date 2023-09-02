import React, { useEffect, useContext } from "react";
import { useNavigate } from "react-router-dom";
import noteContext from "../context/noteContext.js";
import noData from "../assets/noData.svg";
import "../css/numbers.css";
import NumberList from "../components/NumberList/NumberList";
import { SkeletonTheme } from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";
const Numbers = () => {
  // initialize context
  const context = useContext(noteContext);
  const { notes, getNotes } = context;
  //  useNaviagte hook
  const navigate = useNavigate();
  useEffect(() => {
    if (localStorage.getItem("token")) {
      getNotes();
    } else {
      navigate("/login");
    }
  });
  return (
    <SkeletonTheme baseColor="#202020" highlightColor="#444">
      <div className="container-item">
        <div className="info-title">
          {/* if something found then action ...  */}
          {notes.length === 1 && <h2>Your all numbers ...</h2>}
        </div>
        {/* NumberList */}
        <div className="numberCard-container">
          {/* warning if something have not found! */}
          <div className="info-box">
            {notes.length === 0 && (
              <>
                <h1>No numbers to display</h1>

                <div className="image-div">
                  <img src={noData} alt="404 module not found!" />
                </div>
              </>
            )}
          </div>
          {/* close */}
          <div className="data-table">
            {notes.map((data) => {
              return <NumberList key={data._id} data={data} />;
            })}
          </div>
        </div>
        {/* close */}
      </div>
    </SkeletonTheme>
  );
};
export default Numbers;
