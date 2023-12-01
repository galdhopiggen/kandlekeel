// test_file.js

// Issue 1: Unused variable
const unusedVariable = "I'm unused";

// Issue 2: SQL Injection vulnerability
const userInput = "user-input";
const sqlQuery = `SELECT * FROM users WHERE username = '${userInput}'`;

// Issue 3: Insecure random number generation
const insecureRandom = Math.random();

// Issue 4: Hardcoded API key
const apiKey = "your-api-key";

// Issue 5: Use of eval
eval("console.log('This is eval!')");
