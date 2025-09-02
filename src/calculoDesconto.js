function calcularValorDeCompra (valorCompra, valorDesconto,){
    const calculadoradoValorFinalCompra = valorCompra - valorDesconto;
    return calculadoradoValorFinalCompra;
}

module.exports = {
    calcularValorDeCompra
}