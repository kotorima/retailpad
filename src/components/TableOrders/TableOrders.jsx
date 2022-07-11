import React from 'react';
import PropTypes from 'prop-types';
import OrderItem from '../OrderItem/OrderItem';


function TableOrders ({orders}) {

  return (
      <ul> 
        {orders.map(({id, 
                      payment_type,
                      receipt,
                      time,
                      date, 
                      traffic, 
                      status_color, 
                      delivery_method,
                      phone,
                      client_id,
                      email,
                      filial_id,
                      filial_id_transfer,
                      person,
                      total_summ,
                      is_allow_return,
                      sender_name,
                      discount_sum,
                      change_summ,
                      uds_order_id,
                      comment,
                      client,
                    }) => (
          <OrderItem 
            key={id} 
            receipt={receipt} 
            paymentType={payment_type} 
            time={time.slice(-8)} 
            date={date} 
            traffic={traffic} 
            statusColor={status_color}
            deliveryMethod={delivery_method}
            phone={phone}
            clientId={client_id}
            email={email}
            orderId={id}
            filialId={filial_id}
            transferId={filial_id_transfer}
            personCount={Number(person)}
            totalSum={Number(total_summ)}
            isAllowReturn={Boolean(is_allow_return)}
            customerName={sender_name}
            discountSum={Number(discount_sum)}
            clientBill={Number(change_summ)}
            udsId={uds_order_id !== "" && uds_order_id !== "0"} 
            comment={comment}
            client={client}
            />
        ))}
      </ul>
  )
}

TableOrders.defaultProps = {
  orders: [],
};

TableOrders.propTypes = {
  orders: PropTypes.arrayOf(PropTypes.oneOfType([PropTypes.object])),
};


export default TableOrders;
