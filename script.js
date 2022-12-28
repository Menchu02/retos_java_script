// // Imprime todos los numeros del array


// let numberList1 = [7, 2, 3, 6, 5, 4, 100, 8, 9]
// for (let i = 0; i < numberList1.length; i++) {
//   console.log(numberList1[i])
// }
// // FOR OF
// for (let number of numberList1) {
//   console.log(number)
// }



// - Dado un array de números imprimir por consola el número mayor.
// CON FUNCION:

let numberList2 = [7, 2, 3, 6, 5, 4, 1000, 8, 9]
function maxNumber(array){
  let maxNumberList = array[0]
  for ( let item of array){
    if (item > maxNumberList){
      maxNumberList = item 
      
    }
  }return maxNumberList
}
console.log ( maxNumber(numberList2))
// SIN FUNCION
// let numberList2 = [7, 2, 3, 6, 5, 4, 100, 8, 9]
// // manera de inicializar
// let maxNumber = numberList2[0]
// for (let i = 0; i < numberList2.length; i++) {
//   if (numberList2[i] > maxNumber) {
//     maxNumber = numberList2[i]
//   }
// }

// console.log(maxNumber)





// - Dado un array de números imprime por consola la suma de todos los que sean pares.
// CON FUNCION
let numberList3 = [3, 4, 7, 8, 9, 14, 18, 20, 104, 105, 186]
let sumatorio = 0
function sumaPares(array){
  for ( let item of array){
    if( item % 2 == 0){
      sumatorio += item
    }
  }return sumatorio
}
console.log(sumaPares(numberList3))
// SIN FUNCION
// let sumatorioPares = 0

// for (let i = 0; i < numberList3.length; i++) {
//   if (numberList3[i] % 2 == 0) {
//     sumatorioPares += numberList3[i]
//   }
// }
// console.log(sumatorioPares)
// // FOR OF
// for (let value of numberList3) {
//   if (value % 2 === 0) {
//     sumatorioPares += value
//   }
// }

// console.log(`el sumatorio es :  ${sumatorioPares}`)



// // - Dado un array de números y strings imprime un array de solamente los strings, escribe una función que devuelva un array de solamente los strings
// // CON FUNCION Y FOR OF 
let array = ['casa', true, 'perro', 1, 'amiga', 'amor', 'hola', 3, 'playa', 998]
function toOlnyStringArray(array) {
  let soloString = []
  for (let item of array) {
    if (typeof item == 'string') {
      soloString.push(item)
      // console.log(array)
    }
  }return soloString
}
console.log(toOlnyStringArray(array))
// // SIN FUNCION
// // let soloString = []
// // for (let i = 0; i < array.length; i++) {
// //   if (typeof array[i] == 'string') {
// //     soloString.push(array[i])
// //   }
// // }
// // console.log(`los string son: ${soloString}`)



// // - Dado un array de strings imprime un array de solamente los strings que empiezan por ‘a’.
// // CON FUNCION Y FOR EACH
let animals = ['rata', 'araña', 'aguila', 'gato']
function onlyA(stringList) {
  let stringA = []
  stringList.forEach((element) => {
    // para todos los elementos haz esto...
    if (element.includes('a')) {
      // if (element[0] == 'a') {
      // element.includes("a") cuando el elemento incluye la leta a
      stringA.push(element)
    }
  })
  return stringA
}
console.log(onlyA(animals))

// // SIN FUNCION CON FOR NORMAL
// let animales = ['aguila', 'jirafa', 'perro', 'cebra', 'ratón', 'gepardo']
// let empiezaPorA = []

// for (let i = 0; i < animales.length; i++) {
//   if (animales[i][0] == 'a') {
//     empiezaPorA.push(animales[i])
//   }
// }



// // - Dado un array de strings (con palabras repetidas) imprime el numero de repeticiones de la palabra que más veces aparezca.
let palabrasRepetidas= ["hola", "playa","arena", "sol", "hola", "ballena", "hola"]
let cuenta = 1
function masRepetida(array){
  let x = array[0]
  for( let i = 1; i< array.length; i ++  ){
    if( x == array[i]){
      cuenta += 1
    }
  }return cuenta
}
console.log(masRepetida(palabrasRepetidas))




