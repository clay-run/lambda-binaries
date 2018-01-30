// Add tesseract binaries
require('tesseract-lambda');
// Add libraries
const Tesseract = require('tesseract.js');
var request = require('request')
var rp = require('request-promise-native')
var fs = require('fs-extra');
var testUrl ='https://s3-us-west-2.amazonaws.com/clay-temporary-data/naval_tweet.png';
var tempFile = '/tmp/test.png'

exports.handler = function(event, context, callback) {
  // Assumes that event.vars.url contains a link to an image to be OCR'd
  var image = event.vars.url || testUrl;
  // Download the image to the local file system /tmp/test.png
  // Assumes that the image is a .png
  rp(image, {encoding: null})
    .then((data) => {
      return(fs.writeFile(tempFile, data))
    })
    .then(() => {
      return Tesseract.recognize(tempFile)
    })
    .then((result) => {
      Tesseract.terminate();
      callback(null, {text: result.text});
    })
    .catch(err => {
      callback(err)
    })
}
