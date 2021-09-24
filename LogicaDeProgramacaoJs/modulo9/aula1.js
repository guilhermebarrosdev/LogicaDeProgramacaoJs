var notas = [
[5, 6, 4, 3],
[2, 8, 5, 6],
[3, 6, 4, 8],
[2, 8, 4, 9],
];

var msg = "";
var mediaAnual = 0;

for (var i = 0; i < notas.length; i++) {
console.log(notas[i]);
msg +=
  "<p>Notas do " +
  (i + 1) +
  " bimestre: " +
  notas[i].join(", ") +
  "</p>";
// i = 0
// notas[0] = [5,6,4,3]
var totalBimestre = 0;
for (var j = 0; j < notas[i].length; j++) {
  console.log(notas[i][j]);
  totalBimestre += notas[i][j];
}
var mediaBimestre = totalBimestre / notas[i].length;
mediaAnual += mediaBimestre;
msg +=
  "<p>A média do" +
  (i + 1) +
  "bimestre é: " +
  mediaBimestre +
  "</p><br><hr>";
console.log("mediaBimestre", mediaBimestre);
}

mediaAnual = mediaAnual / notas.length;
msg += "<p>A média anual é: " + mediaAnual + "</p><hr>";

document.querySelector("#output").innerHTML = msg;