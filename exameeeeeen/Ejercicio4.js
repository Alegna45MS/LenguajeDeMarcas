function validar() {
    let error = document.getElementById("error")

    let select_dia = document.getElementById("dia")
    let dia = select_dia.value

    let select_mes = document.getElementById("mes")
    let mes = select_mes.value

    let select_anyo = document.getElementById("anyo")
    let anyo = select_anyo.value

    todo_correcto = true

    if (dia < 1 || mes < 1 || anyo < 1) {
        todo_correcto = false
        error.innerHTML = "Faltan datos de la fecha,debes seleccionar dia,mes y año"
        error.style.display = "block"
        return todo_correcto

    } else {
        let maxdias = 30
        switch (parseInt(mes)) {
            case 1:
            case 2:
                if (esBisiesto(parseInt(anyo))) {
                    maxdias = 29
                } else {
                    maxdias = 28
                }
                break;
            case 3:
            case 5:
            case 7:
            case 8:
            case 10:
            case 12:
                maxdias = 31
                break;
            default:
                maxdias = 30;
        }

    }
    if(dia>maxdias){
        todo_correcto=false
        error.innerHTML="Este mes solo tiene"+maxdias+"dias"
    }
    if(!todo_correcto){
        error.style.display="block"
    }
    return todo_correcto
}
function esBisiesto(anyo) {
    //si es divisible por 4 y no por 100
    //si es divisible por 400
    if (anyo % 4 == 0 && anyo % 100 != 0) {
        return true
    }
    if (anyo % 400 == 0) {
        return true
    }
    return false
}

        /*if(dia==29 && mes=="Febrero" && (anyo%400!=0 || anyo%100!=0)){
            error.innerHTML="El mes elegido solo tiene 28 dias"
            error.style.display="inline"
            todo_correcto=false
        }
        if(dia==31 && (mes=="Abril" || mes=="Junio" || mes=="Septiembre" || mes=="Noviembre")){
            error.innerHTML="El mes elegido solo tiene 30 dias"
            error.style.display="inline"
            todo_correcto=false
        }*/