// // - Dado un array de objetos producto (con nombre y precio) imprime un array de los objetos que sean más caros de 10.

let productos = [
  {
    Nombre: 'Camiseta',
    precio: 15,
  },
  {
    Nombre: 'Pantalon',
    precio: 15,
  },
  {
    Nombre: 'Falda',
    precio: 22,
  },
  {
    Nombre: 'Corbata',
    precio: 1,
  },
]
// FUNCION

function filtrarMasDeDiez(array){
  let masDeDiez = array.filter((item)=> item.precio> 10)
  return masDeDiez
}
console.log(filtrarMasDeDiez(productos))


// let productoMasDeDiez = productos.filter((product) => product.precio > 10)
// console.log(productoMasDeDiez)

// // FUCTION
// // function suma(num1, num2) {
// //   let result = num1 + num2
// //   return result
// // }
// // suma(1, 5)
// // suma(5, 9)
// // let suma2 = suma(8, 5)
// // console.log(suma2)



// Desarrolla una función que al darle un array de objetos ’tarea’ (con atributos de: title <string> / isDone<bool>) 
// devuelva otra lista con solamente las tareas no terminadas.
let tareas = [
  {
    title: "estudiar JS",
    isDone : true,
  },
  {
    title: "estudiar html",
    isDone : false,
  },
  {
    title: "descansar",
    isDone : true,
  },
  {
    title: "hacer entrevistas",
    isDone : false,
  },
]

function isNotDone (array){
  let noHecho = array.filter((item)=> item.isDone == false)
  return noHecho
}
console.log(isNotDone(tareas))

//LO HE INTENTADO TAMBIÉN CON UN MAP Y CON UN FOREACH, PERO NO SALE CORRECTO
//   let noHecho = array.map((item)=>{
//     if(item.isDone == false){
//     }
//   })
//   return noHecho
// }
// console.log(isNotDone(tareas))

//    array.forEach((item)=>{
//     if ( item.isDone == false){
      
    
//     }
    
//   })
//   return
// }
// console.log ( isNotDone(tareas))



//  Desarrolla una función que al pasarle una lista de objetos producto 
// (con nombre<string> y precio<number>) devuelva otra lista de los productos
//  ordenados de baratos a caros.
let productos2 = [
  {
    Nombre: 'Camiseta',
    precio: 33,
  },
  {
    Nombre: 'Pantalon',
    precio: 120,
  },
  {
    Nombre: 'Falda',
    precio: 220,
  },
  {
    Nombre: 'Corbata',
    precio: 15,
  },
]

function ordenar (array){
  array.sort((a,b)=>{
    if(a.precio< b.precio){
      return -1
    }if ( a.precio > b.precio){
      return 1
    }
    return 0
  })
}
console.log(ordenar(productos2))
// ME IMPRIME UNDEFINED!!!!!





// Desarrolla una función que al darle una lista de objetos usuario (con nombre<string>
//  y rol<string>) devuelva otra lista de los usuarios que contenga solamente 
//  los usuarios administradores 
// (’admin’) ordenados alfabéticamente por el nombre.













// Comprueba en cada uno de los usuarios que tenga al menos dos trimestres aprobados
// y añade la propiedad isApproved a true o false en consecuencia. Una vez lo tengas compruébalo con un console.log.

const alumns = [
  { name: 'Pepe Viruela', T1: false, T2: false, T3: true },
  { name: 'Lucia Aranda', T1: true, T2: false, T3: true },
  { name: 'Juan Miranda', T1: false, T2: true, T3: true },
  { name: 'Alfredo Blanco', T1: false, T2: false, T3: false },
  { name: 'Raquel Benito', T1: true, T2: true, T3: true },
]

function aproved(param) {
  for (let i = 0; i < param.length; i++) {
    let contador = 0
    if (param[i].T1) {
      //== true
      contador += 1
    }
    if (param[i].T2) {
      contador += 1
    }

    if (param[i].T3) {
      contador += 1
    }

    if (contador >= 2) {
      param[i].isApproved = true
    } else {
      param[i].isApproved = false
    }
   }

  return param
}
console.log(aproved(alumns))
//console.log(alumns)