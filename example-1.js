import {createAll, cleanConsole} from './data';
const companies = createAll();

const collection = require('lodash/collection');

cleanConsole(1, companies);
console.log('---- EXAMPLE 1 --- ', changeCase(companies));

export function changeCase(list) {
  const l = list.map((e) => {
    e.users.map((user) => {
      if (user.firstName === undefined) {
        user.firstName = '';
      }
      user.firstName = capitalize(user.firstName);
      user.lastName = capitalize(user.lastName);
    });
    e.name = capitalize(e.name);
    e.users = collection.sortBy(e.users, ['firstName']);
    return e;
  });
  return l.sort((a, b) => (a.users.length < b.users.length) ? 1 : -1);
}

function capitalize(s) {
  if (typeof s !== 'string') return '';
  return s.charAt(0).toUpperCase() + s.slice(1);
};
// -----------------------------------------------------------------------------
// INSTRUCCIONES EN ESPAÑOL

// Crear una función tomando la variable "companies" como parámetro y reemplazando
// todos los valores "undefined" en "usuarios" por un string vacío.
// El nombre de cada "company" debe tener una letra mayúscula al principio, así como
// el apellido y el nombre de cada "user".
// Las "companies" deben ordenarse por su total de "user" (orden decreciente)
// y los "users" de cada "company" deben aparecer en orden alfabético.

// -----------------------------------------------------------------------------
// INSTRUCTIONS IN ENGLISH

// Create a function taking the variable "companies" as a parameter and replacing
// all values "undefined" in "users" by an empty string.
// The name of each "company" must have a capital letter at the beginning as well as
// the last name and first name of each "user".
// The "companies" must be sorted by their number of "user" (decreasing order)
// and the "users" of each "company" must be listed in alphabetical order.

// -----------------------------------------------------------------------------
// INSTRUCTIONS EN FRANÇAIS

// Créer une fonction prenant en paramètre la variable "companies" et remplaçant
// toutes les valeurs "undefined" dans les "users" par un string vide.
// Le nom de chaque "company" doit avoir une majuscule au début ainsi que
// le nom et le prénom de chaque "user".
// Les "companies" doivent être triées par leur nombre de "user" (ordre décroissant)
// et les "users" de chaque "company" doivent être classés par ordre alphabétique.
