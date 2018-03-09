function findByAttr(array, attr) {
  for (var i = 0; i < array.length; i += 1) {
    if (array[i][attr]) {
      return i;
    }
  }

  return -1;
}

module.exports = findByAttr;