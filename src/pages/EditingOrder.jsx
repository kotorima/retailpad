import React, {useEffect} from 'react';
import PropTypes from 'prop-types';
import addTitlePage from '../helpers/addTitlePage';

function EditingOrder({title}) {
  useEffect(() => addTitlePage(title));

  return (
    <div>
        <h1>{title}</h1>
    </div>
  );
}

EditingOrder.defaultProps = {
  title: "",
};

EditingOrder.propTypes = {
  title: PropTypes.string,
};

export default EditingOrder;