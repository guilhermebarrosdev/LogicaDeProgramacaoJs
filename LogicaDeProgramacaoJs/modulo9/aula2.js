var alunos = [
  { nome: "Maria", notas: [2, 5, 8, 9] },
  { nome: "José", notas: [2, 1, 5, 8] },
  { nome: "Ana", notas: [1, 5, 3, 2] },
  { nome: "João", notas: [4, 5, 3, 8] },
  { nome: "Lucia", notas: [2, 1, 8, 5] },
];

var mediaAlunos = 0;

var msg = "";
for (var i = 0; i < alunos.length; i++) {
  msg += "<p><b>" + alunos[i].nome + "</p></b>";
  var notas = alunos[i].notas;
  msg += "<p>Notas: " + notas.join(" | ") + "</p>";
  var totalNotas = 0;
  for (var j = 0; j < notas.length; j++) {
    totalNotas += notas[j];
  }
  var media = totalNotas / notas.length;
  mediaAlunos += media;
  msg += "<p>A média é: " + media + "</p><hr>";
}

msg +=
  "<p>A média de todos alunos é: " +
  mediaAlunos / notas.length +
  "</p><hr>";

document.querySelector("#output").innerHTML = msg;