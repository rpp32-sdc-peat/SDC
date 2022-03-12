const axios = require('axios');

const url = require('../../config2.js');

module.exports = {
  getProduct: async (req, res) => {
    await axios.get(`http://3.230.184.160:3000/products/?product_id=${req.query.product_id}`)
    .then(result => {
      console.log(req)
      res.send(result.data)
    })
    .catch(err => {
      res.status(500).send(`Error: ${err}`)
    })
  }
}

