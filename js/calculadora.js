function oscuro() {
    document.body.classList.toggle("modo-noche");
}


        // Función para insertar el número en el campo de entrada
        function insertarNumero(numero) {
            const entrada = document.getElementById('entrada');
            entrada.value += numero;
        }

        // Función para realizar la operación de suma
        function realizarOperacion(operador) {
            const entrada = document.getElementById('entrada');
            entrada.value += operador;
        }

        // Función para calcular el resultado
        function calcularResultado() {
            const entrada = document.getElementById('entrada');
            try {
                // Evalúa la expresión matemática y muestra el resultado
                entrada.value = eval(entrada.value);
            } catch (error) {
                // Manejo de errores (por ejemplo, si la expresión no es válida)
                entrada.value = 'Error';
            }
        }

        // Función para borrar todo
        function borrarTodo() {
            const entrada = document.getElementById('entrada');
            entrada.value = '';
        }

        // Función para borrar un dígito
        function borrarUnDigito() {
            const entrada = document.getElementById('entrada');
            entrada.value = entrada.value.slice(0, -1);
        }

        // Función para insertar el punto decimal
        function insertarPunto() {
            const entrada = document.getElementById('entrada');
            if (!entrada.value.includes('.')) {
                entrada.value += '.';
            }
        }

// Función para calcular el porcentaje
function calcularPorcentaje() {
    const entrada = document.getElementById('entrada');
    try {
        const expresion = entrada.value.replace('%', '/100*');
        entrada.value = eval(expresion)/100;
    } catch (error) {
        entrada.value = 'Error';
    }
}
