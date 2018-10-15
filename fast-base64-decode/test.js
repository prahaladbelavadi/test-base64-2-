const assert = require('assert')
const base64Decode = require('./')

{
  const actual = new Uint8Array(0)
  const expected = new Uint8Array([])

  base64Decode('', actual)

  assert.strictEqual(actual.join(), expected.join())
}

{
  const actual = new Uint8Array(1)
  const expected = new Uint8Array([104])

  base64Decode('aA==', actual)

  assert.strictEqual(actual.join(), expected.join())
}

{
  const actual = new Uint8Array(2)
  const expected = new Uint8Array([108, 177])

  base64Decode('bLE=', actual)

  assert.strictEqual(actual.join(), expected.join())
}

{
  const actual = new Uint8Array(3)
  const expected = new Uint8Array([89, 44, 170])

  base64Decode('WSyq', actual)

  assert.strictEqual(actual.join(), expected.join())
}

{
  const actual = new Uint8Array(4)
  const expected = new Uint8Array([78, 235, 7, 217])

  base64Decode('TusH2Q==', actual)

  assert.strictEqual(actual.join(), expected.join())
}

{
  const actual = new Uint8Array(5)
  const expected = new Uint8Array([49, 88, 141, 17, 78])

  base64Decode('MViNEU4=', actual)

  assert.strictEqual(actual.join(), expected.join())
}

{
  const actual = new Uint8Array(20)
  const expected = new Uint8Array([211, 45, 212, 184, 19, 18, 115, 110, 149, 78, 232, 95, 246, 15, 237, 157, 128, 150, 221, 159])

  base64Decode('0y3UuBMSc26VTuhf9g/tnYCW3Z8=', actual)

  assert.strictEqual(actual.join(), expected.join())
}

{
  const actual = new Uint8Array(21)
  const expected = new Uint8Array([158, 58, 169, 238, 46, 244, 21, 193, 4, 78, 159, 83, 107, 250, 2, 217, 213, 222, 109, 124, 135])

  base64Decode('njqp7i70FcEETp9Ta/oC2dXebXyH', actual)

  assert.strictEqual(actual.join(), expected.join())
}

{
  const actual = new Uint8Array(22)
  const expected = new Uint8Array([43, 6, 64, 249, 228, 121, 219, 174, 24, 90, 155, 254, 198, 232, 208, 244, 248, 11, 157, 42, 130, 91])

  base64Decode('KwZA+eR5264YWpv+xujQ9PgLnSqCWw==', actual)

  assert.strictEqual(actual.join(), expected.join())
}

{
  const actual = new Uint8Array(4)
  const expected = new Uint8Array([104, 105, 33, 33])

  base64Decode('aGkhIQ==', actual)

  assert.strictEqual(actual.join(), expected.join())
}

{
  const actual = new Uint8Array(3)
  const expected = new Uint8Array([97, 97, 97])

  base64Decode('YWFh', actual)

  assert.strictEqual(actual.join(), expected.join())
}

{
  const actual = new Uint8Array(2)
  const expected = new Uint8Array([104, 105])

  base64Decode('aGk=', actual)

  assert.strictEqual(actual.join(), expected.join())
}

{
  const actual = new Uint8Array(3)
  const expected = new Uint8Array([104, 105, 33])

  base64Decode('aGkh', actual)

  assert.strictEqual(actual.join(), expected.join())
}

{
  const actual = new Uint8Array(3)
  const expected = new Uint8Array([115, 117, 112])

  base64Decode('c3Vw', actual)

  assert.strictEqual(actual.join(), expected.join())
}

{
  const actual = new Uint8Array(5)
  const expected = new Uint8Array([115, 117, 112, 63, 33])

  base64Decode('c3VwPyE=', actual)

  assert.strictEqual(actual.join(), expected.join())
}

{
  var actual = new Uint8Array(64)
  var expected = new Uint8Array(64)
  var str = "AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA=="

  base64Decode(str,expected)

  assert.strictEqual(actual.join(), expected.join())
}

{
  var actual = new Uint8Array(1)
  var expected = new Uint8Array([73])
  var str = 'SQ==QU0='
  base64Decode(str, actual)
  assert.strictEqual(actual.join(), expected.join())
}

{
  var expected = [0xff, 0xff, 0xbe, 0xff, 0xef, 0xbf, 0xfb, 0xef, 0xff]
  var str1 = '//++/++/++//'
  var expectedBuffer = [ 255, 255, 190, 255, 239, 191, 251, 239, 255 ]
  var actual = new Uint8Array(9);

  base64Decode(str1, actual)
  assert.strictEqual(actual.join(), expectedBuffer.join())

  for (var i = 0; i < actual.length; i++) {
    assert.strictEqual(actual[i], expected[i])
  }

  var str2 = '__--_--_--__'

  base64Decode(str2, actual)
  assert.strictEqual(actual.join(), expectedBuffer.join())

  for (var i = 0; i < actual.length; i++) {
    assert.strictEqual(actual[i], expected[i])
  }
}
