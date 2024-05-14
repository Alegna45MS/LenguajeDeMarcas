let opcion = 1;

function IrArriba() {
    if (opcion > 1){
        opcion = opcion - 1;
        PintarOpcion();
    }
}

function IrAbajo() {
    if (opcion < 4) {
        opcion = opcion + 1;
        PintarOpcion();
    }
}

function PintarOpcion (){
    /* Quito el formato a todas las opciones */
    document.getElementById('idOpcion1').style.borderColor = "white";
    document.getElementById('idOpcion1').style.backgroundColor ="white";
    
    document.getElementById('idOpcion2').style.borderColor = "white";
    document.getElementById('idOpcion2').style.backgroundColor ="white";

    document.getElementById('idOpcion3').style.borderColor = "white";
    document.getElementById('idOpcion3').style.backgroundColor ="white";
    
    document.getElementById('idOpcion4').style.borderColor = "white";
    document.getElementById('idOpcion4').style.backgroundColor ="white";

    switch(opcion) {
        case 1:
            document.getElementById('idOpcion1').style.borderColor = "black";
            document.getElementById('idOpcion1').style.backgroundColor ="#F43B2F";
            break;
        case 2:
            document.getElementById('idOpcion2').style.borderColor = "black";
            document.getElementById('idOpcion2').style.backgroundColor ="#F43B2F";
            break;
        case 3:
            document.getElementById('idOpcion3').style.borderColor = "black";
            document.getElementById('idOpcion3').style.backgroundColor ="#F43B2F";
            break;
        default:
            document.getElementById('idOpcion4').style.borderColor = "black";
            document.getElementById('idOpcion4').style.backgroundColor ="#F43B2F";
            break;
    }
}

function Calcular() {
    let num = parseInt(document.getElementById('idNumero').value);
    let strResultado = '';
    if (num>0){
        switch(opcion){
            case 1:
                strResultado = EsPar(num);
                break;
            case 2:
                strResultado = EsImpar(num);
                break;
            case 3:
                strResultado = EsPrimo(num);
                break;
            default:
                strResultado = Divisores(num);
                break;
        }
    }
    else{
        strResultado = 'Numero debe ser > 0';
    }
    document.getElementById('idResult').value = strResultado;
}


function EsPar(num){
    let strResult = '';
    if ((num % 2) == 0){
        strResult = 'Número ' + num.toString() + ' es PAR';
    }
    else {
        strResult = 'Número ' + num.toString() + ' no es PAR';
    }
    
    return strResult;
}

function EsImpar(num){
    let strResult = '';
    if ((num % 2) == 0){
        strResult = 'Número ' + num.toString() + ' no es IMPAR';
    }
    else {
        strResult = 'Número ' + num.toString() + ' es IMPAR';
    }
    
    return strResult;
}

function EsPrimo(num){
    let divisor = 2;
    let contadorDivisores = 0;
    let strResult = '';

    while (divisor < num) {
        if ((num % divisor) == 0) {
            contadorDivisores = contadorDivisores + 1;
        }
        divisor = divisor + 1;
    }

    if (contadorDivisores == 0) {
        strResult = 'Número ' + num.toString() + ' es PRIMO';
    }
    else {
        strResult = 'Número ' + num.toString() + ' no es PRIMO';
    }

    return strResult; 
}

function Divisores(num) {
    let divisor = 1;
    let strDivisores = 'DIV:';

    while (divisor <= num) {
        if ((num % divisor) == 0) {
            strDivisores = strDivisores + ' ' + divisor.toString();
        }
        divisor = divisor + 1;
    }

    return strDivisores; 

}
