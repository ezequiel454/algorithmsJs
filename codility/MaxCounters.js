//first for to get the indexLastMaxCounter
function solution(N, A) {
  let listCounter = new Array(N).fill(0)
  let maxCounter = 0
  let cond = false
  let indexLastMaxCounter = 0
  let occurrence = 0
  for (let index = 0; index < A.length; index++) {
    if(A[index] === N+1){
      indexLastMaxCounter = index
    }
  }
  for (let index = 0; index < A.length; index++) {
    if(indexLastMaxCounter === index && indexLastMaxCounter > 0){
      if(maxCounter > 0){
        listCounter = listCounter.map(a => maxCounter)
      }
    }else{
      if(A[index] === N+1){
        occurrence = maxCounter
      }else{
        if(listCounter[A[index]-1] < occurrence){
          listCounter[A[index]-1]  = occurrence + 1
        }else{
          listCounter[A[index]-1] +=1
        }
        if(listCounter[A[index]-1] > maxCounter){
          maxCounter = listCounter[A[index]-1]
        }
      }
    }
  }
  return listCounter
}

console.log(solution(5,[3, 4, 4, 6, 1, 4, 4])) 
console.log(solution(1, [1]))
