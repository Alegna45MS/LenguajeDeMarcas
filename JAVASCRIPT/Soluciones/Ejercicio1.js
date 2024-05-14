function CambiarTexto() {
    let strNuevoTexto = document.getElementById('idTexto').value;
    document.getElementById('idSpanTexto').innerHTML = strNuevoTexto;
}

function CambiarColorFondo() {
    let strColorFondo = document.getElementById('idColorFondo').value;
    document.getElementById('idDivTexto').style.backgroundColor = strColorFondo;
}

function CambiarColorBorde() {
    let strColorBorde = document.getElementById('idColorBorde').value;
    document.getElementById('idDivTexto').style.borderColor = strColorBorde;
}

function CambiarColorTexto() {
    let strColorTexto = document.getElementById('idColorTexto').value;
    document.getElementById('idDivTexto').style.color = strColorTexto;
}
