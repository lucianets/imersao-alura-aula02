function Converter() {
    var valorElemento = document.getElementById("valor");
    var valor = valorElemento.value;
    var valorEmDolarNumerico = parseFloat(valor);
    console.log (valorElemento);

    var valorEmReal = valorEmDolarNumerico / 5;
    console.log(valorEmReal);

    var elementoValorConvertido = document.getElementById("valorConvertido");
    var valorConvertido = "Resultado em Dolar é U$ " + valorEmReal; 
    elementoValorConvertido.innerHTML = valorConvertido; 
}

