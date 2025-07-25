    
    function performOperation() {
        // Obtener la entrada del usuario desde los campos input
        let num1 = parseInt(document.getElementById('input1').value);
        let num2 = parseInt(document.getElementById('input2').value);
            // Verificar si las entradas son numeros validos
        if (!isNaN(num1) && !isNaN(num2)) {
        // realiza la operacion
                        let result = multiply(num1, num2);
    
                        //muestra el resultado
                        displayResult(result);
                    } else {
                        displayResult('Please enter valid numbers');
                    }
                }
    
                function multiply(a, b) {
                    // Introduce la declaracion degugger para pausar la ejecucion
                    debugger;
    
                    //multiplica los numeros
                    return a * b;
                }
    
                function displayResult(result) {
                    // muestra los resultados en el elemento parrafo
                    const resultElement = document.getElementById('result');
                    resultElement.textContent = `The result is: ${result}`;
                }
            