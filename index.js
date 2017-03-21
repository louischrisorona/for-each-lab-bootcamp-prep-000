function iterativeLog(array) {
  array.forEach((element, index) => {
    console.log(`${index}: ${element}`)
  })
}


function iterate(callback) {
  var anything = [1, 2, 3, "happy"]

  anything.forEach(callback)
  return anything
}


function doToArray(array, callback) {
  array.forEach(callback)
}

