/*
    title: "NoteState.js file"
    desc: "NoteState file for whole application state manegment. " 
    date: 31 - 8 - 2023.
*/
// import all important files and modules
import NoteContext from "./noteContext";
import { useState } from "react";
const NoteState = (props) => {
  // server url or backend
  const host = "https://backend-of-notebook.onrender.com";
  // notesInitial blank array
  const notesInitial = [];
  // userInitial blank array
  const userInitial = [];
  // Initialize useState hook
  const [notes, setNotes] = useState(notesInitial);
  const [user, setUser] = useState(userInitial);
  // Get all Notes
  const getNotes = async () => {
    // API Call
    const response = await fetch(`${host}/api/notes/fetchallnotes`, {
      // Initialize method
      method: "GET",
      // headers
      headers: {
        "Content-Type": "application/json",
        "auth-token": localStorage.getItem("token"), // store the token in the localStorage of the browser
      },
    });
    // response the json
    const json = await response.json();
    // setNotes
    setNotes(json);
  };
  // get user details
  const getUserdetails = async () => {
    // api call
    const response = await fetch(`${host}/api/auth/getuser`, {
      // Initialize method
      method: "POST",
      // headers
      headers: {
        "content-Type": "application/json",
        "auth-token": localStorage.getItem("token"), // store the token in the localStorage of the browser
      },
    });
    // response the json
    const json = await response.json();
    setUser(json);
  };
  // Add a Note
  const addNote = async (title, description, tag) => {
    // TODO: API Call
    // API Call
    const response = await fetch(`${host}/api/notes/addnote`, {
      // Initialize method
      method: "POST",
      // headers
      headers: {
        "Content-Type": "application/json",
        "auth-token": localStorage.getItem("token"), // store the token in the localStorage of the browser
      },
      // stringify by json stringify
      body: JSON.stringify({ title, description, tag }),
    });
    // await the response
    const note = await response.json();
    setNotes(notes.concat(note));
  };

  // Delete a Note
  const deleteNote = async (id) => {
    // API Call
    const response = await fetch(`${host}/api/notes/deletenote/${id}`, {
      // Initialize method
      method: "DELETE",
      // headers
      headers: {
        "Content-Type": "application/json",
        "auth-token": localStorage.getItem("token"), // store the token in the localStorage of the browser
      },
    });
    // response the json
    const json = response.json();
    const newNotes = notes.filter((note) => {
      return note._id !== id;
    });
    setNotes(newNotes);
  };

  // Edit a Note
  const editNote = async (id, title, description, tag) => {
    // API Call
    const response = await fetch(`${host}/api/notes/updatenote/${id}`, {
      // Initialize method
      method: "PUT",
      // headers
      headers: {
        "Content-Type": "application/json",
        "auth-token": localStorage.getItem("token"), // store the token in the localStorage of the browser
      },
      body: JSON.stringify({ title, description, tag }),
    });
    const json = await response.json();

    let newNotes = JSON.parse(JSON.stringify(notes));
    // Logic to edit in client side
    for (let index = 0; index < newNotes.length; index++) {
      const element = newNotes[index];
      if (element._id === id) {
        newNotes[index].title = title;
        newNotes[index].description = description;
        newNotes[index].tag = tag;
        break;
      }
    }
    setNotes(newNotes);
  };

  return (
    // NoteContext provider
    <NoteContext.Provider
      value={{
        notes,
        user,
        addNote,
        deleteNote,
        editNote,
        getNotes,
        getUserdetails,
      }}
    >
      {props.children}
    </NoteContext.Provider>
  );
};
// export default module.
export default NoteState;
