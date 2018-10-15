var btoa = require('btoa')

// var b64 = require('./')
// var test = require('tape')
//
//
// b64Str = b64.fromByteArray(map(check, function (char) { return char.charCodeAt(0) }))
// console.log('base 64 string:',b64Str);
// arr = b64.toByteArray(b64Str)
// console.log('byteArray:',arr);
// str = map(arr, function (byte) { return String.fromCharCode(byte) }).join('')
// console.log('Check:',check);
// console.log('string:',str);
//


// var test = require('tape')
// var b64 = require('../')
//
// test('convert big data to base64', function (t) {
//   var b64str, arr, i, length
//   var big = new Uint8Array(8)
//   for (i = 0, length = big.length; i < length; ++i) {
//     big[i] = i % 256
//   }
//   b64str = b64.fromByteArray(big)
//   arr = b64.toByteArray(b64str)
//   console.log(arr);
//   t.ok(equal(arr, big))
//   console.log(arr);
//   t.equal(b64.byteLength(b64str), arr.length)
//   t.end()
// })
//
// function equal (a, b) {
//   var i
//   var length = a.length
//   if (length !== b.length) return false
//   for (i = 0; i < length; ++i) {
//     if (a[i] !== b[i]) return false
//   }
//   return true
// }




// function bufferToBase64(buf) {
//     var binstr = Array.prototype.map.call(buf, function (ch) {
//         return String.fromCharCode(ch);
//     }).join('');
//     return btoa(binstr);
// }
// data  = new Uint8Array(64)
// var base64 = bufferToBase64(data);
// console.log(base64);




var str = 'SQ==QU0='
assert.strictEqual(b64.toByteArray(str), new Uint8Array([73]))
t.equal(b64.byteLength(str), 1)
t.end()
