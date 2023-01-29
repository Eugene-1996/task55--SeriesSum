
function SeriesSum(n)
{
  let sum = ''
  for(let i = 1; i<=n; i++){
    sum+= 1 + (1/4+1/3)
  }
  return sum
}


console.log(SeriesSum(5))