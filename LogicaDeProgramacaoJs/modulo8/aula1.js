let nComputador = "";
      let nJogador = "";
      let minhaEscolha = "";

      function sortear(max) {
        return Math.floor(Math.random() * max);
      }
      function jogar() {
        nJogador = document.querySelector("#meuNumero").value;
        if (!nJogador) {
          return alert("Primeiro digite um número");
        }
        nJogador = parseInt(nJogador);
        nComputador = sortear(5);
        minhaEscolha = document.querySelector(
          'input[type="radio"]:checked'
        ).value;
        console.log("minhaEscolha", minhaEscolha);
        let total = nJogador + nComputador;
        let resultado = total % 2 === 0 ? "par" : "impar";
        verificarResultado(resultado);
      }
      function verificarResultado(resultado) {
        if (minhaEscolha === resultado) {
          alert("Ganhei !");
        } else {
          alert("Computador ganhou !");
        }
        console.log("nJogador", nJogador);
        console.log("nComputador", nComputador);
      }