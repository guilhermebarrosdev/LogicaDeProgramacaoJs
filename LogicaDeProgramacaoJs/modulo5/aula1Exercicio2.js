var numeros = new Array(1, 2, 3, 5, 2);

      var somaDosPares = somaOsPares(numeros);

      alert("A soma é: " + somaDosPares);

      function somaOsPares(arr) {
        var soma = 0;
        for (var i = 0; i < arr.length; i++) {
          console.log(i);
          console.log(arr[i]);

          if (!isNaN(arr[i]) && arr[i] % 2 === 0) {
            soma += arr[i];
          }
        }
        return soma;
      }