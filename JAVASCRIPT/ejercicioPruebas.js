/*elemento con id input2*/
console.log(document.getElementById("input2"))
console.log(docuemnt.querySelector("#input2"))
/*todos los parrados en div lipsum*/
let div=document.getElementById("lipsum")
console.log(div.getElementsByTagName("p"))
let parrafos = document.querySelectorAll("#lipsum p")
console.log(parrafos)
/*todos los parrafos*/
console.log(document.getElementsByTagName("p"))
console.log(document.querySelectorAll("p"))
/*formulario*/
console.log(document.getElementsByTagName("form")[0])
console.log(document.querySelector("form"))
/*input con nombre sexo*/
console.log(document.getElementsByName("sexo"))
console.log(docuemnt.querySelectorAll("input [name='sexo']"))
/*items de la lista de la clase important(solo los li)*/
console.log(document.getElementsByClassName("important"))
console.log(document.querySelectorAll("li.important"))


