function conversionTemperatura() {
  // Pedir al usuario que ingrese la temperatura en grados Celsius
  let celsius = parseFloat(prompt("Ingrese la temperatura en grados Celsius:"));

  // Convertir Celsius a Kelvin y Fahrenheit
  let kelvin = celsius + 273.15;
  let fahrenheit = (celsius * 9/5) + 32;

  // Mostrar resultados en la consola
  console.log("Temperatura en Kelvin: " + kelvin);
  console.log("Temperatura en Fahrenheit: " + fahrenheit);
}