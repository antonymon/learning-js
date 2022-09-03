/**
 Given an array of integer, calculate the ratios of its elements that are positive, negative, and zero. Print decimal value of each fraction on new line with 6 places after the decimal.

 NOTE: This challange introduces precision problems. The test cases are scaled to six decima places, though answers with absolute aerror of up to 10^-4 are acceptable.
  
 Example: 
  arr = [1,1,0,-1,-1]
  There are n=5 elements, two positive, two negative and one zero. Ther ratios are 2/5 = 0.400000,
  2/5 = 0.400000 and 1/5 = 0.200000. Results are printed as:
    0.400000
    0.400000
    0.200000

  Function description:
    Complete the plusMinus function, has the following parameter(s): int arr[n] an arra of integers
    Print: Ther ratios of positve, negative and zero values in the arrya. Each value should be priunted on seprate line with 6 digits after the decimal. The function should not return a value.
    Input: The first line contains a integer, n, the size of the array. The second line contains n space-separated integs that describe arr[n]
    Constraints:
      0 < n <= 100
      -100 <= arr[i] <= 100
    Outout:
      Print the followin 3 lines, each to 6 decimals:
      1. proportion of positive value
      2. proportion of negative values
      3. proportion of zeros
    Sample input:
      STDIN               Function
      -------             -------------
      6                   arr[] size n =6
      -4 3 -9 0 4 1       arr = [-4, 3, -9, 0, 4, 1]  

    Sample output:
      0.500000
      0.333333
      0.166667
 */

export function plusMinus(arr) {
  let positive = 0;
  let negative = 0;
  let zero = 0;
  const arrLenght = arr.length;

  arr.forEach((value, index) => {
    //console.log([index, value]);
    if (value < 0) negative += 1;
    if (value > 0) positive += 1;
    if (value == 0) zero += 1;
  });

  // console.log(arrLenght)
  // console.log(positive, negative, zero)

  const positiveResult = Number.parseFloat(positive / arrLenght).toFixed(6);
  const negativeResult = Number.parseFloat(negative / arrLenght).toFixed(6);
  const zeroResult = Number.parseFloat(zero / arrLenght).toFixed(6);

  console.log(`${positiveResult}\n${negativeResult}\n${zeroResult}`);
}
