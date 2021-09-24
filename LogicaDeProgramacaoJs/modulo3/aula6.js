var n1 = prompt("Digite um número");
n1 = parseFloat(n1);

escreve(n1);

function iniciarCalc(simbolo) {
  var n1 = document.querySelector("#output").textContent;
  n1 = parseFloat(n1);

  var n2 = prompt("Digite outro número");
  n2 = parseFloat(n2);

  try {
    var msg = calc(simbolo, n1, n2);
  } catch (e) {
    alert(e);
    return;
  }

  escreve(msg);
}

function escreve(mensagem) {
  var output = document.querySelector("#output");
  output.innerHTML = mensagem;
}

function calc(simbolo, n1, n2) {
  if (
    simbolo !== "+" &&
    simbolo !== "-" &&
    simbolo !== "*" &&
    simbolo !== "/"
  ) {
    throw new Error("Digite um simbolo valido");
    return 0;
  }

  if (isNaN(n1) || isNaN(n2)) {
    throw new Error("Passar somente números");
    return 0;
  }

  var numeroCalc = null;

  switch (simbolo) {
    case "+":
      numeroCalc = n1 + n2;
      break;

    case "-":
      numeroCalc = n1 - n2;
      break;

    case "*":
      numeroCalc = n1 * n2;
      break;

    case "/":
      numeroCalc = n1 / n2;
      break;
  }

  return numeroCalc;
}