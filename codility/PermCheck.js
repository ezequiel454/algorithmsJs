function solution(A) {
  const sumReduce = A.reduce(reducerSum,0)
  const n = A.length
  const sumPa = ((1+n) *n)/2
  if(sumPa === sumReduce){
    return 1
  }
  return 0
}

const reducerSum = (a,b) => a+b

console.log(solution([4,1,3,2]))