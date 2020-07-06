const OPERATIONS = new Map();
OPERATIONS.set("+", (a,b) => a+b);
OPERATIONS.set("-", (a,b) => a-b);
OPERATIONS.set("x", (a,b) => a*b);
OPERATIONS.set("÷", (a,b) => a/b);

export default OPERATIONS;