console.log("Setup successful!", process.argv);

const operation = process.argv[2];

const num1 = (process.argv[3]);
const num2 = (process.argv[4]);

console.log("operation:", operation);
console.log("First Number:", num1);
console.log("Second Number:", num2);

switch (operation) {
    case "add":
        console.log(`Result: ${num1 + num2}`);
        break;
}