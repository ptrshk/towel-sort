module.exports = function towelSort (matrix) {
  if (arguments.length == 0)
  {
      return []
  }
  else
  {
  for(let i = 0; i <= matrix.length - 1;i++)
  {
    if (i % 2 != 0)
    {
        matrix[i].reverse();
    }
  }
  let a = matrix.flat();
  return a;
  }
}
