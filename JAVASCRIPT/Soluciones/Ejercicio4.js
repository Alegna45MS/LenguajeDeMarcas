function Sumar() {

    //Podemos utilizar cualquiera de las dos maneras de convertir el texto en número
   /* let Num1 = parseInt(document.getElementById('idNum1').value);
    let Num2 = parseInt(document.getElementById('idNum2').value);*/

   let Num1=+(document.getElementById('idNum1').value);
   let Num2=+(document.getElementById('idNum2').value);
    let NumResult = Num1 + Num2;

    document.getElementById('idNumResultado').value = NumResult.toString();
}

function Restar() {
    let Num1 = parseInt(document.getElementById('idNum1').value);
    let Num2 = parseInt(document.getElementById('idNum2').value);
    let NumResult = Num1 - Num2;

    document.getElementById('idNumResultado').value = NumResult.toString();
}

function Producto() {
    let Num1 = parseInt(document.getElementById('idNum1').value);
    let Num2 = parseInt(document.getElementById('idNum2').value);
    let NumResult = Num1 * Num2;

    document.getElementById('idNumResultado').value = NumResult.toString();
}

function Dividir() {
    let Num1 = parseInt(document.getElementById('idNum1').value);
    let Num2 = parseInt(document.getElementById('idNum2').value);
    let NumResult = Num1 / Num2;

    document.getElementById('idNumResultado').value = NumResult.toString();
}

function Limpiar() {
    document.getElementById('idNum1').value = '';
    document.getElementById('idNum2').value = '';
    document.getElementById('idNumResultado').value = '';
}
