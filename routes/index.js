var express = require('express')
var router = express.Router()
var request = require('request')
var JSDOM = require('jsdom').JSDOM
var Readability = require('readability')

/* GET home page. */
router.get('/*', function (req, res, next) {
  if (req.path.startsWith('/') && req.path.length > 1) {
    var url = req.path.substring(1)
    console.log(url)
    request(url, function (error, response, body) {
      var doc = new JSDOM(body)
      var reader = new Readability(doc.window.document)
      var article = reader.parse()
      res.render('readerView', {readerContent: cleanContent})
    })
  }
  else {
    res.sendStatus(200);
  }
})

module.exports = router
