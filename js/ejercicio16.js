const inputNum1 = document.getElementById("numero1");
const inputNum2 = document.getElementById("numero2");
const inputResultado = document.getElementById("resultado");

const sumar = (a, b) => a + b;
const restar = (a, b) => a - b;
const multiplicar = (a, b) => a * b;
const dividir = (a, b) => b !== 0 ? a / b : 'Error: División por cero';

const calcularOperacion = (operacion) => {
    inputResultado.value = "";

    const val1 = inputNum1.value.trim();
    const val2 = inputNum2.value.trim();

    if (val1 === "" || val2 === "" || isNaN(val1) || isNaN(val2)) {
        Swal.fire({
            icon: 'error',
            title: 'Error de validacion',
            text: 'Por favor, ingrese números válidos en ambos campos',
            confirmButtonColor: '#3085d6'
        });
        return;
    }

    const num1 = parseFloat(val1);
    const num2 = parseFloat(val2);
    let resultado;

    switch (operacion) {
        case "suma":
            resultado = sumar(num1, num2);
            break;
        case "resta":
            resultado = restar(num1, num2);
            break;
        case "multiplicacion":
            resultado = multiplicar(num1, num2);
            break;
        case "division":
            resultado = dividir(num1, num2);
            if (typeof resultado === 'string') {
                Swal.fire({
                    icon: 'error',
                    title: 'Operación inválida',
                    text: resultado,
                    confirmButtonColor: '#3085d6'
                });
                return;
            }
            break;
        default:
            return;
    }

    inputResultado.value = resultado;
};