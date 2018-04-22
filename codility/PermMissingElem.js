function solution(A) {
  let len = A.length + 1
  const sum = ((1 + len ) * len) / 2
  let result = A.reduce(reducerSum,sum)
  return result
}

const reducerSum = (a,b) => a-b