

function mostrarSolicitud(){
    if(document.getElementById("asunto").value=="estado"){
        document.getElementById("solicitudInput").style.display="block";
        document.getElementById("solicitudLabel").style.display="block";
    }else{
        document.getElementById("solicitudInput").style.display="none";
        document.getElementById("solicitudLabel").style.display="none";
    }
}
function validar()
{

}