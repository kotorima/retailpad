import React, {useEffect} from 'react';
import PropTypes from 'prop-types';
import addTitlePage from '../helpers/addTitlePage';

function SettingsTerminal({title}) {
  useEffect(() => addTitlePage(title));

  return (
    <div>
        <h1>{title}</h1>
    </div>
  );
}

SettingsTerminal.defaultProps = {
  title: "",
};

SettingsTerminal.propTypes = {
  title: PropTypes.string,
};


export default SettingsTerminal;