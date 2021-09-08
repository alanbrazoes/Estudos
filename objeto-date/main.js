/* const dataAtual = new Date('2020, 8, 7')
console.log(dataAtual.getDate())
console.log(Date.now()) */

function zeroEsquerda (num) {
    return num >= 10 ? num : `0${num}`
}

function colocaData(data) {
    const dia = zeroEsquerda(data.getDate())
    const mes = zeroEsquerda(data.getMonth() + 1)
    const ano = zeroEsquerda(data.getFullYear())
    const hora = zeroEsquerda(data.getHours())
    const minutos = zeroEsquerda(data.getMinutes())

    return `${dia}/${mes}/${ano} ${hora}:${minutos}`
}

const data = new Date()
const dataBrasil = colocaData(data)
console.log(dataBrasil)
