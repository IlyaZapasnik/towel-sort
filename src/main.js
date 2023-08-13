let matrix = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9]
];

const result = matrix.filter((elem, index) => index / 2 != 0 ? elem.reverse() : elem);
const arr = result.flat();
  console.log(arr);

 