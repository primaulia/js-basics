console.log('whoohoo!')
//
// var arrTest = ['x', 'y', 'z']
// console.log(arrTest)
//
// for (var i = 0; i < arrTest.length; i++) {
//   console.log(arrTest[i])
// }

var loopyloop = [[1, 2, 3], [2], [3]]
var products = 1

// console.log( loopyloop.length )
for (var index = 0; index < loopyloop.length; index++) {
  // this is where the operation happened

  var insideArr = loopyloop[index]
  // console.log( 'inside arr is: ' + insideArr + ' and the length is: ' + insideArr.length )

  for (var index2 = 0; index2 < insideArr.length; index2++) {
    var insideNumber = insideArr[ index2 ]

    console.log('inside number:' + insideNumber)
    products = products * insideNumber

  // result = result + products
  // console.log(result)
  }
}

console.log(products)

// var num = 0

// // ++ is not equal to + 1
// console.log( num++ )
// console.log( num + 1 )
// console.log( num )

// num += 1; // num = num + 1
// console.log(num)
