var numero = prompt("Digite um número");
numero = parseFloat(numero);

var indice = 1;

while (indice <= 1000) {
  document.write(
    numero + " x " + indice + " = " + numero * indice + " <br>"
  );

  indice = indice + 1;
}
document.write("Saiu do loop");