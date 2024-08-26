function conversionDias() { 
// Pedir al usuario que ingrese una cantidad de días
let dias = parseInt(prompt("Ingrese la cantidad de días:"));

// Calcular años, semanas y días
let años = Math.floor(dias / 365);
let semanas = Math.floor((dias % 365) / 7);
let diasRestantes = dias % 7;

// Mostrar resultados en la consola
console.log(años + " año(s), " + semanas + " semana(s), y " + diasRestantes + " día(s)."); 
}
