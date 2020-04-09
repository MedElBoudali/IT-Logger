import React, { useState } from "react";
import M from "materialize-css/dist/js/materialize";
const EditLogModal = () => {
  const [getMessage, setMessage] = useState("");
  const [getAttention, setAttention] = useState(false);
  const [getTech, setTech] = useState("");

  const onSubmit = () => {
    if (getMessage === "" || getTech === "") {
      M.toast({ html: "Please Enter Message and Tech" });
    } else {
      console.log(getMessage, getAttention, getTech);
      setMessage("");
      setTech("");
      setAttention(false);
    }
  };

  return (
    <div
      id="edit-log-modal"
      className="modal"
      style={{ width: "75%", height: "75%" }}
    >
      <div className="modal-content">
        <h4>Enter System Log</h4>
        <div className="row">
          <div className="input-field">
            <input
              type="text"
              name="message"
              value={getMessage}
              onChange={(e) => setMessage(e.target.value)}
            />
            <label htmlFor="message" className="active">
              Log Message
            </label>
          </div>
        </div>
        <div className="row">
          <div className="input-field">
            <select
              name="tech"
              value={getTech}
              className="browser-default"
              onChange={(e) => setTech(e.target.value)}
            >
              <option value="" disabled>
                Select Technicin
              </option>
              <option value="Jhon Doe">Jhon Doe</option>
              <option value="Sam Doe">Sam Doe</option>
              <option value="Jhon Alaa">Jhon Alaa</option>
              <option value="Main Doe">Main Doe</option>
              <option value="Mom Doe">Mom Doe</option>
            </select>
          </div>
        </div>
        <div className="row">
          <div className="input-field">
            <label>
              <input
                type="checkbox"
                className="filled-in"
                checked={getAttention}
                value={getAttention}
                onChange={() => setAttention(!getAttention)}
              />
              <span>Need Attention</span>
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

export default EditLogModal;