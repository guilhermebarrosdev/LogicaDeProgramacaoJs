var arr = [1, 2, 3, 4];
      var arrDobrado = dobrar(arr);

      function dobrar(arr) {
        var arrTemp = [];
        for (var i = 0; i < arr.length; i++) {
          arrTemp[i] = arr[i] * 2;
        }
        return arrTemp;
      }
      console.log(arr);
      console.log(arrDobrado);