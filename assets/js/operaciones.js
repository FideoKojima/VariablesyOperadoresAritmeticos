function operacionesMatematicas() {
    // Pedir al usuario que ingrese dos números mayores a cero
    let num1 = parseFloat(prompt("Ingrese el primer número mayor a cero:"));
    let num2 = parseFloat(prompt("Ingrese el segundo número mayor a cero:"));

    // Verificar que ambos números son mayores a cero
    if (num1 > 0 && num2 > 0) {
        // Realizar operaciones matemáticas
        let suma = num1 + num2;
        let resta = num1 - num2;
        let division = num1 / num2;
        let multiplicacion = num1 * num2;
        let modulo = num1 % num2;

        // Mostrar resultados en la consola
        console.log("Suma: " + suma);
        console.log("Resta: " + resta);
        console.log("División: " + division);
        console.log("Multiplicación: " + multiplicacion);
        console.log("Módulo: " + modulo);
    } else {
        console.log("Ambos números deben ser mayores a cero.");
    }
}
