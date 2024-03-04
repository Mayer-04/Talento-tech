/*
TODO: Implementa una función que genera contraseñas aleatorias basadas en ciertos criterios. La función debe aceptar parámetros como la longitud de la contraseña y los tipos de caracteres permitidos (mayúsculas, minúsculas, números y caracteres especiales).
*/

const getCharacters = {
  minusculas: "abcdefghijklmnopqrstuvwxyz",
  mayusculas: "ABCDEFGHIJKLMNOPQRSTUVWXYZ",
  numeros: "0123456789",
  simbolos: "!@#$%^&*()_+~`|}{[]:;?><,./-=",
};

/**
 *
 * @param {number} length
 * @param {object} options
 * @returns
 */

function generatePassword(length = 8, options = {}) {
  const { minusculas, mayusculas, numeros, simbolos } = getCharacters;

  if (length < 0) throw new Error("La longitud debe ser mayor o igual a 0");

  const charSets = {
    lowercase: minusculas,
    uppercase: mayusculas,
    numbers: numeros,
    specials: simbolos,
  };

  let password = "";

  const optionsEntries = Object.entries(options);

  optionsEntries.forEach(([key, value]) => {
    if (value) password += charSets[key];
    console.log(password);
  });

  let passwordGenerator = "";

  for (let i = 0; i < length; i++) {
    const randomIndex = Math.floor(Math.random() * password.length);
    passwordGenerator += password.at(randomIndex);
  }

  return passwordGenerator;
}

const passwordLength = 10;
const uppercase = true;
const lowercase = true;
const numbers = true;
const specials = true;

console.log(
  generatePassword(passwordLength, { uppercase, lowercase, numbers, specials })
);
