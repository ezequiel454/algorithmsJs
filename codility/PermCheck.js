function solution(A) {
  let sumReduce = 0
  let listRepetition = []
  for (let index = 0; index < A.length; index++) {
    sumReduce += A[index]
    if(listRepetition[A[index]] === undefined){
      listRepetition[A[index]] = 1
    }else{
      return 0
    }
  }
  const n = A.length
  const sumPa = ((1+n) *n)/2
  if(sumPa === sumReduce){
    return 1
  }
  return 0
}

console.log(solution([4,1,3,2]))
console.log(solution([1,4,1]))
console.log(solution([1000000000]))
