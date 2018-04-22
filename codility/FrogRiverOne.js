function solution(X, A) {
  let position
  let listRepetition = [0]
  let cond = false
  let contador = 0
  for (let index = 0; index < A.length; index++) {
    if(A[index] <= X){
      if(listRepetition[A[index]] === undefined){
        listRepetition[A[index]] = 1
        contador++
      }
      if(contador === X){
        position = index
        cond = true
        break
      }
    }
  }
  if(cond){
    return position
  }else{
    return -1
  }
}

console.log(solution(5,[1,3,1,4,2,3,5,4]))
console.log(solution(1,[1]))
console.log(solution(2,[2,2,2,2,2,2]))
console.log(solution(2,[1,1,1,1]))