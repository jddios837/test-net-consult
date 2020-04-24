import {cleanConsole, createAll} from './data';
// import {changeCase} from './example-1';
const companies = createAll();

cleanConsole(3, companies);
// const companiesPrepare = changeCase(companies);

console.log('---- EXAMPLE 3 --- ', checkIsUpperFirst(companies));

function checkIsUpperFirst(list) {
  let band = true;
  list.forEach((e) => {
    e.users.forEach((user) => {
      band = checkString(user.firstName);
      band = checkString(user.lastName);
    });
    band = checkString(e.name);
  });

  return band;
}

function checkString(text) {
  if (text == undefined || text.length == 0) return false;
  if (text[0] !== text[0].toUpperCase()) {
    return false;
  } else {
    return true;
  }
}
// -----------------------------------------------------------------------------
// INSTRUCCIONES EN ESPAÑOL

// Cree una función tomando la variable "companies" como parámetro y devolviendo
// un booleano que valida que todos los nombres de las empresas y los atributos
// "firstName" y "lastName" de "users" están en mayúsculas.
// Debes probar la operación de esta función importando la función creada
// en el "example-1.js".

// -----------------------------------------------------------------------------
// INSTRUCTIONS IN ENGLISH

// Create a function taking the "companies" variable as a parameter and returning
// a boolean validating that all the names of the companies and the attributes "firstName"
// and "lastName" of "users" are capitalized. You must test the operation
// of this function by importing the function created for "example-1.js".

// -----------------------------------------------------------------------------
// INSTRUCTIONS EN FRANÇAIS

// Créer une fonction prenant en paramètre la variable "companies" et renvoyant
// un booléen validant que tous les noms des "company" et les attributs "firstName"
// et "lastName" des "users" sont en majuscules. Vous devez tester le fonctionnement
// de cette fonction en important la fonction créée pour "example-1.js".
