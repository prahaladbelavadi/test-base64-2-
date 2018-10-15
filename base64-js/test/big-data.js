var test = require('tape')
var b64 = require('../')
var fs  =  require('fs')
test('convert big data to base64', function (t) {
  var b64str, arr, i, length
  var big = new Uint8Array(64)
  for (i = 0, length = big.length; i < length; ++i) {
    big[i] = i % 256
  }
  b64str = b64.fromByteArray(big)
  arr = b64.toByteArray(b64str)
  console.log(b64str);
  console.log(arr);
  // fs.writeFile('binaryTest', arr, (err)=>{
  //   if (err)throw err;
  //   console.log('works');
  // })
  //
  // fs.open('binaryTest', 'r', (err, fd) => {
  //   if (err) {
  //     if (err.code === 'ENOENT') {
  //       console.error('myfile does not exist');
  //       return;
  //     }
  //     throw err;
  //   }
  //   readMyData(fd);
  // });

  t.ok(equal(arr, big))
  t.equal(b64.byteLength(b64str), arr.length)
  t.end()
})

function equal (a, b) {
  var i
  var length = a.length
  if (length !== b.length) return false
  for (i = 0; i < length; ++i) {
    if (a[i] !== b[i]) return false
  }
  return true
}
