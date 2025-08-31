function calcularValorDeCompra (valorCompra, valorDesconto,){
    const calculadoradoValorFinalCompra = valorCompra - valorDesconto;
    const resultado = calculadoradoValorFinalCompra;
    return resultado;
}

module.exports = {
    calcularValorDeCompra
}