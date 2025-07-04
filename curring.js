function add(a) {
  return function (b) {
    return function (c) {
      return function (d) {
        return a + b + c + d;
      };
    };
  };
}

const result = add(3)(4)(3)(4);
console.log(result);
