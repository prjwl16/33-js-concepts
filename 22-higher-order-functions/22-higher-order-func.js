//A higher order function is a function that takes another function as an argument, or returns a function as a result.
//Here is the example of a higher order function that takes a function as an argument:

function higherOrderFunction(func) {
  console.log("This is a higher order function");
  func();
}

//Here is the example of a higher order function that returns a function:
function callBackFunc() {
  return function () {
    console.log("This function was returned by a higher order function");
  };
}

//Here is the example of a higher order function that takes a function as an argument and returns a function:
function takeFuncReturnFunc(func) {
  return function () {
    console.log("This function was returned by a higher order function");
    func();
  };
}

//Call functions to see output
higherOrderFunction(() => console.log("This is a callback function"));
// const result = callBackFunc();
// result();
// const ans = takeFuncReturnFunc(callBackFunc);
// console.log(ans);
// ans();
