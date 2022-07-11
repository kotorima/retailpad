import React, {useEffect, useState} from 'react';
import { useSelector, useDispatch} from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { Button } from '@mui/material';
import PropTypes from 'prop-types';
import WebSocket from '../components/WebSocket';
import Search from '../components/Search/Search';
import TableOrders from '../components/TableOrders/TableOrders';
import addTitlePage from '../helpers/addTitlePage';
import {selectFilialsList} from '../store/slices/filialsList';
import {addStatuses} from '../store/slices/statusesList';
import fetchRequest from '../helpers/fetchRequest';
import {getOrdersList, getStatusesList, webSocketUrl} from '../helpers/linksForRequests';

function OrdersList({title}) {
  const [orders, setOrders] = useState([]);
  const [statuses, setStatuses] = useState(null);
  const navigate = useNavigate();
  const filialsList = useSelector(selectFilialsList);
  const dispatch = useDispatch();

  const renderOrderList = ({order_list}) => {
    setOrders(order_list);
  }

  const renderStatusesList = (list) => {
    setStatuses(list);
    dispatch(addStatuses(list));
  }

  useEffect(() => {
    addTitlePage(title);
    if(!statuses) fetchRequest(getStatusesList).then(data => renderStatusesList(data));
    if(!orders.length) fetchRequest(getOrdersList).then(data => renderOrderList(data));
  });



  return (
    <div>
        <h1>{title}</h1>
        <WebSocket url={webSocketUrl}/>
        <Search optionList={filialsList}/>
        <Button type='button' variant='contained' onClick={() => navigate('/add-order')}>Перейти на страницу Добавления Заказа</Button>
        {orders.length ?
          (<TableOrders orders={orders} />)
          : null}
    </div>
  );
};

OrdersList.defaultProps = {
  title: '',
};

OrdersList.propTypes = {
  title: PropTypes.string,
};

export default OrdersList;
