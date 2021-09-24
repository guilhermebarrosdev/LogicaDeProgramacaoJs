var n1 = prompt("Digite um número");
n1 = parseFloat(n1);

escreve();

function escreve() {
  var output = document.querySelector("#output");
  output.innerHTML = n1;
}

function calc(simbolo) {
  var n2 = prompt("Digite outro número");
  n2 = parseFloat(n2);

  switch (simbolo) {
    case "+":
      n1 += n2;
      break;

    case "-":
      n1 -= n2;
      break;

    case "*":
      n1 *= n2;
      break;

    case "/":
      n1 /= n2;
      break;
  }

  escreve();
}