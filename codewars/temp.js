const pessoas = [
  {
    nome: 'Zeke',
    idade: 31
  }, {
    nome: 'Rafa',
    idade: 28
  }
]

const listaNomes = pessoas.filter(pessoa => pessoa.idade > 30).map(pessoa => pessoa.nome)
console.log(listaNomes)
