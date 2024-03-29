const binario = (decimalParam) => {
  let decimal = decimalParam
  let lista = []
  while (decimal !== 0) {
    lista.unshift(decimal % 2)
    decimal = Math.floor(decimal / 2)
  }
  return lista
}

const solution = (N) => {
  let listaBinaria = binario(N)
  let resposta = 0
  let condAchou1 = false
  let somaTemp = 0
  listaBinaria.forEach((e, index) => {
    if (e === 1 && !condAchou1) {
      condAchou1 = true
    } else if (e === 1 && condAchou1) {
      if (listaBinaria[index - 1] !== 1) {
        resposta = resposta < somaTemp ? somaTemp : resposta
        somaTemp = 0
      }
    } else if (e === 0 && condAchou1) {
      somaTemp++
    }
  })
  return resposta
}

//console.log(solution(529)) //deve retornar 4
//console.log(solution(1041)) //deve retornar 5

/*
Task description
A binary gap within a positive integer N is any maximal sequence of consecutive zeros that is surrounded by ones at both ends in the binary representation of N.

For example, number 9 has binary representation 1001 and contains a binary gap of length 2. The number 529 has binary representation 1000010001 and contains two binary gaps: one of length 4 and one of length 3. The number 20 has binary representation 10100 and contains one binary gap of length 1. The number 15 has binary representation 1111 and has no binary gaps. The number 32 has binary representation 100000 and has no binary gaps.

Write a function:

function solution(N);

that, given a positive integer N, returns the length of its longest binary gap. The function should return 0 if N doesn't contain a binary gap.

For example, given N = 1041 the function should return 5, because N has binary representation 10000010001 and so its longest binary gap is of length 5. Given N = 32 the function should return 0, because N has binary representation '100000' and thus no binary gaps.

Write an efficient algorithm for the following assumptions:

N is an integer within the range [1..2,147,483,647].
Copyright 2009–2018 by Codility Limited. All Rights Reserved. Unauthorized copying, publication or disclosure prohibited.*/

// v2
function solution(N) {
  const binaryRepresentation = N.toString(2)
  let list = []
  let valid = false
  let count = 0
  for (const element in binaryRepresentation) {
    const sum = binaryRepresentation[element]
    if (sum === '1') {
      if (valid === true && count > 0) {
        list.push(count)
        count = 0
      } else {
        valid = true
      }
    } else if (valid === true && sum !== '1') {
      count++
    }
  }

  return maxNumber(list)
}

const maxNumber = (list) => {
  return list.reduce((prev, curent) => {
    return curent > prev ? curent : prev
  }, 0)
}
