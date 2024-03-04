/**
 * @typedef {Object} TimeParams
 * @property {number} days
 * @property {number} hours
 * @property {number} minutes
 * @property {number} seconds
 */

/**
 * @param {TimeParams} params
 * @returns {number}
 */

// TODO: Función de expresión - Función anónima
const convertMilliseconds = function ({ days, hours, minutes, seconds }) {
  const daysInMilliseconds = days * 24 * 60 * 60 * 1_000;
  const hoursInMilliseconds = hours * 60 * 60 * 1_000;
  const minutesInMilliseconds = minutes * 60 * 1_000;
  const secondsInMilliseconds = seconds * 1_000;

  return {
    days: daysInMilliseconds,
    hours: hoursInMilliseconds,
    minutes: minutesInMilliseconds,
    seconds: secondsInMilliseconds,
  };
};

console.log(convertMilliseconds({ days: 1, hours: 2, minutes: 3, seconds: 4 }));
