var dias = new Array(
  "domingo",
  "segunda-feira",
  "terça-feira",
  "quarta-feira",
  "quinta-feira",
  "sexta-feira",
  "sábado"
);

var hoje = new Date();
var diaDaSemana = hoje.getDay();

alert("Bem vindo, hoje é " + dias[diaDaSemana]);