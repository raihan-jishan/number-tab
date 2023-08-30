import SubmitBtn from "../../components/Button/SubmitBtn.js";
import "../../css/addform.css";
import noteContext from "../../context/noteContext";
import React, { useContext, useState } from "react";
import AddFormPic from "../../assets/AddForm.svg";
const AddForm = () => {
  const context = useContext(noteContext);
  const { addNote } = context;

  const [note, setNote] = useState({ title: "", description: "", tag: "" });

  const handleClick = (e) => {
    e.preventDefault();
    addNote(note.title, note.description, note.tag);
    setNote({ title: "", description: "", tag: "" });
  };

  const onChange = (e) => {
    setNote({ ...note, [e.target.name]: e.target.value });
  };
  return (
    <div className="form-container">
      <div className="image-card">
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
            value={note.title}
            onChange={onChange}
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
            value={note.description}
            onChange={onChange}
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
            value={note.tag}
            onChange={onChange}
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

      {/* close */}
    </div>
  );
};

export default AddForm;
