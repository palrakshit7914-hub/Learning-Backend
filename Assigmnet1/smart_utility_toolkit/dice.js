// --------------------------TASK 5---------------------------------

const crypto = require('crypto');

// Function to simulate rolling a single 6-sided dice
function rollDice() {
  // randomInt range: min (inclusive: 1), max (exclusive: 7)
  return crypto.randomInt(1, 7);
}

// 1. Single Roll
console.log(`Dice Rolled: ${rollDice()}`);

// 2. Simulate multiple rolls (e.g., 5 times)
console.log("\nSimulating 5 Dice Rolls:");
for (let i = 1; i <= 5; i++) {
  console.log(`Roll ${i}: ${rollDice()}`);
}