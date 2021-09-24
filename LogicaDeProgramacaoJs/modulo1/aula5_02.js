var nj1 = prompt("número do jogador 1");
nj1 = parseInt(nj1);

var nj2 = prompt("número do jogador 1");
nj2 = parseInt(nj2);

if (nj1 === nj2) {
  alert("Vocês empataram");
} else {
  var nSorteado = parseInt(Math.random() * 2);
  alert("Numero sorteado é: " + nSorteado);

  if (nSorteado === 0) {
    if (nj1 < nj2) {
      alert("Ganhou jogador 1");
    } else {
      alert("Ganhou jogador 2");
    }
  } else {
    if (nj1 > nj2) {
      alert("Ganhou jogador 1");
    } else {
      alert("Ganhou jogador 2");
    }
  }
}