var test = require('tape')
var b64 = require('../')
var checks = [
  'SQ==QU0='
]

test('convert to base64 and back', function (t) {
  t.plan(checks.length * 2)

  for (var i = 0; i < checks.length; i++) {
    var check = checks[i]
    var b64Str, arr, str

    b64Str = b64.fromByteArray(map(check, function (char) {
      return char.charCodeAt(0) }
    ))
    console.log(b64Str);

    arr = b64.toByteArray(b64Str)
    console.log(arr);
    str = map(arr, function (byte) { return String.fromCharCode(byte) }).join('')
    console.log('Check:',check);
    t.equal(check, str, 'Checked ' + check)
    t.equal(b64.byteLength(b64Str), arr.length, 'Checked length for ' + check)
  }
})

function equal (a, b) {
  var i
  var length = a.length
  if (length !== b.length) return false
  for (i = 0; i < length; ++i) {
    if ((a[i] & 0xFF) !== (b[i] & 0xFF)) return false
  }
  return true
}

function map (arr, callback) {
  var res = []
  var kValue, mappedValue

  for (var k = 0, len = arr.length; k < len; k++) {
    if ((typeof arr === 'string' && !!arr.charAt(k))) {
      kValue = arr.charAt(k)
      mappedValue = callback(kValue, k, arr)
      res[k] = mappedValue
    } else if (typeof arr !== 'string' && k in arr) {
      kValue = arr[k]
      mappedValue = callback(kValue, k, arr)
      res[k] = mappedValue
    }
  }
  return res
}
