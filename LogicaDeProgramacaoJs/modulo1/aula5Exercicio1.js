//fazer jogador1 digitar um numero
var nJogador1 = prompt("numero do jogador 1");
nJogador1 = parseInt(nJogador1);

//fazer jogador2 digitar outro numero
var nJogador2 = prompt("numero do jogador 2");
nJogador2 = parseInt(nJogador2);

//se forem iguais, mostrar mensagem 'empate'
if (nJogador1 === nJogador2) {
  alert("voces empataram");
} else {
  //sortear um numero entre 0 e 1
  var nSorteado = parseInt(Math.random() * 2);
  alert("Numero sorteado é: " + nSorteado);
  // se o numero sorteado for 0, ganha quem escolher o numero MENOR
  if (
    (nSorteado === 0 && nJogador1 < nJogador2) ||
    (nSorteado === 1 && nJogador1 > nJogador2)
  ) {
    alert("Ganhou jogador 1");
  } else {
    alert("Ganhou jogador 2 ");
  }
}