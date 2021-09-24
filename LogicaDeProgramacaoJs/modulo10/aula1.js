var msg = "";
var guilherme = {
  nome: "Guilherme",
  sobrenome: "Barros",
  rg: "11.222.333-44",
  tel: "11 01234-1234",
};

for (propiedade in guilherme) {
  console.log(propiedade, ": ", guilherme[propiedade]);
}

document.querySelector("#output").innerHTML = msg;