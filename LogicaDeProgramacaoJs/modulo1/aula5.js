var n1 = prompt("Digite um número");
n1 = parseFloat(n1);
var n2 = prompt("Digite outro número");
n2 = parseFloat(n2);
var empate = n1 == n2;
alert(empate);
if ((empate = n1 == n2)) {
  alert("Empatou");
} else {
  alert("Não empatou");
}