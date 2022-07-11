import React, {forwardRef} from 'react';
import PropTypes from 'prop-types';
import CloseSharp from '@mui/icons-material/CloseSharp';
import { SnackbarContent } from 'notistack';
import {Box, Alert as MuiAlert, Button as MuiButton, IconButton as MuiIconButton} from '@mui/material';
/* variants: "error", "warning", "info", "success" */

const Alert = forwardRef((props, ref) => {
  const {children, variant, message} = props;

  return (
    <MuiAlert elevation={6} ref={ref} severity={variant} {...props}>
      {children && children.length ? children : message}
    </MuiAlert>
  )
});

const Button = forwardRef((props, ref) => {
  const {text, type, action} = props;
  let button;

  if(type === 'icon'){
    button = (
      <MuiIconButton ref={ref} onClick={action} {...props}>
        <CloseSharp />
      </MuiIconButton>
    );
  } else {
    button = (
      <MuiButton ref={ref} onClick={action} {...props}>
        {text}
      </MuiButton>
    );
  }

  return button;
});

const Notification = forwardRef((props, ref) => {
  const {notice, button, alert, message} = props;
  const hasObjectProps = (object) => Object.keys(object).length > 0;

  return (
    <Box {...notice}>
      <SnackbarContent ref={ref}>
        { hasObjectProps(alert) ? <Alert message={message} {...alert} /> : <div>{message}</div>  }
        { hasObjectProps(button) ? <Button {...button} /> : null }
      </SnackbarContent>
    </Box>
  );
});

Notification.defaultProps = {
  notice: {},
  alert: {},
  button: {},
  message: '',
};

Notification.propTypes = {
  notice: PropTypes.objectOf(PropTypes.any),
  alert: PropTypes.objectOf(PropTypes.any),
  button: PropTypes.objectOf(PropTypes.any),
  message: PropTypes.string,
};

Alert.propTypes = {
  children: PropTypes.element, 
  variant: PropTypes.string, 
  message: PropTypes.string,
};

Button.propTypes = {
  action: PropTypes.func, 
  type: PropTypes.string, 
  text: PropTypes.string,
};

export default Notification;