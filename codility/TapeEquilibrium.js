function solution(A) {
  let right = A[0]
  let left = A.reduce(reducerSum,0) - right)
  let dif = Math.abs(right - left)
  let temp = 0
  for (let index = 1; index < A.length-1; index++) {
    right = right + A[index]
    left = (left - A[index])
    temp = Math.abs(right - left)
    if(dif > temp){
      dif = temp
    }
  }
  return dif
}
const reducerSum = (a,b) => a+b

console.log(solution([3,1,2,4,3]))