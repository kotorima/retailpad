import React, {useEffect} from 'react';
import PropTypes from 'prop-types';
import addTitlePage from '../helpers/addTitlePage';

function CashRegister({title}) {

  useEffect(() => addTitlePage(title));

  return (
    <div>
        <h1>{title}</h1>
    </div>
  );
}

CashRegister.defaultProps = {
  title: "",
};

CashRegister.propTypes = {
  title: PropTypes.string,
};

export default CashRegister;