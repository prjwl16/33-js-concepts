// Call stack
/*
    foo bar
    foo
    bar
 */

function foo() {
  console.log("Foo");
  bar();
}
function bar() {
  console.log("Bar");
}
console.log("Foo Bar");
foo();

//Summary
//Call stack is a mechanism for an interpreter to keep track of its place in a script that calls multiple functions.
