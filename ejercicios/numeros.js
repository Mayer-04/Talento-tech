/**
 *
 * @param {number[]} list
 * @returns {object}
 */
//

const listNumbers = function (list) {
  let ceros = [];
  let positivos = [];
  let negativos = [];

  for (let number of list) {
    if (number === 0) {
      ceros.push(number);
    } else if (number > 0) {
      positivos.push(number);
    } else if (number < 0) {
      negativos.push(number);
    }
  }

  return { ceros, positivos, negativos };
};

const numeros = [0, 1, 2, 3, 4, 5, 6, -1, -2];
listNumbers(numeros);
console.log(listNumbers(numeros));
