import React, {useState} from 'react';
import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import {Menu, MenuItem, ThemeProvider, Button} from '@mui/material';
import useNotice from '../Notification/useNotice';
import fetchRequest from '../../helpers/fetchRequest';
import themes from '../../helpers/themes';
import {getOrdersList} from '../../helpers/linksForRequests';
import { enqueueSnackbar as enqueueSnackbarStore } from '../../store/slices/notifications';

function  OrdersDropdown({ options, clientId}) {
  const [anchorEl, setAnchorEl] = useState(null);
  const open = Boolean(anchorEl);
  const dispatch = useDispatch();
  const enqueueSnackbar = (args) => dispatch(enqueueSnackbarStore(args));
  
  const noticeProps = (props) => { 
    /* eslint-disable-next-line */
    const {key, variant} = props;
    const customProps = {
      button: {
        type: 'icon',
        icon: 'CloseSharp',
        color: variant,
      },
      alert: {
        variant,
      },
      notice: {
        variant,
        id: key,
      },
      message: 'Ждем когда организуют фильтрацию на беке',
    }

    return customProps;
  }

  useNotice(noticeProps);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };


  const filterOut = () => {
    const param = `filter[client_id]=${Number(clientId)}`;

    fetchRequest(getOrdersList, 'POST', 'application/x-www-form-urlencoded', param).then(() => {
      const keyInit = new Date().getTime() + Math.random();

      enqueueSnackbar({
        options: {
          anchorOrigin: {
            vertical: 'bottom',
            horizontal: 'right',
          },
          key: keyInit,
          variant: 'success',
          autoHideDuration: null,
        }
      })
    });
  
  };

  

  return (
    <ThemeProvider theme={themes}>
       <Button variant='link' onClick={handleClick}>{`У клиента есть другие заказы (${options.length})`}</Button>
       <Menu
          id='basic-menu'
          anchorEl={anchorEl}
          open={open}
          onClose={handleClose}
          MenuListProps={{
          'aria-labelledby': 'basic-button',
          }}
        > 
          <MenuItem onClick={filterOut}>
            <Button type='button' variant='contained'>Отфильтровать заказы</Button>
          </MenuItem>
          {options.map(({order_id, status_id}) => 
            <MenuItem variant='notActive' key={order_id} onClick={handleClose}>{`№${order_id} - ${status_id}`}</MenuItem>
          )}
        </Menu>
    </ThemeProvider>
  );
}

OrdersDropdown.defaultProps = {
  options: [],
  clientId: '',
};

OrdersDropdown.propTypes = {
  options: PropTypes.arrayOf(PropTypes.object),// eslint-disable-line
  clientId: PropTypes.string,
};

export default OrdersDropdown;