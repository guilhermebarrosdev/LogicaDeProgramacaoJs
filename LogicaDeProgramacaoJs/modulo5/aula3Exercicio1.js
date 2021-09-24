var arr = [
{ nome: "Lucas", email: "lucas@email.com" },
{ nome: "José", email: "jose@email.com" },
{ nome: "Guilherme", email: "guilherme@email.com" },
];

var msg = "";
for (var i = 0; i < arr.length; i++) {
msg += "<h2>Nome:" + arr[i].nome + "</h2>";
msg += "<p> email: " + arr[i].email + "</p><br>";
}

document.querySelector("#output").innerHTML = msg;