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
