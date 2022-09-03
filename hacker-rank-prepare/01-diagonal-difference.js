/*
  Give a squere matrix, calculate the absolute difference between the sums of its diagonals.

  For example, the square matrix arr is shown below:
    	| 1  2  3 |
      | 4  5  6 |
      | 9  8  9 |
  
  The left-to-right diagonal 1 + 5 + 9 = 15. The right to left diagonal  3 + 5 + 9 = 17. Their absolute difference is |15 - 17| = 2.

  Function description: 
    Takes the following parameters: int arr[n][m] an arrar of the integers
    Return: int the aabsolute diagonal difference
    Constraints: -100 =< arr[i][j] <= 100
*/

export function diagonalDifference(arr) {
  let diagonalRight = [];
  let diagonalLeft = [];

  const arrLenght = arr.length;

  for (let i = 0; i < arrLenght; i++) {
    for (let j = 0; j < arrLenght; j++) {
      //console.log([i, j]);
      if (i === j) diagonalRight.push(arr[i][j]);
      if (i + j === arrLenght - 1) diagonalLeft.push(arr[i][j]);
    }
  }

  const rightResult = diagonalRight.reduce(
    (previous, current) => previous + current,
    0
  );
  const leftResult = diagonalLeft.reduce(
    (previous, current) => previous + current,
    0
  );

  return Math.abs(rightResult - leftResult);
}

export function runFunction() {
  /*
    | 1  2  3 |
    | 4  5  6 |
    | 9  8  9 |
    
    right 	[1 + 5 + 9 = 15]
    left 		[3 + 5 + 9 = 17]
    result 	|15 - 17| = 2
  */
  const arr1 = [
    [1, 2, 3],
    [4, 5, 6],
    [9, 8, 9],
  ];

  const result1 = diagonalDifference(arr1);
  console.log(result1);

  const arr2 = [
    [11, 2, 4],
    [4, 5, 6],
    [10, 8, -12],
  ];

  const result2 = diagonalDifference(arr2); //right 4 , left 19 |4 - 19| = 15
  console.log(result2);
}
