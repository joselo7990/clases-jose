// Tipos de datos en javascript

// Datos primitivos
// number
// string
// boolean
// null
// undefined
// symbol
// bigint

// Operadores aritmeticos
// + suma
// - resta
// * multiplicacion
// / division
// % modulo (resto de la division) 2 % 2 = 0 - 3 % 2 = 1
// ** exponente

// Al hacer operaciones con numeros, se pueden usar parentesis para indicar el orden de las operaciones como en matematicas
// 2 + 2 * 2 = 6
// (2 + 2) * 2 = 8

// string
// Hay 3 formas de representar un string
// const nombre = "Juan"
// "Esto es un string"
// 'Esto tambien es un string ' + nombre => Aca estamos concatenando dos strings
// `Esto es un string ${nombre}` => Aca estamos interpolando el valor de la variable nombre dentro del string

// boolean
// true
// false

// Datos thuthy y falsy
// console.log(Boolean(0)) // false
// console.log(Boolean(1)) // true
// console.log(Boolean([])) // true
// console.log(Boolean({})) // true
// console.log(Boolean("")) // false
// console.log(Boolean("hola")) // true
// console.log(Boolean("false")) // true
// console.log(Boolean(new Date())) // true

// Operadores de comparacion
// == igualdad
// === igualdad estricta
// != desigualdad
// !== desigualdad estricta
// > mayor que
// < menor que
// >= mayor o igual que
// <= menor o igual que

console.log(2 == 2); // true
console.log(2 == "2"); // true
console.log(2 === "2"); // false
console.log(typeof 2); // number
console.log(typeof "2"); // string
console.log(2 != 2); // false
console.log(2 != "2"); // false
console.log(2 !== "2"); // true

// Operadores logicos
// && and
// || or
// ! not // Invierte el valor de un booleano => !true = false y !false = true

// Operador AND && (La unica forma de que sea true es que ambos valores sean true)
// true && true = true
// true && false = false
// false && true = false
// false && false = false

// Operador OR || (La unica forma de que sea false es que ambos valores sean false)
// true || true = true
// true || false = true
// false || true = true
// false || false = false

console.log(2 < 3 && 3 < 4); // true (2 < 3 = true && 3 < 4 = true => true && true = true)
console.log(2 < 3 && 5 < 4); // false (2 < 3 = true && 5 < 4 = false => true && false = false)
console.log(2 < 3 || 5 < 4); // true (2 < 3 = true || 5 < 4 = false => true || false = true)
console.log(2 > 3 || 5 < 4); // false (2 > 3 = false || 5 < 4 = false => false || false = false)

console.log(!(2 > 3 || 5 < 4)); // true (2 > 3 = false || 5 < 4 = false => false || false = false => !false = true)

// Variables => Son espacios en memoria que nos permiten guardar valores => Hay 3 formas de declarar variables
// var => Es la forma antigua de declarar variables
// let => Es la forma moderna de declarar variables
// const => Es la forma moderna de declarar variables pero que no se pueden reasignar

var nombre = "Juan";
let apellido = "Perez";
const edad = 30; // Si intentamos reasignar una constante, nos va a tirar un error
// edad = 31 // Esto nos va a tirar un error

// Scope => Es el alcance que tiene una variable => Las variables declaradas con var tienen un scope global y las variables declaradas con let y const tienen un scope local

function saludar() {
  console.clear();
  let nombre = "Luka";
  console.log(nombre);
  console.log(apellido);
  console.log(edad);
  if (true) {
    var apellido = "Perez";
    let edad = 30;
    console.log(nombre);
    console.log(apellido);
    console.log(edad);
  }
}

// saludar()

if (true) {
  var posicion = "arquero";
  let equipo = "Boca";
}

console.log(posicion);
// console.log(equipo) // Esto nos va a tirar un error porque equipo no esta definido

let numero = 19;
if (true) {
  const numero2 = 19;
}

// Funciones
// Hositing: Es cuando javascript mueve todas las funciones al principio del archivo y despues ejecuta el codigo
// Esto nos permite llamar a una funcion antes de declararla, solo si la declaramos con la palabra reservada function

console.log(sumar(2, 3));

function sumar(a, b) {
  return a + b;
}

// Expresiones de funciones
const sumar2 = function (a, b) {
  return a + b;
};

