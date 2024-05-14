function LimpiarTexto1() {
    document.getElementById('idTexto1').value = "";
}

function CopiarATexto2() {
   let strTexto1 = document.getElementById('idTexto1').value;
    document.getElementById('idTexto2').value = strTexto1;
    //si queremos que al copiar al texto2, se limpie texto1, llamaremos a la función LimpiartTexto1
    LimpiarTexto1();
}

function LimpiarTexto2() {
    document.getElementById('idTexto2').value = "";
}

function CopiarATexto1() {
   let strTexto1 = document.getElementById('idTexto2').value;
    document.getElementById('idTexto1').value = strTexto1;
     //si queremos que al copiar al texto2, se limpie texto2, llamaremos a la función LimpiartTexto2
     LimpiarTexto2();
}
