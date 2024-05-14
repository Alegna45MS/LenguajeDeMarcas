let globalNumIntentos = 0;
let globalCadIntentos = 'INTENTOS REALIZADOS:';
let numeroAdivinar = 0;

this.onload = function() {
    Iniciar();
    numeroAdivinar = Math.floor(Math.random() *100);
    document.getElementById('idBorrar').value = numeroAdivinar.toString();
}

function Iniciar() {
    document.getElementById('idCajaBotonInicio').style.display = 'none';
    document.getElementById('idCaja1').style.display = 'grid';
    document.getElementById('idCaja2').style.display = 'grid';
    document.getElementById('idCaja3').style.display = 'grid';
}


function Jugar() {
    let numero = parseInt(document.getElementById('idNum1').value);
    let strMensaje = '';

    if (globalNumIntentos < 10) {
        if (numero < numeroAdivinar){
            strMensaje = numero.toString() + ' ES MENOR';
            document.getElementById('idCajaNum2').style.backgroundColor = "#F15D59";
        }
        else if (numero > numeroAdivinar){
            strMensaje = numero.toString() + ' ES MAYOR';
            document.getElementById('idCajaNum2').style.backgroundColor = "#F15D59";
        }
        else {
            strMensaje = 'HAS ACERTADO';
            document.getElementById('idCajaNum2').style.backgroundColor = "#5ADC37";
        }
        document.getElementById('idNum2').innerHTML = strMensaje;
        
        globalCadIntentos = globalCadIntentos + ' ' + numero.toString();
        document.getElementById('idIntentos').innerHTML = globalCadIntentos;

        globalNumIntentos = globalNumIntentos + 1;
        PintarIntento();
    }
    
    if (globalNumIntentos==10 && numero!=numeroAdivinar){
        strMensaje = 'HAS PERDIDO';
        document.getElementById('idNum2').innerHTML = strMensaje;
        document.getElementById('idCajaNum2').style.backgroundColor = "#E8F061";
    }
}

function PintarIntento(){
    switch(globalNumIntentos){
        case 1:
            document.getElementById('idInt11').style.backgroundColor = "#B574F1";
            break;
        case 2:
            document.getElementById('idInt12').style.backgroundColor = "#B574F1";
            break;
        case 3:
            document.getElementById('idInt13').style.backgroundColor = "#B574F1";
            break;
        case 4:
            document.getElementById('idInt14').style.backgroundColor = "#B574F1";
            break;
        case 5:
            document.getElementById('idInt15').style.backgroundColor = "#B574F1";
            break;
        case 6:
            document.getElementById('idInt16').style.backgroundColor = "#B574F1";
            break;
        case 7:
            document.getElementById('idInt17').style.backgroundColor = "#B574F1";
            break;
        case 8:
            document.getElementById('idInt18').style.backgroundColor = "#B574F1";
            break;
        case 9:
            document.getElementById('idInt19').style.backgroundColor = "#B574F1";
            break;
        default:
            document.getElementById('idInt20').style.backgroundColor = "#B574F1";
            break;
        
    }
}
