function validarChutes(chute) {

    const numero = +chute

    if (isNaN(chute)) {
        elementoChute.innerHTML += '<div>Valor inválido!</div>'
        return
    }

    if (numeroMenorOuMaior(numero)) {
        elementoChute.innerHTML += `<div>Valor inválido: fale um número entre ${menorValor} e ${maiorValor}!</div>`
        return
    }

    if (numero === numeroSecreto) {
        document.body.innerHTML = `<h2>Parabéns!<h2>
         <h3>O número secreto era ${numeroSecreto}!</h3>
         
         <button id="jogar-novamente" class="btn-jogar">Jogar Novamente</button>
         `
    } else if (numero > numeroSecreto) {
        elementoChute.innerHTML += '<div>O número secreto é menor <i class="fa-solid fa-arrow-down"></i></div>'
    } else {
        elementoChute.innerHTML += '<div>O número secreto é maior <i class="fa-solid fa-arrow-up"></i></div>'
    }
}

function numeroMenorOuMaior(numero) {
    return numero > maiorValor || numero < menorValor;
}

document.body.addEventListener('click', e => {
    if (e.target.id == 'jogar-novamente') {
        window.location.reload()
    }
})