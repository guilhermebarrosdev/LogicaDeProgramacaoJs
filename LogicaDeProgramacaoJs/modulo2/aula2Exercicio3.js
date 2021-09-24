var ano = 1004;

while (ano <= 2017) {
  if (!(ano % 100 === 0) || ano % 400 === 0) {
    document.write(ano + "<br>");
  } else {
    document.write(ano + "Não é bissexto<br>");
  }

  // ano = ano + 4;
  ano += 4;
}
document.write("Saiu do loop");