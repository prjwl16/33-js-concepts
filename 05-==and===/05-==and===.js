// == is not type safe
// === is type safe
//Example
var a = 10;
var b = "10";
if (a == b) {
  console.log("Equal");
} else {
  console.log("Not Equal");
}
if (a === b) {
  console.log("Equal");
} else {
  console.log("Not Equal");
}
//Output
// Equal
// Not Equal
