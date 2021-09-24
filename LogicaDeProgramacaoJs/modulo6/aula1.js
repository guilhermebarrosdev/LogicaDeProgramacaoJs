    <div id="calculator">
      <div id="display">0</div>

      <button onclick="limpar()">AC</button>
      <button onclick="obterPorcento()">%</button>
      <button onclick="iniciarCalculo('*')">x</button>
      <button onclick="iniciarCalculo('/')">/</button>
      <button onclick="incluirDigito('7')">7</button>
      <button onclick="incluirDigito('8')">8</button>
      <button onclick="incluirDigito('9')">9</button>
      <button onclick="finalizarCalculo()">=</button>
      <button onclick="incluirDigito('4')">4</button>
      <button onclick="incluirDigito('5')">5</button>
      <button onclick="incluirDigito('6')">6</button>
      <button onclick="iniciarCalculo('-')">-</button>
      <button onclick="incluirDigito('1')">1</button>
      <button onclick="incluirDigito('2')">2</button>
      <button onclick="incluirDigito('3')">3</button>
      <button onclick="iniciarCalculo('+')" class="mais">+</button>
      <button class="zero" onclick="incluirDigito('0')">0</button>
      <button onclick="incluirPonto()">,</button>
    </div>
      var n1 = "0";
      var operacao = null;
      var n2 = "";

      function incluirDigito(digito) {
        if (operacao !== null) {
          n2 = n2 + digito;
          mostrarNoDisplay(n2);
        } else {
          if (n1 === "0") {
            n1 = digito;
          } else {
            n1 += digito;
          }
          mostrarNoDisplay(n1);
        }
      }

      var clicadoEmIgual = false;
      function finalizarCalculo() {
        clicadoEmIgual = true;
        var resultado = calcular();
        n1 = resultado;
        mostrarNoDisplay(n1);
      }

      function obterPorcento() {
        if (!n2) {
          n2 = "";
          mostrarNoDisplay(n1);
        } else {
          var porcento = (n1 * n2) / 100;
          n2 = porcento;
        }

        mostrarNoDisplay(n2);
      }

      function calcular() {
        var nCalculado = 0;
        var _n1 = parseFloat(n1);
        var _n2 = parseFloat(n2);
        switch (operacao) {
          case "+":
            nCalculado = _n1 + _n2;
            break;
          case "-":
            nCalculado = _n1 - _n2;
            break;
          case "*":
            nCalculado = _n1 * _n2;
            break;
          case "/":
            nCalculado = _n1 / _n2;
            break;
        }
        return nCalculado;
      }

      function iniciarCalculo(simbolo) {
        if (clicadoEmIgual) {
          clicadoEmIgual = false;
          n2 = "";
        }

        if (operacao === null || n2 === "") {
          operacao = simbolo;
        } else {
          var resultado = calcular();
          n1 = resultado;
          operacao = simbolo;
          n2 = "";
          mostrarNoDisplay(n1);
        }

        operacao = simbolo;
      }

      function incluirPonto() {
        if (operacao && n2 === "") {
          n2 = "0.";
        } else if (operacao && n2) {
          n2 += ".";
        } else {
          n1 += ".";
        }
      }

      function limpar() {
        n1 = "0";
        operacao = null;
        n2 = "";
        mostrarNoDisplay(n1);
      }

      function mostrarNoDisplay(valor) {
        document.querySelector("#display").innerHTML = valor;
      }