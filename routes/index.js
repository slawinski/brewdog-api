var express = require('express');
var router = express.Router();
const fetch = require('node-fetch');

router.get('/search', function(req, res) {
  var url = ('https://api.punkapi.com/v2/beers?ids=' + req.query.id +
    '&tagline=' + req.query.name + '&image_url=' + req.query.image_url);
  console.log('>>>>>>>>>>>>>> GET using Node', url)
  fetch(url)
    .then(function(res) {
      return res.json();
    })
    .then(function(results) {
      res.render('jsonData', {
        showResults: results
      });
    });
});

module.exports = router;
