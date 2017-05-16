const orders = require('./data/orders');

  
export default {
  
  'POST /api/orders'(req, res) {
    res.json(orders); 
  },
  
};