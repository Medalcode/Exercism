// @ts-check
//
// The line above enables type checking for this file. Various IDEs interpret
// the @ts-check directive. It will give you helpful autocompletion when
// implementing this exercise.

/**
 * Calculates the total bird count.
 *
 * @param {number[]} birdsPerDay
 * @returns {number} total bird count
 */

export function totalBirdCount(birdsPerDay) {

  let contador = 0;
    for (let i = 0; i < birdsPerDay.length; i++){
      console.log(birdsPerDay[i])
      contador +=  birdsPerDay[i]
      console.log(contador)
    }
  return contador
}

/**
 * Calculates the total number of birds seen in a specific week.
 *
 * @param {number[]} birdsPerDay
 * @param {number} week
 * @returns {number} birds counted in the given week
 */
export function birdsInWeek(birdsPerDay, week) {
    let first_day = (week - 1) * 7;
    let contador = 0;
    for (let i = first_day; i < first_day + 7; i++) {
        contador += birdsPerDay[i];
    }
    return contador;
}

/**
 * Fixes the counting mistake by increasing the bird count
 * by one for every second day.
 *
 * @param {number[]} birdsPerDay
 * @returns {number[]} corrected bird count data
 */
export function fixBirdCountLog(birdsPerDay) {
  let contador = 0;
    for (let i = 0; i < birdsPerDay.length; i++){
      console.log(birdsPerDay[i])
      contador +=  birdsPerDay[i]
      console.log(contador)
    }
    return contador
}
