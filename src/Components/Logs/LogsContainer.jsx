import React, { useEffect } from "react";
import { connect } from "react-redux";
import { getLogs } from "../../Actions/LogActions";
import Logo from "../../Assets/Images/logo.webp";
import LogItem from "./LogItem";
import Preloader from "../Layouts/Preloader";
import PropTypes from "prop-types";

const LogsContainer = ({ log: { logs, loading }, getLogs }) => {
  useEffect(() => {
    getLogs();
    // eslint-disable-next-line
  }, []);

  if (loading || logs === null) {
    return <Preloader />;
  }

  return (
    <ul className="collection with-header">
      <li className="collection-header">
        <h4 className="header center">
          <img className="logo" src={Logo} alt="Logo" /> System Logs
        </h4>
      </li>
      {!loading && logs.length === 0 ? (
        <p className="center">No Logs To Show !</p>
      ) : (
        logs.map((log) => <LogItem log={log} key={log.id} />)
      )}
    </ul>
  );
};

LogsContainer.prototype = {
  log: PropTypes.object.isRequired,
  getLogs: PropTypes.func.isRequired,
};

const mapStateToProps = (state) => ({ log: state.log });

export default connect(mapStateToProps, { getLogs })(LogsContainer);
