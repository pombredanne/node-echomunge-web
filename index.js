/*
 * Usage: node ./ [Wikipedia page name]
 *
 *   e.g: node ./                   <-- fetch a random Wikipedia page
 *        node ./ Winston_Churchill <-- fetch the Winston Churchill Wikipedia page
 */

const WIKIPEDIA_ROOT       = 'http://en.wikipedia.org/wiki/'
    , DEFAULT_URL          = WIKIPEDIA_ROOT + 'Special:Random'
    , MIN_PARAGRAPHS       = 20

var request    = require('request')
  , cheerio    = require('cheerio')
  , EchoMunge  = require('echomunge')

  , db         = new EchoMunge()
  , urls       = []
  , paragraphs = 0

  , proc       = function (body) {
      return cheerio.load(body)('p').each(function () {
        var text = this.text().replace(/\[\d+\]/g, '') // clean up
        //console.log(text)
        db.recordText(text)
      }).length
    }

  , fetch      = function (url, callback) {
      request(
          { url: url, headers: { 'User-Agent': 'EchoMunge Example https://github.com/rvagg/node-echomunge' } }
        , function (err, resp, body) {
            callback(err, resp.request.href, body)
          }
      )
    }

  , loop       = function (_url, cb, _l) {
      var fetchUrl = !_url
        ? DEFAULT_URL
        : /^http/.test(_url)
          ? _url
          : WIKIPEDIA_ROOT + _url

      if (paragraphs < MIN_PARAGRAPHS && (fetchUrl == DEFAULT_URL || _l == null)) {
        fetch(fetchUrl, function (err, url, body) {
          if (err) return cb(err)
          urls.push(url)
          paragraphs += proc(body)
          loop(_url, cb, _l ? _l + 1 : 1)
        })
      } else {
        if (!db.hasData())
          return cb('Could not collect enough data from the page')
        cb(null, db, urls, paragraphs)
      }
    }

module.exports = loop