function foo() {
  var lastAns;
  function bar(num) {
    console.log("Previosu: ", lastAns);
    console.log("Current: ", num);
    lastAns = num;
  }
  var idk = 99;
  return bar;
}

const f = foo();
f(1);
f(2);
f(3);
console.log(f.lastAns); // will not work because you cannot access the varialbles directly

//Then how to access the values of the variables?
//Answer: Closure
//Closure is a function that has access to its outer function scope even after the outer function has returned.
//In the above example, the function bar is a closure. It has access to the outer function foo’s scope.
//Even after the function foo has returned, the variable lastAns is accessible in the function bar.
//This is because the function bar is a closure in JavaScript.
//The closure has three scope chains:
//1. It has access to its own scope (variables defined between its curly brackets).
//2. It has access to the outer function’s variables.
//3. It has access to the global variables.

//This is how u can access the private (not allowed to be accessed directly) variables

function foo1() {
  var lastAns;
  function bar(num) {
    console.log("Previous: ", lastAns);
    console.log("Current: ", num);
    lastAns = num;
  }
  function getLastAns() {
    return lastAns;
  }
  return {
    bar: bar,
    getLastAns: getLastAns,
  };
}

const f1 = foo1();
f1.bar(1);
f1.bar(2);
f1.bar(3);
console.log(f1.getLastAns());
