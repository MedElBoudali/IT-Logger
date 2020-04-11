import React from "react";
import { connect } from "react-redux";
import { deleteLog, setCurrent } from "../../Actions/LogActions";
import M from "materialize-css/dist/js/materialize";
import Moment from "moment";
import PropTypes from "prop-types";

const LogItem = ({
  log: { id, message, attention, tech, date },
  deleteLog,
  setCurrent,
}) => {
  return (
    <li
      className={`collection-item  ${
        attention ? "red lighten-5" : "blue lighten-5"
      }`}
    >
      <a
        href="#edit-log-modal"
        className={`modal-trigger ${attention ? "red-text" : "blue-text"}`}
        onClick={() => setCurrent({ id, message, attention, tech, date })}
      >
        {message}
      </a>
      <br />
      <span className="grey-text">
        <span className="black-text">ID #{id}</span> Last updated by{" "}
        <span className="black-text">{tech}</span> on{" "}
        <i className="tiny material-icons mr5">access_time</i>
        {Moment(date).format("hh:mm - MM/DD")}
      </span>
      <a
        href="#!"
        className="secondary-content"
        onClick={() => {
          deleteLog(id);
          M.toast({ html: `Log Deleted For: ${tech} With ID: ${id}` });
        }}
      >
        <i className="material-icons grey-text">delete</i>
      </a>
    </li>
  );
};

LogItem.propTypes = {
  log: PropTypes.object.isRequired,
  deleteLog: PropTypes.func.isRequired,
  setCurrent: PropTypes.func.isRequired,
};

export default connect(null, { deleteLog, setCurrent })(LogItem);
