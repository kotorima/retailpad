import React from 'react';
import PropTypes from 'prop-types';
import { useSelector} from 'react-redux';
import { Button} from '@mui/material';
import OrdersDropdown from './OrdersDropdown';
import styles from './styles.module.scss';
import currencyConversion from '../../helpers/currencyConversion';
import nameDetermineByType from '../../helpers/nameDetermineByType';
import { selectStatusesList } from '../../store/slices/statusesList';

/* eslint-disable no-unused-vars */

function OrderItem({receipt, 
                      paymentType, 
                      time, 
                      date, 
                      traffic, 
                      statusColor, 
                      deliveryMethod, 
                      phone,
                      clientId,
                      email,
                      orderId,
                      filialId,
                      transferId,
                      personCount,
                      totalSum,
                      isAllowReturn,
                      customerName,
                      discountSum,
                      clientBill,
                      udsId,
                      comment,
                      client,}) {
  const {foodList, body, order, head, col} = styles;
  const {is_find_another_order: anotherOrder, order_list: clientOrderList} = client;
  const statusesList = useSelector(selectStatusesList);

  const changeCalculation = (bill, total) => {
    const userBill = bill * 100;
    let sum = userBill - total;
    sum = currencyConversion(sum);
    return sum;
  }

  return (
    <li className={order}>
        <div className={head}>
          <div>
            <span>{`${time} ${date} (№ ${orderId}) ${traffic}`}</span>
            <Button type='button' variant='contained' onClick={() => console.log(client)}>Возврат</Button>
            <Button type='button' variant='contained' onClick={() =>  console.log('im here 2')}>Печать</Button>
            {anotherOrder ? 
                <OrdersDropdown options={clientOrderList} clientId={clientId}/>
            : null}
          </div>
          <div>
            <Button type='button' variant='contained' onClick={() => console.log('im here 3')}>Редактировать</Button>
          </div>
          </div>
        <div className={body}>
          <div className={col}>
          {receipt.map(({count, name, price, product_id}) => (
            <div key={product_id} className={foodList}>
              <div>{name}</div>
              <div>{count}</div>
              <div>{currencyConversion(price)}</div>
            </div>
          ))}
          </div>
          <div>
            <div>{currencyConversion(totalSum)}</div>
            {clientBill ? 
              <>
                <div>Купюра клиента: <span>{clientBill}</span></div>
                <div>Сдача: <span>{changeCalculation(clientBill, totalSum)}</span></div>
              </>
            : null}
          </div>
          <div>
            <div>{nameDetermineByType(paymentType)}</div>
            <div>{nameDetermineByType(deliveryMethod)}</div>
            {personCount ? 
              <div>кол-во персон {personCount}</div>
            : null}
            {udsId || discountSum ? 
              <div>Списано бонусов: {currencyConversion(discountSum)}</div>
            : null}
          </div>
          <div>
            {deliveryMethod === 'courier' ?
              <div>
                { comment !== '' ? 
                  <div>{comment}</div>
                : null}
              </div>
            : null}
          </div>
          <div>
            {customerName !== '' ? 
              <div>{customerName}</div>
            : null}
            {phone !== '' ?
              <div>
                <a href={`tel:${phone}`}>{phone}</a>
              </div>
            : null}
          </div>
          </div>
      </li>
  );
}

OrderItem.defaultProps = {
  receipt: [],
  paymentType: '',
  time: '',
  date: '',
  traffic: '',
  statusColor: '',
  deliveryMethod: '',
  phone: '',
  clientId: '',
  email: '',
  orderId: '',
  filialId: '',
  personCount: 1,
  totalSum: 0,
  isAllowReturn: false,
  customerName: '',
  discountSum: 0,
  clientBill: 0,
  udsId: false,
  comment: '',
  client: {},
};

OrderItem.propTypes = {
  receipt: PropTypes.arrayOf(PropTypes.oneOfType([PropTypes.object])),
  paymentType: PropTypes.string,
  time: PropTypes.string,
  date: PropTypes.string,
  traffic: PropTypes.string,
  statusColor: PropTypes.string,
  deliveryMethod: PropTypes.string,
  phone: PropTypes.string,
  clientId: PropTypes.string,
  email: PropTypes.string,
  orderId: PropTypes.string,
  filialId: PropTypes.string,
  transferId: PropTypes.string,
  personCount: PropTypes.number,
  totalSum: PropTypes.number,
  isAllowReturn: PropTypes.bool,
  customerName: PropTypes.string,
  discountSum: PropTypes.number,
  clientBill: PropTypes.number,
  udsId: PropTypes.bool,
  comment: PropTypes.string,
  client: PropTypes.oneOfType([PropTypes.array, PropTypes.object])
};

export default OrderItem;
