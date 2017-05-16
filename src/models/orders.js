import { query } from '../services/orders';
import { parse } from 'qs';

const param = {};

export default {
  namespace: 'orders',
  state: {
    /*list state*/
    list: [],
    isLoading: false
  },
  subscriptions: {
    /*setup ({ dispatch, history }) {
      history.listen(location => {
        if (location.pathname === '/orders') {
          dispatch({
            type: 'query',
            payload: {}
          })
        }
      })
    },*/
  },
  effects: {
    *query ({ payload }, { call, put }) {
      yield put({ type: 'showLoading' });
      const data = yield call(query, payload);
      if (data.data) {
        yield put({ 
          type: 'querySuccess', 
          payload: {
            list: data.data.list
          }
        });
      } 
    }
  },
  reducers: {
    showLoading (state) {
      return { ...state, isLoading: true }
    },
    querySuccess (state, action) {
      return { ...state, ...action.payload, isLoading: false }
    }
  },
};
