async function foo() {
  const a = await fetch("https://jsonplaceholder.typicode.com/todos/1");
  console.log("Response");
  console.log("Now End");
}
console.log("Start");
foo();
console.log("NOT end");
