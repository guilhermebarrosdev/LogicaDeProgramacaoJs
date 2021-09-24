//   var alunos = [
      //       {nome: 'daniel', id: '112233', endereco: 'rua faz de conta 2, ap3, são paulo SP', },
      //       {nome: 'josé', id: '112244', endereco: 'rua belezura 5, são paulo SP', },
      //       {nome: 'joão', id: '113344', endereco: 'rua belezura 20, são paulo SP - perto do josé', },
      //       {nome: 'maria', id: '114433', endereco: 'rua chuchu 1,  são paulo SP', },
      //       {nome: 'ana', id: '115544', endereco: 'avenida belezura 41 , são paulo SP', },
      //   ]
      function Endereco(dados) {
        this.logadouro = dados.logadouro || "";
        this.n = dados.n || 0;
        this.complemento = dados.complemento;
        this.cidade = dados.cidade;
        this.estado = dados.estado;
        this.cep = dados.cep;
      }

      var alunos = [
        {
          nome: "daniel",
          id: "112233",
          endereco: new Endereco({
            logadouro: "rua faz de conta",
            n: 2,
            complemento: null,
            cidade: "São Paulo",
            estado: "SP",
            cep: "00000-001",
          }),
        },
        {
          nome: "josé",
          id: "112244",
          endereco: new Endereco({
            logadouro: "rua belezura",
            n: 5,
            complemento: "ap3",
            cidade: "São Paulo",
            estado: "SP",
            cep: "00000-002",
          }),
        },
        {
          nome: "joão",
          id: "113344",
          endereco: new Endereco({
            logadouro: "rua belezura",
            n: 20,
            complemento: null,
            cidade: "São Paulo",
            estado: "SP",
            cep: "00000-003",
          }),
        },
        {
          nome: "maria",
          id: "114433",
          endereco: new Endereco({
            logadouro: "rua chuchu",
            n: 1,
            complemento: null,
            cidade: "São Paulo",
            estado: "SP",
            cep: "00000-004",
          }),
        },
        {
          nome: "ana",
          id: "115544",
          endereco: new Endereco({
            logadouro: "avenida belezura",
            n: 41,
            complemento: null,
            cidade: "São Paulo",
            estado: "SP",
            cep: "00000-0005",
          }),
        },
      ];

      var enderecos = [];
      var msg = "";

      for (var i = 0; i < alunos.length; i++) {
        enderecos[i] = alunos[i].endereco;
      }

      for (var i = 0; i < enderecos.length; i++) {
        var endereco = enderecos[i];

        for (prop in endereco) {
          //   console.log(prop);
          //   console.log(endereco[prop]);
          if (endereco[prop])
            msg += "i: " + i + ". " + prop + ": " + endereco[prop] + "<br> ";
        }
        msg += "<hr>";
      }
      document.querySelector("#output").innerHTML = msg;