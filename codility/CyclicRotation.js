function solution(A, K) {
    let temp = A
    let result = temp
    for (let index = 0; index < K; index++) {
        console.log('aqui')
        result = []
        result.push(temp[temp.length - 1])
        temp.map(p => result.push(p))
        result.pop(temp.length - 1)
        temp = result
    }
    return result
}