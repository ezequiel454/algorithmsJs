
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

//for solution, best solution so far
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

console.log(solution([9, 3, 9, 3, 9, 7, 9]))