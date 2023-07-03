async function test() {
  const a = fetch("https://jsonplaceholder.typicode.com/todos/1");
  console.log("m down");
  a.then((res) => {
    console.log("res: ", res.json());
  }).catch((err) => {
    console.log("Err: ", err);
  });
  console.log("Finally...!");
}
test();
for (i = 0; i < 10; i++) console.log("Welcome");
