
// external lib
var request = require('request');

var options = {
  url: 'https://api.github.com/repos/request/request',
  headers: {
    'User-Agent': 'request'
  }
};

request.post(
  'https://movielens.org/api/sessions',
  {form:{userName:'a', password: 'a'}},
  function(err, httpResponse, body) {
    console.log(err)
    console.log(httpResponse)
    console.log(body)
  })
