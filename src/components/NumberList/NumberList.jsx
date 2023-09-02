import React, { useContext, useState } from "react";
import { AiOutlineDelete } from "react-icons/ai";
import "../../css/alertBox.css";
import "../../css/numbers.css";
import DeletePic from "../../assets/Delete.svg";
import noteContext from "../../context/noteContext";
import Skeleton, { SkeletonTheme } from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";
const NumberList = (props) => {
  // context
  const context = useContext(noteContext);
  const { deleteNote } = context;
  // useState hook
  const [click, setClick] = useState(false);
  // get data by props
  const { data } = props;
  // handle Click open tab
  const handleClick = () => {
    setClick(!click);
  };
  // handleClose close tab
  const handleClose = () => {
    setClick(false);
  };
  return (
    <SkeletonTheme baseColor="#202020" highlightColor="#444">
      {/* alert box */}
      {click ? (
        <div className="alertContainer">
          <div className="image-delete">
            <img src={DeletePic} alt="" />
          </div>
          <h2>
            You Want to Delete
            <span className="title center"> {data.title} </span>Note{" "}
          </h2>
          <div className="submit-btn btn-primary  p-5">
            <button
              onClick={() => {
                deleteNote(data._id);
              }}
            >
              <i class="fa-regular fa-circle-check"></i> OK
            </button>
            <button onClick={handleClose}>
              <i class="fa-regular fa-circle-xmark"></i> Close
            </button>
          </div>
        </div>
      ) : null}
      {/* close */}
      <div className="number-card">
        <h2> {data.title || <Skeleton />} </h2>

        <h2>{data.description || <Skeleton />}</h2>

        <h2>{data.tag || <Skeleton />}</h2>
        <div className="delete-btns">
          <AiOutlineDelete size={40} onClick={handleClick} />
        </div>
      </div>
    </SkeletonTheme>
  );
};

export default NumberList;
