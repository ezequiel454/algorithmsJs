function solution(A) {
  let listaValues = []
  let bigElement = 0
  A.forEach(element => {
    if(element > 0){
      if(listaValues[element] === undefined){
        listaValues[element] = element
      }
    }
  })
  if(listaValues.length === 0){
    return 1
  }else{
    for (let i = 1; i < listaValues.length; i++) {
      const element = listaValues[i];
      if(element === undefined){
        return i;
      }else{
        if(element > bigElement){
          bigElement = element
        }
      }
    }
  }
  return bigElement+1
}


let B = [-1,-3]
console.log(solution([1, 3, 6, 4, 1, 2])) //5.
console.log(solution([1, 2, 3])) //4
console.log(solution(B)) //1
console.log(solution([0])) //1
console.log(solution([4, 5, 6, 2])) //1
console.log(solution([-10000000, 10000000]))  //1

/* task
This is a demo task.

Write a function:

function solution(A);

that, given an array A of N integers, returns the smallest positive integer (greater than 0) that does not occur in A.

For example, given A = [1, 3, 6, 4, 1, 2], the function should return 5.

Given A = [1, 2, 3], the function should return 4.

Given A = [−1, −3], the function should return 1.

Write an efficient algorithm for the following assumptions:

N is an integer within the range [1..100,000];
each element of array A is an integer within the range [−1,000,000..1,000,000].
*/