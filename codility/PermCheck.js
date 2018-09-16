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

/*task
A non-empty array A consisting of N integers is given.

A permutation is a sequence containing each element from 1 to N once, and only once.

For example, array A such that:

    A[0] = 4
    A[1] = 1
    A[2] = 3
    A[3] = 2
is a permutation, but array A such that:

    A[0] = 4
    A[1] = 1
    A[2] = 3
is not a permutation, because value 2 is missing.

The goal is to check whether array A is a permutation.

Write a function:

int solution(int A[], int N);

that, given an array A, returns 1 if array A is a permutation and 0 if it is not.

For example, given array A such that:

    A[0] = 4
    A[1] = 1
    A[2] = 3
    A[3] = 2
the function should return 1.

Given array A such that:

    A[0] = 4
    A[1] = 1
    A[2] = 3
the function should return 0.

Write an efficient algorithm for the following assumptions:

N is an integer within the range [1..100,000];
each element of array A is an integer within the range [1..1,000,000,000].
*/