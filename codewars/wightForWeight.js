function orderWeight(strng) {
    const tempList = []
    strng.split(' ').filter(a => a !== '').map(a => a)
}

function maxMin(lista, str) {
    const filtro = lista.filter(a => str.toString() < a)
    if(filtro.length > 0) {
        const index = lista.indexOf(filtro[0])
        console.log(lista.slice(0,index))
        console.log(lista.slice(index))
        return lista = lista.slice(0,index).concat(str).concat(lista.slice(index))
    }
    return lista.concat(str)
} 


const a = ['100', '90']

console.log(maxMin(a, 59))
console.log(a)