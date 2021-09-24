function testeSalto() {
  for (var i = 0; i < 10; i++) {
    if (i === 5) {
      return "teste";
    }
    console.log(i);
  }
  console.log("----");
  return "fim da função";
}

var teste = testeSalto();
console.log(teste);