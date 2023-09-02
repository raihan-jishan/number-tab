/*
    title: "Adddform.js file"
    desc: "  file for   application number details adding form and stored in database" 
    date: 31 - 8 - 2023.
*/
// import all important files and modules
import "../../css/addform.css";
import noteContext from "../../context/noteContext";
import React, { useContext, useState } from "react";
import AddFormPic from "../../assets/AddForm.svg";
import { SkeletonTheme } from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";
const AddForm = () => {
  // context of useContext in react and get the funtionity from the noteContext file.
  const context = useContext(noteContext);
  // import the module from noteContext.
  const { addNote } = context;
  // initialize useState hook in react and declared all them.
  const [note, setNote] = useState({ title: "", description: "", tag: "" });
  // handleClick function
  const handleClick = (e) => {
    e.preventDefault();
    addNote(note.title, note.description, note.tag);
    setNote({ title: "", description: "", tag: "" });
  };
  // onChange event
  const onChange = (e) => {
    setNote({ ...note, [e.target.name]: e.target.value });
  };
  return (
    <SkeletonTheme baseColor="#202020" highlightColor="#444">
      <div className="form-container">
        <div className="image-card">
          {/* picture of the application and the by default alt tag to handle the error response. */}
          <img src={AddFormPic} alt="404 module not found!" />
        </div>
        {/* form*/}
        <form action="" className="form-input">
          <div>
            <input
              className="input"
              placeholder="Add person name.."
              type="text"
              id="title"
              name="title"
              value={note.title} // value of the element
              onChange={onChange} // onChange function to handle events .
              minLength={5}
              required
            />
          </div>
          <div>
            <input
              className="input"
              placeholder="Add a number..."
              type="text"
              id="description"
              name="description"
              value={note.description} // value of the element
              onChange={onChange} // onChange function to handle events .
              minLength={5}
              required
            />
          </div>
          <div>
            <input
              className="input"
              placeholder="Add a type..."
              type="text"
              id="tag"
              name="tag"
              value={note.tag} // value of the element
              onChange={onChange} // onChange function to handle events .
              minLength={5}
              required
            />
          </div>

          {/* onSubmit btn */}
          <div className="submit-btn btn-primary border-radius-md">
            <button onClick={handleClick}>
              Add Number <i className="fa-solid fa-hashtag"></i>
            </button>
          </div>
          {/* close */}
        </form>
      </div>
    </SkeletonTheme>
  );
};

export default AddForm;
