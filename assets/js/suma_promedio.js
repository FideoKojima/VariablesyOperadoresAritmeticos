function sumaYPromedio() {
    // Solicita los números al usuario
    let num1 = parseFloat(prompt("Ingrese el primer número:"));
    let num2 = parseFloat(prompt("Ingrese el segundo número:"));
    let num3 = parseFloat(prompt("Ingrese el tercer número:"));
    let num4 = parseFloat(prompt("Ingrese el cuarto número:"));
    let num5 = parseFloat(prompt("Ingrese el quinto número:"));

    // Calcula la suma de los números
    let suma = num1 + num2 + num3 + num4 + num5;

    // Calcula el promedio de los números
    let promedio = suma / 5;

  
    // Muestra la suma y el promedio en la consola
    console.log("Suma de los números: " + suma);
    console.log("Promedio de los números: " + promedio);
}
