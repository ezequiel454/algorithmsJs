const list: Array<number> = []

const quickFindUF = (value: number) => {
  const temp = new Array(value)
  for (let index = 0; index < value; index++) {
    list[index] = index
  }
}

const isConnected = (value1: number, value2: number) =>
  list[value1] === list[value2]

const union = (value1: number, value2: number) => {
  const value1Id = list[value1]
  const value2Id = list[value2]

  list.forEach((_, index: number) => {
    if (list[index] === value1Id) list[index] = value2Id
  })
}

const operationToConnect = (num1: number, num2: number) => {
  console.log('List: ', list)
  !isConnected(num1, num2)
  union(num1, num2)
}

quickFindUF(10)
operationToConnect(4, 3)
operationToConnect(3, 8)
operationToConnect(6, 5)
operationToConnect(9, 4)
operationToConnect(2, 1)
operationToConnect(8, 9)
operationToConnect(5, 0)
operationToConnect(7, 2)
operationToConnect(6, 1)

console.log(list)

// initialize n, union n, find 1                    n^2
