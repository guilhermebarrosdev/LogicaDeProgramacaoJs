function teste1() {
  console.log("teste 1 chamado");
}
function teste2(p) {
  console.log("teste 2 chamado recebendo p");
}
function executa(cb) {
  console.log("executa chamado");
  if (typeof cb === "function") {
    cb("parametro de callback");
  }
}
executa(teste1);
executa(function (x) {
  console.log("função anonima", x);
});