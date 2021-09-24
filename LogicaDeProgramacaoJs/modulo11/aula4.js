function dizOla(praQuem, cb) {
  if (typeof cb === "function") {
    return cb(praQuem);
  }
  return console.log("ola", praQuem);
}

function boaNoite(praQuem) {
  console.log("boa noite", praQuem);
}

function boaTarde(praQuem) {
  console.log("boa tarde", praQuem);
}

function bomDia(praQuem) {
  console.log("bom dia", praQuem);
}

dizOla("maria");
dizOla("daniel", boaNoite);
dizOla("lucas", boaTarde);
dizOla("pedro", bomDia);