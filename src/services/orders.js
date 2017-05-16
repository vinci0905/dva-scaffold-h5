import request from '../utils/request';

export async function query (params) {
  return request('/api/orders', {
    method: 'post',
    data: params
  })
}
