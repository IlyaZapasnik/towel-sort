
// You should implement your task here.

module.exports = function towelSort (matrix) {
  if(matrix == null) {
    return [];
  }
  const result = matrix.filter((elem, index) => index % 2 != 0 ? elem.reverse() : elem);
  const arr = result.flat();
  return arr;
}
