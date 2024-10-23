function receivesAFunction(callback) {
    callback();  // Calls the passed-in function
  }
  function returnsANamedFunction() {
    function namedFunction() {
      console.log("I'm a named function!");
    }
    return namedFunction;  // Return the named function
  }
  function returnsAnAnonymousFunction() {
    return function() {
      console.log("I'm an anonymous function!");
    };
  }