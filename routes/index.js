var express = require('express');
var router = express.Router();
var fs = require('fs');
var path = require('path');

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Monumentos de Málaga' });
});

/* API GEOJSON */
router.get('/api/monumentos', function(req, res) {

  const filePath = path.join(__dirname, '../data/monumentos.geojson');

  fs.readFile(filePath, 'utf8', (err, data) => {

    if (err) {
      return res.status(500).json({
        error: "Error leyendo el archivo GeoJSON"
      });
    }

    res.json(JSON.parse(data));

  });

});

module.exports = router;