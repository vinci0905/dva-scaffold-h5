import React, { PropTypes } from 'react';
import { connect } from 'dva';
import OrdersList from '../components/Orders/List';

import styles from './Orders.css';

function Orders({ location, dispatch, orders }) {
    const { isLoading, list } = orders;

    const orderListProps = {
        list: list,
        isLoading,
        query (page) {
            dispatch({
              type: 'orders/query',
              payload: {}  
            });
        }
    };
    return (
        <div className={styles.normal}>
          <OrdersList {...orderListProps} />
        </div>
    );
}

Orders.propTypes = {
  orders: PropTypes.object,
  location: PropTypes.object,
  dispatch: PropTypes.func
}

function mapStateToProps({ orders }) {
  return { orders };
}

export default connect(mapStateToProps)(Orders);
