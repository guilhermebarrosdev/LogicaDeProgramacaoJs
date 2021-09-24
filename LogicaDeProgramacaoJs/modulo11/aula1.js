function dizBla(n) {
  // var msg = "";
  // while (n--) {
  //   msg += "bla";
  // }
  // return msg;
  return n > 1 ? dizBla(--n) + "bla" : "bla";
  //     if (n > 1 ) {
  //       return dizBla(--n) + "bla";
  //     } else {
  //       return "bla";
  //     }
}
console.log(dizBla(2)); // bla bla
console.log(dizBla(5)); // bla bla bla bla bla