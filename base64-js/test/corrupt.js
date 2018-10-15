var test = require('tape')
var b64 = require('../')

test('padding bytes found inside base64 string', function (t) {

  var str = 'SQ==QU0='
  console.log(b64.toByteArray(str));
  t.deepEqual(b64.toByteArray(str), new Uint8Array([73]))
  t.equal(b64.byteLength(str), 1)
  t.end()
})
