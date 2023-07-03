console.log("Welcome");
function func(response) {
  console.log("response");
}
const res = fetch("https://jsonplaceholder.typicode.com/todos/1");
res.then(func);

console.log("Finished");

//Output
// Welcome
// Finished
// Response
