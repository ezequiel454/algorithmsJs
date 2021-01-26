const list2: Array<number> = []

const quickUnionUF = (value: number) => {
  const temp = new Array(value)
  for (let index = 0; index < value; index++) {
    list2[index] = index
  }
}

const root = (index: number) => {
  while (index !== list2[index]) index = list2[index]
  return index
}

const isConnected2 = (value1: number, value2: number) =>
  root(value1) === root(value2)

const union2 = (value1: number, value2: number) => {
  const value1Id = root(value1)
  const value2Id = root(value2)

  list2[value1Id] = value2Id
}

const operationToConnect2 = (num1: number, num2: number) => {
  console.log('List: ', list2)
  !isConnected2(num1, num2)
  union2(num1, num2)
}

quickUnionUF(10)
operationToConnect2(4, 3)
operationToConnect2(3, 8)
operationToConnect2(6, 5)
operationToConnect2(9, 4)
operationToConnect2(2, 1)
operationToConnect2(8, 9)
operationToConnect2(5, 0)
operationToConnect2(7, 2)
operationToConnect2(6, 1)

console.log(list2)

// Quick-find defect.
// ・Union too expensive (N array accesses).
// ・Trees are flat, but too expensive to keep them flat.
// Quick-union defect.
// ・Trees can get tall.
// ・Find too expensive (could be N array accesses).
