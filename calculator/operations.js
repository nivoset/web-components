const OPERATIONS = new Map();
OPERATIONS.set("+", (a,b) => a+b);
OPERATIONS.set("-", (a,b) => a-b);
OPERATIONS.set("X", (a,b) => a*b);
OPERATIONS.set("÷", (a,b) => a/b);

export default OPERATIONS;