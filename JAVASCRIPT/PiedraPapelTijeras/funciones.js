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
    puntos_usu=document.getElementById('puntos_Usu').value
    puntos_ord=document.getElementById('puntos_Ord').value
    puntos_ord_span=document.getElementById().value
    img_Ord=document.getElementById("img_ordenador")
    div_ImgOrd=document.getElementById("jugadas_ordenador")

    
}
function jugar(jugada_usu) {
    //alert("Ha usado "+jugada_usu);
    let jugOrd=obtenerJug_Ordenador();
    //El usuario lanza su jugada y generamos la jugada del ordenador
    switch(jugada_usu+jugOrd){
        case"rt":
        case"pr":
        case"tp":
            alert("gana")
        break;
        case"rp":
        case"pt":
        case"tr":
            alert("pierde")
        break;
        case"pp":
        case"tt":
        case"rr":
            alert("empate")
        break;
    }
   
}
function obtenerJug_Ordenador() {
   //generamos la jugada del ordenador
   //pista: utiliza arrays y Math.Random
   let opciones=('r','p','t');
   let img=['piedra.png','papel.png','tijeras.png']

   let jugada_Ord=Math.floor(Math.random()*3)

   div_ImgOrd.style.display="inline-block"
   img_Ord.setAttribute("src",img[jugada_Ord])
   return opciones[jugada_Ord]
}
function jugador_Gana(jugada_usu, jugada_ord) {
   //Si el jugador gana mostramos el texto correspondiente dependiendo de los argumentos que nos llegan,
   // por ejemplo "Piedra gana tijeras"
}
function jugador_Pierde(jugada_usu, jugada_ord) {
    //Si el jugador pierde mostramos el texto correspondiente dependiendo de los argumentos que nos llegan,
   // por ejemplo "Piedra pierde con papel"
   
}
function empate() {
    //mostramos el texto empate
}
function mostrarNombre(id) {
   //convertimos la r en piedra, la p en papel y la t en tijeras
}