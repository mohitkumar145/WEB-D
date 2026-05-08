let sum = function (a, b) {
  // it gives fn value
  let add = a + b;
  console.log(sum);
  console.log(add);
  return a + b;

}
sum(2, 3);

sum = function (c, d) {

  let add = c + d;
  console.log(sum); // now fn is changed
  console.log("Kya Haaal");
  console.log(add);
  return c + d;

}

sum(8, 3); 