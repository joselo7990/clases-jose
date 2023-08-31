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

console.log(2 == 2) // true
console.log(2 == "2") // true
console.log(2 === "2") // false
console.log(typeof 2) // number
console.log(typeof "2") // string
console.log(2 != 2) // false
console.log(2 != "2") // false
console.log(2 !== "2") // true

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

console.log(2 < 3 && 3 < 4) // true (2 < 3 = true && 3 < 4 = true => true && true = true)
console.log(2 < 3 && 5 < 4) // false (2 < 3 = true && 5 < 4 = false => true && false = false)
console.log(2 < 3 || 5 < 4) // true (2 < 3 = true || 5 < 4 = false => true || false = true)
console.log(2 > 3 || 5 < 4) // false (2 > 3 = false || 5 < 4 = false => false || false = false)

console.log(!(2 > 3 || 5 < 4)) // true (2 > 3 = false || 5 < 4 = false => false || false = false => !false = true)

// Variables => Son espacios en memoria que nos permiten guardar valores => Hay 3 formas de declarar variables
// var => Es la forma antigua de declarar variables
// let => Es la forma moderna de declarar variables
// const => Es la forma moderna de declarar variables pero que no se pueden reasignar

var nombre = "Juan"
let apellido = "Perez"
const edad = 30 // Si intentamos reasignar una constante, nos va a tirar un error
// edad = 31 // Esto nos va a tirar un error

// Scope => Es el alcance que tiene una variable => Las variables declaradas con var tienen un scope global y las variables declaradas con let y const tienen un scope local

function saludar() {
  console.clear()
  let nombre = "Luka"
  console.log(nombre)
  console.log(apellido)
  console.log(edad)
  if (true) {
    var apellido = "Perez"
    let edad = 30
    console.log(nombre)
    console.log(apellido)
    console.log(edad)
  }
}

// saludar()

if (true) {
  var posicion = "arquero"
  let equipo = "Boca"
}

console.log(posicion)
// console.log(equipo) // Esto nos va a tirar un error porque equipo no esta definido
