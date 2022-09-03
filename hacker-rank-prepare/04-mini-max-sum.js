export function miniMaxSum(arr) {
  console.log(arr.sort((a, b) => a - b));

  let miniArr = arr
    .slice(0, arr.length - 1)
    .reduce((previousValue, currentValue) => previousValue + currentValue, 0);
  //console.log(miniArr);

  let maxArr = arr
    .slice(1, arr.length)
    .reduce((previousValue, currentValue) => previousValue + currentValue, 0);
  //console.log(maxArr);

  console.log(`${miniArr} ${maxArr}`);
}
