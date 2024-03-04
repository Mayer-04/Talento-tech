import fs from "node:fs";
import path from "node:path";

const currentDirectory = `${process.cwd()}/archivo.txt`;
const normalize = path.normalize(currentDirectory);
const content = "Hello World!";

// console.log(currentDirectory);
// console.log(normalize);

fs.writeFile(normalize, content, (err) => {
  if (err) {
    console.error(`Error al crear el archivo`);
    throw err;
  }

  console.log("Archivo creado");
});
