
function arrayEqual(a, b) {
  if(a.length !== b.length) {
    return false;
  }

  for(var i=0; i<a.length; i++) {
    if(a[i] !== b[i]) {
      return false;
    }
  }

  return true;
}

function integerEqual(a, b) {
  return a === b;
}

function removeDegenerateCells(cells, positions) {
  var equal = integerEqual;
  if(positions) {
    equal = arrayEqual;
  }

  return cells.filter(function(cell) {
    if(positions) {
      cell = cell.map(function(index) {
        return positions[index];
      });
    }

    for(var i=0; i<cell.length; i++) {
      for(var j=0; j<cell.length; j++) {
        if(i != j && equal(cell[i], cell[j])) {
          return false;
        }
      }
    }
    return true;
  });
}

module.exports = removeDegenerateCells;