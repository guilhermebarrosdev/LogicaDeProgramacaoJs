function mostrarAreaAlert() {
  var largura = prompt("Digite a largura");
  largura = parseFloat(largura);

  var altura = prompt("Digite a altura");
  altura = parseFloat(altura);

  try {
    var area = calcArea(largura, altura);
  } catch (e) {
    area = e;
  }
}

function mostrarAreaOutput() {
  var largura = prompt("Digite a largura");
  largura = parseFloat(largura);

  var altura = prompt("Digite a altura");
  altura = parseFloat(altura);

  try {
    var area = calcArea(largura, altura);
  } catch (e) {
    area = e;
  }

  document.querySelector("#outPut").innerHTML = "A área total é: " + area;
}

mostrarAreaAlert();

function calcArea(l, a) {
  if (l === undefined || a === undefined) {
    throw new Error("Calcular área precisa receber dois números");
  }
  if (isNaN(l) || isNaN(a)) {
    throw new Error("Apenas números");
  }
  return l * a;
}