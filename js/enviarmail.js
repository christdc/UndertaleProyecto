function enviar(){
    var nombre = document.getElementById("nombre").value;
    var apellidos = document.getElementById("apellidos").value;
    var comentarios = document.getElementById("comentarios").value;
    var fecha = document.getElementById("fecha").value;


    document.location.href=
    "mailto:cristinadiazcabello@gmail.com?subject=Undertale&body=Hola%20soy%20"+nombre+"%20"+encodeURIComponent(apellidos)+",%20"+comentarios
}
