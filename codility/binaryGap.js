const binario = (decimalParam) => {
  let decimal = decimalParam
  let lista = []
  while(decimal != 0){
    lista.unshift(decimal%2)
    decimal = Math.floor(decimal/2)
  }
  return lista
}

function solution(n){
  const lista = binario(n)
  let soma = 0
  let contador = 0
  let cond = false
  for (let index = 0; index < lista.length; index++) {
    if(lista[index] === 1 && cond === false){
      cond = true
    }else if(lista[index] === 1 && cond === true){
      if (soma -1 < contador){
        soma = contador
      }
      contador = 0
    }
    if(cond === true){
      contador++
    }
  }
  if(soma === 0){
    return 0
  }else{
    return soma - 1
  }
}

console.log(solution(529)) //deve retornar 4
console.log(solution(1041)) //deve retornar 5
