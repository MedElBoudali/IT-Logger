import React, { useState } from "react";
import M from "materialize-css/dist/js/materialize";

const AddTechModal = () => {
  const [getFirstname, setFirstname] = useState("");
  const [getLastname, setLastname] = useState("");

  const onSubmit = () => {
    if (getFirstname === "" || getLastname === "") {
      M.toast({ html: "Please Enter First & Last name" });
    } else {
      console.log(getFirstname, getLastname);
      setFirstname("");
      setLastname("");
    }
  };

  return (
    <div id="add-tech-modal" className="modal">
      <div className="modal-content">
        <h4>New Technician</h4>
        <div className="row">
          <div className="input-field">
            <input
              type="text"
              name="Firstname"
              value={getFirstname}
              onChange={(e) => setFirstname(e.target.value)}
            />
            <label htmlFor="Firstname" className="active">
              First Name
            </label>
          </div>
        </div>
        <div className="row">
          <div className="input-field">
            <input
              type="text"
              name="Lastname"
              value={getLastname}
              onChange={(e) => setLastname(e.target.value)}
            />
            <label htmlFor="Lastname" className="active">
              Last Name
            </label>
          </div>
        </div>
      </div>
      <div className="modal-footer" style={{ textAlign: "center" }}>
        <a
          href="#!"
          onClick={onSubmit}
          className="modal-close waves-effect waves-green blue btn"
        >
          Enter
        </a>
      </div>
    </div>
  );
};

export default AddTechModal;
