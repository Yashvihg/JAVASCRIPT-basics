var MathModule = (function () {
  function Add(x, y) {
    return x + y;
  }

  function Product(x, y) {
    return x * y;
  }

  //this is a PRIVATE FUNCTION since its not returned.
  function Divide(x, y) {
    return x / y;
  }

  return {
    Addition: Add, // can do this as users can use function with the name ADDITION instead of ADD.
    Product: Product,
  };
})();
