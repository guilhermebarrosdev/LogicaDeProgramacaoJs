var n1 = prompt("Digite um número");
n1 = parseFloat(n1);
var n2 = prompt("Digite outro número");
n2 = parseFloat(n2);
var media = (n1 + n2) / 2;

if (media > 5 && n1 > 0 && n2 > 0) {
  alert("Parabéns! Você foi aprovado");
} else {
  alert("Desculpe, você foi reprovado");
}