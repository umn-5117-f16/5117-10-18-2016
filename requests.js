
// alternative to http
var request = require('request');

// support cookies on filesystem
var FileCookieStore = require('tough-cookie-filestore');
var j = request.jar(new FileCookieStore('cookies.json'));

request = request.defaults({
  jar: j,
  baseUrl: 'https://movielens.org'
})

var httpCallback = function callback(error, response, body) {
  if (!error && response.statusCode == 200) {
    var info = JSON.parse(body);
    console.log(JSON.stringify(info, null, 2))
  } else {
    console.log("failed... %s", response.statusCode)
    console.log(body)
  }
}

var api = {

  login: function() {
    request.post({
      url: '/api/sessions',
      headers: {
        'content-type': 'application/json',
        'User-Agent': 'request'
      },
      body: JSON.stringify({userName: '', password: ''})
    }, httpCallback)
  },

  logout: function() {
    request.delete({url: '/api/sessions/me'}, httpCallback)
  },

  movie: function(movieId) {
    request.get('/api/movies/' + movieId, httpCallback)
  }
}

// api.login()
// api.movie(1)
api.logout();