// console.log(sumar3(2, 3)) // Esto da error porque sumar3 aun no esta definida
// Funciones flechas
const sumar3 = (a, b) => {
  return a + b;
};

// Los parentesis son opcionales cuando solo tenemos un parametro
const sumar4 = (a) => {
  return a + 1;
};

console.log(sumar4(2));

// Si la funcion solo tiene una linea de codigo, podemos omitir las llaves y el return ya que es implicito
const sumar5 = (a, b) => a + b;

// return
// Cuando una funcion no tiene un return, devuelve undefined
// Cuando una funcion tiene un return, devuelve lo que le indiquemos
// Cuando una funcion tiene un return, se corta la ejecucion de la funcion
// Cuando una funcion tiene un return, podemos devolver cualquier tipo de dato
// Cuando una funcion tiene un return, podemos devolver otra funcion

function sumar10(a, b) {
  const sumaDeParametros = a + b;

  console.log(sumaDeParametros);

  return sumaDeParametros;

  console.log("Esto no se va a ejecutar nunca");
}

const suma = sumar10(100, 100);

console.log(suma);

// Parametros
// Los parametros son los valores que recibe una funcion
// Los parametros son opcionales
// Los parametros tienen un orden
// Los parametros tienen un valor por defecto
// Los parametros pueden ser cualquier tipo de dato
// Los parametros pueden ser funciones

function saludar2(nombre = "luka", edad = 30) {
  console.log(`Hola ${nombre}, tenes ${edad} años`);
}

saludar2("Juan", 20);
saludar2("Juan");
saludar2();
saludar2(21, "Jose"); // Esto queda mal porque no respetamos el orden de los parametros

// Arrays
// Los arrays son una lista de elementos
// Los arrays pueden tener cualquier tipo de dato
// Los arrays pueden tener cualquier cantidad de elementos
// Los arrays pueden tener elementos repetidos
// Los arrays pueden tener elementos de diferentes tipos de datos
// Los arrays pueden tener otros arrays
// Los arrays pueden tener objetos
console.clear();
const productos = [
  {
    id: 1,
    nombre: "Coca Cola",
    precio: 100,
    stock: 100,
    estaDisponible: true,
  },
  {
    id: 2,
    nombre: "Pepsi",
    precio: 400,
    stock: 400,
    estaDisponible: true,
  },
  {
    id: 3,
    nombre: "Fanta",
    precio: 300,
    stock: 1,
    estaDisponible: false,
  },
  {
    id: 4,
    nombre: "Mirinda",
    precio: 400,
    stock: 100,
    estaDisponible: true,
  },
];

// Metodos mas usados
// filter - Filtra los elementos de un array segun una condicion y retorna un nuevo array con los elementos filtrados
const filteredProducts = productos.filter((producto) => producto.precio > 100);

// Eliminamos el id 2 del array
const nuevosProductos = productos.filter((producto) => producto.id !== 2);

// Filtramos los productos que estan disponibles
const productosDisponibles = productos.filter(
  (producto) => producto.estaDisponible
);

console.log(productosDisponibles);

const productosDe400 = productos.filter((producto) => producto.precio === 400);
console.log(productosDe400);

// find
// Encuentra un elemento de un array segun una condicion y retorna el primer elemento que coincida con la condicion
console.clear();
const productoEncontrado = productos.find((producto) => producto.id === 2);

console.log(productoEncontrado);

const cocaCola = productos.find(
  (producto) => producto.nombre.toLowerCase() === "Coca Cola".toLowerCase()
);

console.log(cocaCola);

// map
// Recorre un array y retorna un nuevo array con los elementos modificados
console.clear();
const productosConIVA = productos.map((producto) => {
  return {
    ...producto,
    precio: producto.precio * 1.21,
  };
});

console.log(productosConIVA);

const nombres = productos.map((producto) => producto.nombre);
console.log(nombres);

// spread operator - Operador de propagacion

const persona = {
  nombre: "Juan",
  apellido: "Perez",
  edad: 30,
};

const persona2 = {
  ...persona,
  nombre: "Luka",
};

const array1 = [1, 2, 3];
const array2 = [4, 5, 6];

const array3 = [...array1, ...array2];

console.log(array3);

// forEach - Recorre un array y ejecuta una funcion por cada elemento del array
console.clear();
productos.forEach((producto) => {
  console.log(producto.nombre + " - " + producto.precio);
});

