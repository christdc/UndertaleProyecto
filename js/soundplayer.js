var audio = document.getElementById("audio");
var sonido = document.getElementById("sonido");
var header = document.getElementById("header")
var corazones = document.getElementsByClassName("soul")
var nav = document.getElementsByClassName("nav")

setTimeout(function(){
    header.style.display="block"
    sonido.play()
}, 1000)

setTimeout(function(){
    for (let i = 0; i < nav.length; i++) {
        nav.item(i).style.display="block"
     }
     sonido.play()
    
}, 4300)

setTimeout(function(){
    for (let i = 0; i < corazones.length; i++) {
        corazones.item(i).style.display="block"
    }
    audio.play()
}, 7000)