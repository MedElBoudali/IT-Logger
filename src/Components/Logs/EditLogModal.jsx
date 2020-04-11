import React, { useState, useEffect } from "react";
import { connect } from "react-redux";
import { updateLog } from "../../Actions/LogActions";
import M from "materialize-css/dist/js/materialize";
import PropTypes from "prop-types";

const EditLogModal = ({ current, updateLog }) => {
  const [getMessage, setMessage] = useState("");
  const [getAttention, setAttention] = useState(false);
  const [getTech, setTech] = useState("");

  useEffect(() => {
    if (current) {
      setMessage(current.message);
      setTech(current.tech);
      setAttention(current.attention);
    }
  }, [current]);

  const onSubmit = () => {
    if (getMessage === "" || getTech === "") {
      M.toast({ html: "Please Enter Message and Tech" });
    } else {
      const data = {
        id: current.id,
        message: getMessage,
        attention: getAttention,
        tech: getTech,
        date: new Date(),
      };
      updateLog(data);
      setMessage("");
      setTech("");
      setAttention(false);
      M.toast({html: `Log Updated For ID: ${current.id}, Tech: ${getTech}`});
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
            {/* <label htmlFor="message" className="active">
              Log Message
            </label> */}
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
          Save Log
        </a>
      </div>
    </div>
  );
};

EditLogModal.propTypes = {
  current: PropTypes.object,
  updateLog: PropTypes.func.isRequired,
};

const mapStateToPtops = (state) => ({ current: state.log.current });

export default connect(mapStateToPtops, { updateLog })(EditLogModal);
