//sumar 10 a todos los elementos de un arreglo
//add ten to every element in the array
const test = [1, 2, 3];

const add = (array) => {
  //this is a arrow function
  for (let i = 0; i < array.length; i++) {
    array[i] = array[i] + 10;
  }

  //   let i = 0;
  //   while (i <= 4) {
  //     array[i] = array[i] + 10;
  //     i++;
  //   }
  return array;
};
console.log(add(test));

//restar 10 a todos los elementos de un arreglo
//subtract ten to every element in the array

const test = [10, 20, 30];

const subtract = (array) => {
  for (let i = 0; i < array.length; i++) {
    array[i] = array[i] - 10;
  }
  return array;
};

console.log(subtract(test));

//elimina el primer elemto de un arreglo
//delete the first element of an array
const test = [1, 2, 3, 4];

//const first = (array) => {
delet = array.shift(); //this method take the firts element to an array
console.log("Se elimino " + delet);
return array;
console.log(first(test));

//elimina el ultimo elemento de una arreglo
//delete the last element of an arrays

const test = [1, 2, 3, 4];

const last = (array) => {
  delet = array.pop(); //this method take the last element to an array
  console.log("Se elimino " + delet);
  return array;
};
console.log(last(test));

//convierte todos los numeros del arreglo en string
//transform all elements in the array to string

const test = ["1", 2, 3, 4, 5];

const toStringI = (array) => {
  for (let i = 0; i < array.length; i++) {
    array[i] = array[i].toString();
  }
  return array;
};
console.log(toStringI(test));

//aprender funciones filter, map, reduce, spread operator. Hacer los anteriores con estos metodos, se puede regresar otro array.
//Filter y map se usa siempre. Buscar en donde puedes usar map aparte de estos problemas.

//to learn method filter, map , reduce, spread operator. maker new scips with this method.

//sumar 10 a todos los elementos de un arreglo
//add ten to every element in the array
const test = [9, 8, 7, 6];

//const a = 0;
const suma = test.map((a) => a + 10); // i used the funtion map
console.log(suma);

const a = 0;
const suma = test.reduce((a, b) => a + b); //i used the funtion reduce
console.log(suma);

//restar 10 a todos los elementos de un arreglo
//subtract ten to every element in the array
const test = [1, 2, 3, 4];

const test = [9, 8, 7, 6];

//const a = 0;
const suma = test.map((a) => a - 10); // i used the funtion map
console.log(suma);

const a = 0;
const resta = test.reduce((a, b) => a - b); //i used the funtion reduce
console.log(resta);

//convierte todos los numeros del arreglo en string
//transform all elements in the array to string
const test = [1, 2, 3, 4];

const toStringI = test.map((a) => a.toString());
console.log(toStringI);

//seleciona que dato deseas eliminar
const test = [1, 2, 3, 4, 5];
console.log(test);

var input = prompt("Selec a one num ");
const delet = test.filter((a) => a != input);
console.log(delet);

//cuenta cuantas veces aparece el elemnto X en el arreglo
//count how many times an element X appears in the a arrays
const test = [1, 2, 3, 4, 2, 2, 2, 2, 1, 2, 6, 3, 8];

const suma = test.reduce((prev, item) => item + prev, 10000);
console.log(suma);

var s = ["h", "e", "l", "l", "o"];
var reverseString = function (s) {
  for (let i = 0; i <= s.length; i++) {
    var a = [];
    let c = s.length - i;
    a[i] = s[c];
  }
  s = [];
  s = a;
  return s;
};
console.log(reverseString);
