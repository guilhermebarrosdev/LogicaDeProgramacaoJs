var chamou1 = 0;
var chamou2 = 0;
var chamou3 = 0;

function fibonacci(n) {
  chamou1++;
  var a = 1;
  var b = 0;
  var temp;

  while (n--) {
    temp = a;
    a = a + b;
    b = temp;
  }
  return b;
}
// console.log(fibonacci(1));
console.log(fibonacci(30));
console.log("chamou1", chamou1);

function fibonacci2(n) {
  if (n <= 2) return 1;
  return fibonacci2(n - 1) + fibonacci2(n - 2);
}
console.log("-----");
console.log(fibonacci2(30));
// console.log("chamou2", chamou2);
console.log("chamou2", chamou2);

function fibonacci3(n, cache) {
  chamou3++;
  cache = cache || {};
  if (cache[n]) return cache[n];

  if (n <= 2) return 1;
  return (cache[n] = fibonacci3(n - 1, cache) + fibonacci3(n - 2, cache));
}
console.log("---");
console.log(fibonacci3(30));
console.log("chamou3", chamou3);