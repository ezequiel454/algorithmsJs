function solution(X, Y, D) {
  const result = Math.floor((Y - X + D)/D)
  const an = X + (result - 1) * D
  if(an === Y){
    return result - 1
  }
  return result
}

console.log(solution(10,85,30))
console.log(solution(1,5,2))

