//try make better later, but its 100% on codility o(n * log n)
function solution(A) {
  let minValue = A.reduce((a,b) => Math.min(a,b), A[0])
  if(minValue >= 2 ){
    return 1
  }
  if(minValue < 0){
    if(A.filter(a => a === 1).length === 0){
      return 1
    }else{
      minValue = 1
    }
  }
  let maxValue = A.reduce((a,b) => Math.max(a,b), A[0])
  if(minValue === 0 && maxValue === 0){
    return 1
  }
  let result = 0
  let cond = false
  let finalList = []
  for (let index = 0; index < A.length; index++) {
    if(A[index] > 1){
      if(finalList[A[index] -2] === undefined){
        finalList[A[index] -2] = 1
      }
    }
  }
  for (let index = 0; index < finalList.length; index++) {
    if(finalList[index] === undefined){
      return index + 2
    }
  }
  if(minValue === 1){
    return maxValue + 1
  }else{
    return minValue -1
  }
}


let B = [-1,-3]
console.log(solution([1, 3, 6, 4, 1, 2])) //5.
console.log(solution([1, 2, 3])) //4
console.log(solution(B)) //1
console.log(solution([0])) //1
console.log(solution([4, 5, 6, 2])) //1
console.log(solution([-10000000, 10000000]))  //1
