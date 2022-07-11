import React, {useEffect} from 'react';
import PropTypes from 'prop-types';
import addTitlePage from '../helpers/addTitlePage';

function StopLists({title}) {
  useEffect(() => addTitlePage(title));

  return (
    <div>
        <h1>{title}</h1>
    </div>
  );
}

StopLists.defaultProps = {
  title: "",
};

StopLists.propTypes = {
  title: PropTypes.string,
};

export default StopLists;