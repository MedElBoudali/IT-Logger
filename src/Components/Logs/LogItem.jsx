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
        <span className="black-text">{log.tech}</span> on <i className="tiny material-icons mr5">access_time</i>
        {Moment(log.date).format("DD/MMMM/YYYY - hh:mm")}
      </span>
      <a href="#!" className="secondary-content"><i className="material-icons grey-text">delete</i></a>
    </li>
  );
};

LogItem.propTypes = {
  log: PropTypes.object.isRequired,
};

export default LogItem;