productos.forEach((producto) => {
  document.body.style.backgroundColor = "black";
  document.body.style.color = "white";
  document.body.innerHTML += `<p>${producto.nombre} - ${producto.precio}</p>`;
});

// some - Recorre un array y retorna true si algun elemento cumple con la condicion
console.clear();
const hayProductosDisponibles = productos.some(
  (producto) => producto.estaDisponible
);
console.log(hayProductosDisponibles);

const hayProductosConPocoStock = productos.some(
  (producto) => producto.stock < 10
);

console.log(hayProductosConPocoStock);
// every - Recorre un array y retorna true si todos los elementos cumplen con la condicion
console.clear();

const todosLosProductosDisponibles = productos.every(
  (producto) => producto.estaDisponible
);

console.log(todosLosProductosDisponibles);

const todosLosProductosConStock = productos.every(
  (producto) => producto.stock > 0
);

console.log(todosLosProductosConStock);

// length - Propiedad que nos indica la cantidad de elementos de un array
console.clear();
console.log(productos.length);

// sort - Ordena los elementos de un array segun una condicion
console.clear();

const numeros = [1, 5, 2, 7, 8];

const numerosOrdenados = numeros.sort((a, b) => b - a);

console.log(numerosOrdenados);

// toSorted - Ordena los elementos de un array segun una condicion y retorna un nuevo array con los elementos ordenados

const numerosOrdenados2 = numeros.toSorted((a, b) => b - a);

console.log(numerosOrdenados2);

// Matrices - Son arrays de arrays
console.clear();
const matriz = [
  [1, 2, 3],
  [4, 5, 6],
];

for (let i = 0; i < matriz.length; i++) {
  for (let j = 0; j < matriz[i].length; j++) {
    console.log(`Columna ${j + 1} de la fila ${i + 1}`);
  }
}

const tablero = [
  ["X", "O", "X"],
  ["O", "X", "X"],
  ["O", "X", "O"],
];

// Algoritmos con arrays
const findMaxAlgorithm = (array) => {
  let max = array[0]; // Recuperamos el primer elemento del array

  // Recorremos el array desde el segundo elemento hasta el ultimo
  array.forEach((el) => {
    // Es el elemento actual mayor al maximo?
    if (el > max) {
      // Si es mayor, lo guardamos en la variable max
      max = el;
    }
  });

  return max;
};

console.clear();
console.log(findMaxAlgorithm([1, 2, 3, 4, 6, 7, 8, 9]));

// Una forma mas sencilla de hacerlo
console.log(Math.max(...[1, 2, 3, 4, 6, 7, 8, 9, 200]));

/*
Ejercicios de practica:
1 - Suma de elementos: Crea una función que reciba un array de números y devuelva la suma de todos los elementos.


2 - Filtrar números pares: Escribe una función que tome un array de números y devuelva un nuevo array que contenga solo los números pares.

3 - Encontrar el número más grande: Crea una función que encuentre el número más grande en un array de números.
javascript

4 - Eliminar duplicados: Escribe una función que elimine los elementos duplicados de un array.

5 - Reversa: Implementa una función que invierta un array sin modificar el array original.

6 - Buscar elemento: Crea una función que busque un elemento en un array y devuelva su índice, o -1 si no se encuentra.

Extra: Ver este video sobre context de react para ir metiendonos en el tema: https://www.youtube.com/watch?v=UPCOJgLlr3w&ab_channel=FernandoHerrera
*/

function sumaElementos(array) {
  let suma = 0;
  for (let i = 0; i < array.length; i++) {
    suma = suma + array[i];
  }
  return suma;
}
console.log(sumaElementos([2, 3]));

function numerosPares(array) {
  let pares = [];
  for (let i = 0; i < array.length; i++) {
    if (array[i] % 2 === 0) {
      pares.push(array[i]);
    }
  }
  return pares;
}

function numMasGrande(array) {
  return Math.max(...array);
}

// esta esta mal//

// function eliminarDuplicados(array) {
//   let nuevosNumeros = [];

//   for (let i = 0; i < array.length; i++) {
//     for (let j = 0; j < array.length; j++) {
//       if (array[i] !== array[j]) {
//         nuevosNumeros.push(array[i] & array[j]);
//       }
//     }
//   }
//   return nuevosNumeros;
// }

function alReves(array) {
  return array.reverse();
}
