var produtos = new Array(
  "caneta",
  "lapis",
  "tesoura",
  "borracha",
  "caderno",
  "livro"
);

produtos.push("compasso", "cartolina");

var output = document.querySelector("#output");

var msg = "";
for (var i = 0; i < produtos.length; i++) {
  msg += "produto" + (i + 1) + ":" + produtos[i] + "<br>";
}

output.innerHTML = msg;