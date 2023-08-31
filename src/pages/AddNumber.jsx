/*
    title: "Addnumber.js file"
    desc: "  the file was been create for add numbers with the somae user account. " 
    date: 31 - 8 - 2023.
*/
// import all important files and modules
import React from "react";
import AddNote from "../components/AddForm/AddForm";

const AddNumber = () => {
  return (
    <div>
      <div className="info-title">
        <h2>Add Number </h2>
      </div>
      {/* wrap the about info section  */}
      <AddNote />
    </div>
  );
};

export default AddNumber;
