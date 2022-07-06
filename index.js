function soma(numero1, numero2) {
    const soma = numero1 + numero2;
    return 'A soma dos dois números é: ' + soma;
}
const resultadoDaSoma = soma(1,2)
console.log(resultadoDaSoma)

function subtracao(numero1, numero2){
    const subtracao = numero1 - numero2;
    return 'A subtração dos dois números é: ' + subtracao;
}
const resultadoDaSubtracao = subtracao(2,1)
console.log(resultadoDaSubtracao)

function divisao(numero1, numero2) {
    const divisao = numero1 / numero2
    return 'A divisão dos dois números é: ' + divisao;
}
const resultadoDaDivisao = divisao(10,3)
console.log(resultadoDaDivisao)

function multiplicacao(numero1, numero2) {
    const multiplicacao = numero1 * numero2
    return 'A multiplicação dos dois números é: ' + multiplicacao;
}
const resultadoDaMultiplicacao = multiplicacao(5,8)
console.log(resultadoDaMultiplicacao)