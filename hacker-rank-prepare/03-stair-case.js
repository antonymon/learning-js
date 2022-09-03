export function staircase(num) {
  let str = '';
  for (let i = 0; i < num; i++) {
    str += ' '.repeat(num - (i+1))
    str += '#'.repeat(i+1) + '\n'
  }

  console.log(str)
}
