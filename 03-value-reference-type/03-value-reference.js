const x = 10;
const y = x;
x = 20;

console.log(x); // 20
console.log(y); // 10

//This happed becase x and y are primitive types and they are stored in the stack memory.

const a = { value: 10 };
const b = a;
a.value = 20;
console.log(a); // { value: 20 }
console.log(b); // { value: 20 }

//This happed becase a and b are reference types and they are stored in the heap memory.
