function mostrarAreaAlert() {
  var largura = prompt("Digite a largura");
  largura = parseFloat(largura);

  var altura = prompt("Digite a altura");
  altura = parseFloat(altura);

  var area = calcArea(largura, altura);

  alert("A área total é: " + area);
}

function mostrarAreaOutput() {
  var largura = prompt("Digite a largura");
  largura = parseFloat(largura);

  var altura = prompt("Digite a altura");
  altura = parseFloat(altura);

  var area = calcArea(largura, altura);

  document.querySelector("#outPut").innerHTML = "A área total é: " + area;
}

function calcArea(l, a) {
  return l * a;
}