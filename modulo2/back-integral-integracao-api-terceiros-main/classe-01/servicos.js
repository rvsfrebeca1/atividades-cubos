const axios = require('axios');
const instanceAxios = axios.create({
  baseURL: 'https://companyenrichment.abstractapi.com/v1/',
  params: {
    api_key: '4aec076575244aaab09a8bda64e4893a'
  }
});


module.exports = instanceAxios

