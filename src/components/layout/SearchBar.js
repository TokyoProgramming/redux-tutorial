import React, { useRef } from 'react';
import { connect } from 'react-redux';
import { searchLogs } from '../../actions/logActions';

function SearchBar({ searchLogs }) {
  const text = useRef('');

  const onChange = (e) => {
    searchLogs(text.current.value);
  };
  return (
    <div>
      <nav style={{ marginBottom: '3opx' }} className="blue">
        <div className="nav-wrapper">
          <form>
            <div className="input-field">
              <input
                id="search"
                type="search"
                placeholder="search Logs"
                ref={text}
                onChange={onChange}
              />
              <label className="label-icon" for="search">
                <i className="material-icons">search</i>
              </label>
              <i className="material-icons">close</i>
            </div>
          </form>
        </div>
      </nav>
    </div>
  );
}

export default connect(null, { searchLogs })(SearchBar);
