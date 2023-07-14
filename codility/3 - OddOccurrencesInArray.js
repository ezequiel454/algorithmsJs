//high order Soluction, dont cover everything
/*
function solution(A) {
    const listRemoved = []
    for (let index = 0; index < A.length; index++) {
        let element = A[index]
        let wasRemoved = listRemoved.filter(a => a==element )
        if(wasRemoved !== []){
            let existMoreThanOne = A.filter(b => b==element)
            if(existMoreThanOne.length > 1 ){
                listRemoved.push(existMoreThanOne[0])
            }else{
                return existMoreThanOne[0]
            }
        }
    }
}
*/

//second solution, best solution so far
/*
function solution(A) {
    for (let i = 0; i < A.length; i++) {
        if(A[i] !== 'P'){
            if(i+1 == A.length){
                return A[i]
            }else{
                for (let j = i+1; j < A.length; j++) {
                    if(A[i]==A[j]){
                        A[i] = 'P'
                        A[j] = 'P'
                        break
                    }else if(j+1 == A.length){
                        return A[i]
                    }
                }  
            }
        }
    }
}
*/

//100% xor logic
function solution(A) {
  let result = 0
  for (let i = 0; i < A.length; i++) {
    result ^= A[i]
  }
  return result
}

console.log(solution([9, 3, 9, 3, 9, 7, 9]))

/*Task
A non-empty array A consisting of N integers is given. The array contains an odd number of elements, and each element of the array can be paired with another element that has the same value, except for one element that is left unpaired.

For example, in array A such that:

  A[0] = 9  A[1] = 3  A[2] = 9
  A[3] = 3  A[4] = 9  A[5] = 7
  A[6] = 9
the elements at indexes 0 and 2 have value 9,
the elements at indexes 1 and 3 have value 3,
the elements at indexes 4 and 6 have value 9,
the element at index 5 has value 7 and is unpaired.
Write a function:

function solution(A);

that, given an array A consisting of N integers fulfilling the above conditions, returns the value of the unpaired element.

For example, given array A such that:

  A[0] = 9  A[1] = 3  A[2] = 9
  A[3] = 3  A[4] = 9  A[5] = 7
  A[6] = 9
the function should return 7, as explained in the example above.

Write an efficient algorithm for the following assumptions:

N is an odd integer within the range [1..1,000,000];
each element of array A is an integer within the range [1..1,000,000,000];
all but one of the values in A occur an even number of times.
*/

//v2
function binaryXOR(a, b) {
  let decimalA = parseInt(a, 2)
  let decimalB = parseInt(b, 2)
  let result = decimalA ^ decimalB
  let binaryResult = result.toString(2).padStart(8, '0')
  return binaryResult
}

// same question with stirngs

function binaryXOR(a, b) {
  let decimalA = parseInt(a, 2)
  let decimalB = parseInt(b, 2)
  let result = decimalA ^ decimalB
  let binaryResult = result.toString(2).padStart(8, '0')
  return binaryResult
}

function stringToBinary(str) {
  let binary = ''
  for (let i = 0; i < str.length; i++) {
    let charCode = str.charCodeAt(i)
    let binaryValue = charCode.toString(2)
    binary += binaryValue.padStart(8, '0') // Add leading zeros to ensure 8-bit representation
  }
  return binary === '' ? 0 : binary
}

function binaryToString(binary) {
  let bytes = []
  for (let i = 0; i < binary.length; i += 8) {
    let binaryByte = binary.substr(i, 8)
    let decimalValue = parseInt(binaryByte, 2)
    bytes.push(decimalValue)
  }
  let encodedString = new TextDecoder().decode(new Uint8Array(bytes))
  return encodedString
}

function solutionString(A) {
  return binaryToString(
    A.reduce(
      (prev, curr) =>
        binaryXOR(
          stringToBinary(prev.toString()),
          stringToBinary(curr.toString())
        ),
      ''
    )
  )
}
