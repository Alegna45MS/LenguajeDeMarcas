
function validar() {

    var todo_correcto = true;

    if (document.getElementById('nombre').value.length < 2) {
        todo_correcto = false;
    }

    if (document.getElementById('direccion').value.length < 10) {
        todo_correcto = false;
    }
    let edad = document.getElementById('edad').value;
    if (isNaN(edad) || edad < 18) {
        todo_correcto = false;
    }

    if (document.getElementById('estudios').value == '') {
        todo_correcto = false;
    }

    if (!document.getElementById('acepto').checked) {
        todo_correcto = false;
    }

    if (!todo_correcto) {
       document.getElementById("error").style.display="inline";
    }

    return todo_correcto;
}
