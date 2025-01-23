// @ts-check
//
// ☝🏽 The line above enables type checking for this file. Various IDEs interpret
// the @ts-check directive. It will give you helpful autocompletion on the web
// and supported IDEs when implementing this exercise. You don't need to
// understand types, JSDoc, or TypeScript in order to complete this JavaScript
// exercise, and can completely ignore this comment block and directive.

// 👋🏽 Hi again!
//
// A quick reminder about exercise stubs:
//
// 💡 You're allowed to completely clear any stub before you get started. Often
// we recommend using the stub, because they are already set-up correctly to
// work with the tests, which you can find in ./freelancer-rates.spec.js.
//
// 💡 You don't need to write JSDoc comment blocks yourself; it is not expected
// in idiomatic JavaScript, but some companies and style-guides do enforce them.
//
// Get those rates calculated!

/**
 * The day rate, given a rate per hour
 *
 * @param {number} ratePerHour
 * @returns {number} the rate per day
 */
export function dayRate(ratePerHour) {
  return ratePerHour * 8;
}

/**
 * Calculates the number of days in a budget, rounded down
 *
 * @param {number} budget: the total budget
 * @param {number} ratePerHour: the rate per hour
 * @returns {number} the number of days
 */
export function daysInBudget(budget, ratePerHour) {
  return Math.floor(budget / dayRate(ratePerHour));
}

/**
 * Calculates the discounted rate for large projects, rounded up
 *
 * @param {number} ratePerHour
 * @param {number} numDays: number of days the project spans
 * @param {number} discount: for example 20% written as 0.2
 * @returns {number} the rounded up discounted rate
 */
export function priceWithMonthlyDiscount(ratePerHour, numDays, discount) {
  const diasPorMes = 22;
  const mesesCompletos = Math.floor(numDays / diasPorMes);
  const diasRestantes = numDays % diasPorMes;

  const fullMonthRate = mesesCompletos * diasPorMes * dayRate(ratePerHour);
  const discountedFullMonthRate = fullMonthRate * (1 - discount);
  const remainingDaysRate = diasRestantes * dayRate(ratePerHour);

  const totalRate = discountedFullMonthRate + remainingDaysRate;
  return Math.ceil(totalRate);
}

// Ejemplo de uso
const ratePerHour = 89;
const numDays = 230;
const discount = 0.42;

console.log(`Day rate for $${ratePerHour}/hour: $${dayRate(ratePerHour)}`);
console.log(`Days in budget of $20000 for $${ratePerHour}/hour: ${daysInBudget(20000, ratePerHour)}`);
console.log(`Price with monthly discount: $${priceWithMonthlyDiscount(ratePerHour, numDays, discount)}`);