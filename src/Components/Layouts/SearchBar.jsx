import React, { useRef } from "react";
import { connect } from "react-redux";
import { searchLogs } from "../../Actions/LogActions";
import PropTypes from "prop-types";

const SearchBar = ({ searchLogs }) => {
  const text = useRef("");

  const onChange = () => {
    searchLogs(text.current.value);
  };

  return (
    <nav className="purple darken-3">
      <div className="nav-wrapper">
        <form>
          <div className="input-field">
            <input
              id="search"
              type="search"
              placeholder="Search Logs ..."
              ref={text}
              onChange={onChange}
            />
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
