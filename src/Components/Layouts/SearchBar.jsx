import React from "react";
import { connect } from "react-redux";
import { searchLogs } from "../../Actions/LogActions";
import PropTypes from "prop-types";

const SearchBar = ({ searchLogs }) => {
  const onChange = (e) => {
    // e.preventDefault();
    // searchLogs(e.target.value);
    console.log(e)
  };
  return (
    <nav className="purple darken-3">
      <div className="nav-wrapper">
        <form>
          <div className="input-field">
            <input id="search" type="search" placeholder="Search Logs ..." onChange={onChange} />
            <label className="label-icon" htmlFor="search">
              <i className="material-icons">search</i>
            </label>
            <i className="material-icons">close</i>
          </div>
        </form>
      </div>
    </nav>
  );
};

SearchBar.prototype = {
  searchLogs: PropTypes.func.isRequired,
};

export default connect(null, { searchLogs })(SearchBar);
