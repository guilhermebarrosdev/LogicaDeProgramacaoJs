var numero = prompt("Digite um número");
numero = parseFloat(numero);

for (var i = 1; i <= 1000; i++) {
  document.write(numero + " x " + i + " = " + numero * i + " <br> ");
}