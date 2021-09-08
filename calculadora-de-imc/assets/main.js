/* CAPTURAR EVENTO DE SUBMIT DO FORMULÁRIO */
const form = document.querySelector('#formulario')


form.addEventListener('submit', function (e) {
    e.preventDefault()
    const inputPeso = e.target.querySelector('#peso')
    const inputAltura = e.target.querySelector('#altura')

    const peso = Number(inputPeso.value)
    const altura = Number(inputAltura.value)

    if (!peso) {
        setResultado('Peso inválido', false)
        return
    }

    if (!altura) {
        setResultado('Altura inválida', false)
        return
    }

    const imc = calculoDeIMC(peso, altura)
    setResultado(imc, true)
})

function calculoDeIMC(peso, altura) {

    const imc = (peso / (altura ** 2))

    if (imc < 18.5) {
        return `Seu IMC é igual à ${imc.toFixed(1)} (Abaixo do peso) `
    }else if (imc >= 18.5 && imc < 25){
        return `Seu IMC é igual à ${imc.toFixed(1)} (Peso normal)`
    }else if (imc >= 25 && imc < 30){
        return `Seu IMC é igual à ${imc.toFixed(1)} (Sobrepeso)`
    }else if (imc >= 30 && imc < 35){
        return `Seu IMC é igual à ${imc.toFixed(1)} (Obesidade grau 1)`
    }else if (imc >= 35 && imc < 40){
        return `Seu IMC é igual à ${imc.toFixed(1)} (Obesidade grau 2)`
    }else if (imc > 40){
        return `Seu IMC é igual à ${imc.toFixed(1)} (Obesidade grau 3)`
    }
}

/* As duas próximas funções apenas criam o espaço para exibir o resultado */
/* Cria a função para exibir o resultado */
function criaP() {
    /* criou um elemento HTML */
    const p = document.createElement('p')
    return p
}

function setResultado(msg, isValid) {
    /* Chamou a div pelo id e colocou em um variável */
    const resultado = document.querySelector('#resultado')
    /* Zerou o conteúdo da div */
    resultado.innerHTML = ''
    /* chama a função de cria o P */
    const p = criaP()

    if (isValid){
        p.classList.add('texto-resultado')
    }else {
        p.classList.add('bad')
    }

    p.innerHTML = msg
    resultado.appendChild(p)
}
