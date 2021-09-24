function mostrarTabuada() {
  var numero = prompt("Digite um número");

  limparTabuada();

  numero = parseFloat(numero);

  var i = 1;

  while (i <= 1000) {
    mensagem += numero + " x " + i + " = " + numero * i + "<br>";
    i++;
  }

  output.innerHTML = mensagem;
}

function limparTabuada() {
  mensagem = "";
  output.innerHTML = mensagem;
}

var output = document.querySelector("#output");

var mensagem = "";