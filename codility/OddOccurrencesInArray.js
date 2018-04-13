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
//console.log(solution([9, 3, 9, 3, 9, 7, 9]))