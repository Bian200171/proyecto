function pedirNombre() {
 let nombre = prompt("¿Cómo te llamas?");
 alert("Hola " + nombre + ", ¡bienvenido a la clase de JavaScript!");}
 let boton = document.getElementById("btntexto");
let parrafo = document.getElementById("texto");

boton.addEventListener("click", function() {
    parrafo.innerHTML = "Texto modificado";});
    let contador = 0;
    let botton = document.getElementById("btnsubir");
    let numero = document.getElementById("conteo");
    
    boton.addEventListener("click", function(){
        contador++;
        numero.textContent = contador;});
        const buton = document.getElementById('btnCambiarFondo');
boton.addEventListener('click', function() {
    document.body.style.backgroundColor = 'lightblue';});