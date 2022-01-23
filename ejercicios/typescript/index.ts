// console.log("Hello typescript");

// function add(a: number, b: number) {
//   return a + b;
// }

// const sum = add(2, 3);

//Boolean
// let muted: boolean = true;
// muted = false;

// //Numeros
// let numerador: number = 42;
// let denominador: number = 6;

// let resultado = numerador / denominador;

// //Strings

// let nombre: string = "Gabriel";
// let saludo = `Me llamo ${nombre}`;

// //Arreglos
// let people: string[] = [];
// people = ["Gabriel", "Angel", "Jaqueline"];

// let peopleAndNumbers: Array<string | number> = [];
// peopleAndNumbers.push("Ricardo");
// peopleAndNumbers.push(3);

// //Enum
// enum Color {
//   Rojo = "Rojo",
//   Verde = "Verde",
//   Azul = "Azul",
//   Amarillo = "Amarillo",
// }

// let colorFavorito: Color = Color.Verde;
// console.log(`Mi color favorito es ${colorFavorito}`);

// //Any

// let comodin: any = "Joker";

// comodin = { type: "WildCard" };

// //Object

// let someObject: Object = { type: "WildCard" };

//Funciones
// function add(a: number, b: number): number {
//   return a + b;
// }

// const sum = add(4, 3);

// function createAdder(a: number): (number) => number {
//   return function (b: number) {
//     return a + b;
//   };
// }

// const addFour = createAdder(4);
// const fourPlus6 = addFour(6);

// function fullName(firstName: string, lastName: string = "Dominguez") {
//   return `${firstName} ${lastName}`;
// }

// const gabriel = fullName("Gabriel");
// console.log(gabriel);

//Interfaces

enum Color {
  Rojo = "Rojo",
  Verde = "Verde",
  Azul = "Azul",
  Amarillo = "Amarillo",
}

interface Rectangulo {
  ancho: number;
  alto: number;
  color?: Color;
}

let rect: Rectangulo = {
  ancho: 4,
  alto: 6,
  // color: Color.Verde,
};

function area(r: Rectangulo) {
  return r.ancho * r.alto;
}

const areaRect = area(rect);

// console.log(areaRect);

rect.toString = function () {
  return this.color ? `Un rectangulo ${this.color}` : "Un rectangulo";
};

console.log(rect.toString());
