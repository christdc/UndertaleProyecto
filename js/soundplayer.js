var audio = document.getElementById("audio");
var sonido = document.getElementById("sonido");
var header = document.getElementById("header")
var corazones = document.getElementsByClassName("soul")
var nav = document.getElementsByClassName("nav")

setTimeout(async function(){
    header.style.display="block"
    sonido.muted = false
    sonido.play()
    sonido.muted = false
}, 1000)

setTimeout(function(){
    for (let i = 0; i < nav.length; i++) {
        nav.item(i).style.display="block"
     }
     sonido.muted = false
     sonido.play()
     sonido.muted = false
    
}, 4300)

setTimeout(function(){
    for (let i = 0; i < corazones.length; i++) {
        corazones.item(i).style.display="block"
    }
    audio.muted = false
    audio.play()
    audio.muted = false
}, 7000)