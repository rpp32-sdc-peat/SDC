const axios = require('axios');

exports.productOverview = {
  getProducts: async (req, res) => {
    await axios.get(`http://localhost:8080/products`, { params: { page: req.params.page, count: req.params.count } })
      .then(result => res.status(200).send(result.data))
      .catch(err => res.status(500).send('DB Access Error: ' + err));
  },

  getProduct: async (req, res) => {
    await axios.get(`http://localhost:8080/products/${Number(req.params.product_id)}`)
      .then(result => res.status(200).send(result.data))
      .catch(err => res.status(500).send('DB Access Error: ' + err));
  },

  getStyles: async (req, res) => {
    await axios.get(`http://localhost:8080/products/${Number(req.params.product_id)}/styles`)
      .then(result => res.status(200).send(result.data))
      .catch(err => res.status(500).send('DB Access Error: ' + err));
  },

  getRelatedProducts: async (req, res) => {
    await axios.get(`http://localhost:8080/products/${Number(req.params.product_id)}/related`)
      .then(result => res.status(200).send(result.data))
      .catch(err => res.status(500).send('DB Access Error: ' + err));
  }
}
