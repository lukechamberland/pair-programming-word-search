const transpose = function (matrix) {

    const numOfRows = matrix[0].length;
    const numOfColumns = matrix.length;
    const result = [];
    
  
    for (let i = 0; i < numOfRows; i++) {
      let newArr = [];
      for (let i2 = 0; i2 < numOfColumns; i2++) {
        newArr.push(matrix[i2][i]);
      }
      result.push(newArr);
    }
    return result;
  };

const wordSearch = (letters, word) => {
    const horizontalJoin = letters.map(ls => ls.join(''))
    for (let l of horizontalJoin) {
      if (l.includes(word)) return true;
    }
    let newResult = transpose(letters).map(ele => ele.join(''));
    for (let i of newResult) {
      if (i.includes(word)) {
        return true;
    }
  } 
  return false;
}

module.exports = wordSearch;