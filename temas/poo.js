// TODO: Función constructora
function Person(name, age) {
  this.name = name;
  this.age = age;
  this.saludar = function () {
    console.log(`Hola ${this.name} tienes ${this.age}`);
  };

  //*  Método estático
  Person.saludar = function () {
    console.log("Hola");
  };
}

const persona1 = new Person("Mayer", 23);
console.log(persona1);

// TODO: Clase
class Persona {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }

  saludar() {
    console.log(`Hola ${this.name} tienes ${this.age}`);
  }
}

const persona2 = new Persona("Andrés", 24);
console.log(persona2);

// TODO: Factory Function

function createPerson(name, age) {
  return {
    name: name,
    age: age,
    saludar() {
      console.log(`Hola ${this.name} tienes ${this.age}`);
    },
  };
}
