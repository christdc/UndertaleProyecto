var audio = document.getElementById("audio");
var save = document.getElementById("savePoint")

function play(){
    audio.play()
}


var chara = document.getElementById("cambio")
var sec = document.getElementById("sec")
var pulsar = document.getElementById("pulsar")
var frisk = document.getElementById("frisk")
var num = 2

chara.addEventListener("click", function(){
    if(num%2==0){
        sec.textContent = "Es el primero de los ocho humanos que han caído en el Subsuelo vía el Monte Ebott. Humano que Toriel y Asgore adoptaron al momento de caer en el Subsuelo, y por ende, hermano adoptivo de Asriel Dreemurr. Chara, al final de la Ruta Genocida, él es el deseo de adquirir STATS";
        pulsar.textContent = "PULSA A CHARA!";
        frisk.textContent = "CHARA";
        chara.src = "../img/chara.png"
        
    }else{
        sec.textContent = "Frisk es un personaje jugable y protagonista principal de Undertale. Después de que Frisk cae al Subsuelo, se embarca en un viaje para regresar a la superficie. Frisk es el último humano en caer al Subsuelo después de viajar al Monte Ebott. Frisk no es el humano caído a quien el jugador nombra al comienzo del juego. Su nombre solo se revela en la Ruta Pacifista Verdadera.";
        pulsar.textContent = "PULSA A FRISK!";
        frisk.textContent = "FRISK";
        chara.src = "../img/frisk.png"
    }
    num++;
})