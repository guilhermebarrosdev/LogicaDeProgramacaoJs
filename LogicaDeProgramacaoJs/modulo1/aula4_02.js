var n1 = prompt("Digite um número");
n1 = parseFloat(n1);
var n2 = prompt("Digite outro número");
n2 = parseFloat(n2);
var media = (n1 + n2) / 2;
alert(media);

if (media > 5) {
  alert("Parabéns! Você foi aprovado");
} else {
  alert("Desculpe, você foi reprovado");
}