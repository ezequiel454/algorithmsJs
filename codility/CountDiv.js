function solution(A, B, K) {
  if(A === B){
    if(A % K === 0){
      return 1
    }
    return 0
  }
  let cond = false
  let count = 0
  while(!cond){
    if((A+count) % K === 0 ){
      cond = true
    }else{
      if(A+count+1 > B){
        return 0
      }else{
        count += 1
      }
    }
  }
  let total = 0
  let cond2 = false
  if((A % 2 === 0 && B % 2 === 0) || (A % 3 === 0 && B % 3 === 0)){
    total = (B-A+count) + 1
  }else if((A % 2 !== 0 && B % 2 !== 0) && (A % 3 !== 0 && B % 3 !== 0)){
    total = (B-A+count) - 1
  }else{
    total = (B-A+count)
    cond2 = true
  }
  let result = 0
  if(K === 1 && cond2){
    result = (Math.ceil (total / K)) +1
  }else{
    result = Math.ceil (total / K)
  }
  return result
}

console.log(solution(6,11,2))
console.log(solution(6,6,2))
console.log(solution(6,8,2))

console.log(solution(11,14,2))
console.log(solution(11,13,2))
console.log(solution( 0, 2000000000, 1))
console.log(solution( 1, 2000000000, 1))

/* task
Write a function:

function solution(A, B, K);

that, given three integers A, B and K, returns the number of integers within the range [A..B] that are divisible by K, i.e.:

{ i : A ≤ i ≤ B, i mod K = 0 }

For example, for A = 6, B = 11 and K = 2, your function should return 3, because there are three numbers divisible by 2 within the range [6..11], namely 6, 8 and 10.

Write an efficient algorithm for the following assumptions:

A and B are integers within the range [0..2,000,000,000];
K is an integer within the range [1..2,000,000,000];
A ≤ B.
*/