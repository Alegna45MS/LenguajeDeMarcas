function CapturarValores() {
    let strNuevaLinea = '\n';
    let strCadena = '';
    
    let strTexto = document.getElementById('idTexto').value;
    let strNumero =document.getElementById('idNumero').value;
    let strPassword =document.getElementById('idPassword').value;
    let strFecha =document.getElementById('idFecha').value;
    let strHora = document.getElementById('idHora').value;
    let strRadio =document.getElementById('idRadio').checked;
    let strCheckbox =document.getElementById('idCheckbox').checked;
    let strSelect = document.getElementById('idSelect').value;

     
    //Concatenamos de la manera actual

    strCadena =`Texto: ${strTexto}${strNuevaLinea}`;
    strCadena=`${strCadena}Número: ${strNumero} ${strNuevaLinea}`;
    strCadena=`${strCadena}Constraseña: ${strPassword} ${strNuevaLinea}`;
    strCadena=`${strCadena}Fecha:${strFecha}${strNuevaLinea}`;
    strCadena=`${strCadena}Hora:${strHora}${strNuevaLinea}`;
    strCadena=`${strCadena}Radio:${strRadio}${strNuevaLinea}`;
    strCadena=`${strCadena}Check:${strCheckbox}${strNuevaLinea}`;
    strCadena=`${strCadena}Select:${strSelect}`;

      //Concatenamos de la manera tradicional

       /*strCadena = strCadena + strTexto + strNuevaLinea;
    strCadena = strCadena + strNumero + strNuevaLinea;
    strCadena = strCadena + strPassword + strNuevaLinea;
    strCadena = strCadena + strFecha + strNuevaLinea;
    strCadena = strCadena + strHora + strNuevaLinea;
    strCadena = strCadena + strRadio + strNuevaLinea;
    strCadena = strCadena + strCheckbox + strNuevaLinea;
    strCadena = strCadena + strSelect;
    */
    
 

    alert(strCadena);
}
