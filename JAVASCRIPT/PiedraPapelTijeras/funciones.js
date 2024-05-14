let puntos_usu = 0;
let puntos_ord = 0;
let puntos_usu_span;
let puntos_ord_span;
let resultado;
let img_Ord;
let div_ImgOrd;

this.onload = function () {
    iniciar();
}
function iniciar() {
    //Asignamos a las variables globales declaradas los elementos HTML
    puntos_usu_span = document.getElementById("puntos_Usu");
     puntos_ord_span = document.getElementById("puntos_Ord");
     resultado = document.getElementById("p_resultado");
     img_Ord = document.getElementById("img_ordenador");
     div_ImgOrd=document.getElementById("jugada_ordenador");
}
function jugar(jugada_usu) {

    //El usuario lanza su jugada y generamos la jugada del ordenador
    let jugada_ord= obtenerJug_Ordenador();

    switch (jugada_usu + jugada_ord) {
        case "rt":
        case "pr":
        case "tp":
            jugador_Gana(jugada_usu, jugada_ord);

            break;
        case "rp":
        case "pt":
        case "tr":
            jugador_Pierde(jugada_usu, jugada_ord);
            break;
        case "pp":
        case "rr":
        case "tt":
            empate();
            break;
    }
}
function obtenerJug_Ordenador() {
   //generamos la jugada del ordenador
   //pista: utiliza arrays y Math.Random
   let opciones = [ 'r', 'p' , 't'];
   let imagenes = ["piedra.png" , "papel.png" , "tijeras.png"];

   let jugada_ord = Math.floor(Math.random() * 3);
   div_ImgOrd.style.display = "inline-block";
   img_Ord.setAttribute("src", imagenes[jugada_ord]);

   return opciones[jugada_ord];
}
function jugador_Gana(jugada_usu, jugada_ord) {
   //Si el jugador gana mostramos el texto correspondiente dependiendo de los argumentos que nos llegan,
   // por ejemplo "Piedra gana tijeras"
   resultado.innerHTML = mostrarNombre(jugada_usu) + "gana a " + mostrarNombre(jugada_ord);
   puntos_usu++;
   puntos_usu_span.innerHTML = puntos_usu;
}
function jugador_Pierde(jugada_usu, jugada_ord) {
    //Si el jugador pierde mostramos el texto correspondiente dependiendo de los argumentos que nos llegan,
   // por ejemplo "Piedra pierde con papel"
   resultado.innerHTML = mostrarNombre(jugada_usu) + "pierde a " + mostrarNombre(jugada_ord); 
   puntos_ord++;
   puntos_ord_span.innerHTML = puntos_ord;
}
function empate() {
    //mostramos el texto empate
    resultado.innerHTML = "empate";
}
function mostrarNombre(id) {
   //convertimos la r en piedra, la p en papel y la t en tijeras
   switch (id) {
    case 'r':
        return "Piedra ";
    case 'p':
        return "Papel ";
    case 't':
        return "Tijeras ";
   }
}
