function retorno() {
    let valor = document.getElementById("input").value;
    let numero = parseInt(valor);

    console.log(valor);
    console.log(numero);

    if (!isNaN(numero)) {
        if (valor > 0 && valor <= 10) {
            document.getElementById("paragrafo").innerText = "O número que você digitou é: " + valor;
            document.getElementById("paragrafo2").innerText ="";
        } else if ( valor < 0) {
            document.getElementById("paragrafo").innerText = "Eu disse de 1 até 10, mas como sou esperto eu sabia que você ia tentar me driblar e mandar um valor menor";
            document.getElementById("paragrafo2").innerText = "Mas enfim, segue o número digitado: " + valor;
        } else {
            document.getElementById("paragrafo").innerText = "Ai você está me quebrando, um numero maior que 10?? vou ter que apelar e ler a variavel ( não que já não esteja fazendo isso )";
            document.getElementById("paragrafo2").innerText = "Mas enfim, segue o número digitado: " + valor;
        }
    } else {
        document.getElementById("paragrafo").innerText = "Meu nobre, eu disse de 1 a 10, e você me manda um caractere? texto? ... seila, o cara que me programou não tinha capacidade para analizar tão profundo";
        document.getElementById("paragrafo2").innerText = "Vamos lá, tente um numero";
    }
    
}