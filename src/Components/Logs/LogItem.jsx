import React from "react";
import Moment from "moment";
import PropTypes from "prop-types";

const LogItem = ({ log }) => {
  return (
    <li className="collection-item">
      <a
        href="#edit-log-modal"
        className={`modal-trigger ${log.attention ? "red-text" : "blue-text"}`}
      >
        {log.message}
      </a>
      <br />
      <span className="grey-text">
        <span className="black-text">ID #{log.id}</span> Last updated by{" "}
        <span className="black-text">{log.tech}</span> on{" "}
        {Moment(log.date).format("MMMM Do YYYY, h:mm:ss a")}
      </span>
      <a href="#!" className="secondary-content"><i className="material-icons grey-text">delete</i></a>
    </li>
  );
};

LogItem.propTypes = {
  log: PropTypes.object.isRequired,
};

export default LogItem;
