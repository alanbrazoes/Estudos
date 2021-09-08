/*================ ATRIBUIÇÃO VIA DESCONTRUÇÃO COM ARRAYS ============= */

let arrayQualquer = [1, 2, 3, 4]
let [um, dois] = arrayQualquer
console.log(um, dois)

let outroArray = [[1, 2, 3], [4 , 5, 6], [7, 8, 9]]
let [primeiro = 'Não existe', segundo, terceiro] = outroArray
console.log(primeiro[1])

/* ======= COM OBJETOS ============== */

let pessoa = {
    nome: 'Alan',
    idade: 20,
    endereco:{
        rua:'Rua Antônio Silva',
        bairro: 'Lagoa'
    }
}
/* extrai do objeto pessoa a chave nome, idade e endereço. */
/* Posso mudar o nome da variável criada e atribuir um valor padrão caso não exista na chave original */
let {nome: vulgo = 'Não existe', idade, endereco, endereco: {rua}} = pessoa