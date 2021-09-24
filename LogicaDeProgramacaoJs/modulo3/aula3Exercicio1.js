var n1 = prompt("Digite um número");
      n1 = parseFloat(n1);

      escreve();

      function escreve() {
        var output = document.querySelector("#output");
        output.innerHTML = n1;
      }

      function somar() {
        var n2 = prompt("Digite outro número");
        n2 = parseFloat(n2);

        // n1 = n1 + n2;
        n1 += n2;
        escreve();
      }

      function subtrair() {
        var n2 = prompt("Digite outro número");
        n2 = parseFloat(n2);

        // n1 = n1 - n2;
        n1 -= n2;
        escreve();
      }

      function multiplicar() {
        var n2 = prompt("Digite outro número");
        n2 = parseFloat(n2);

        // n1 = n1 * n2;
        n1 *= n2;
        escreve();
      }

      function dividir() {
        var n2 = prompt("Digite outro número");
        n2 = parseFloat(n2);

        // n1 = n1 / n2;
        n1 /= n2;
        escreve();
      }