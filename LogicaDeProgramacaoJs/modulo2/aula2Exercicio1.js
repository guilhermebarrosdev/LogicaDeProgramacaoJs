var numero = prompt("Digite um número");
      numero = parseFloat(numero);

      var indice = 0;

      while (indice <= 1000) {
        document.write(
          numero + " x " + indice + " = " + numero * indice + " <br>"
        );

        if (indice % 10 == 0 && indice > 0) {
          document.write("<hr >");
        }
        indice = indice + 1;
      }
      document.write("Saiu do loop");