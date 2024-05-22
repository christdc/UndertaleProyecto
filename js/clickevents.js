var fight = document.getElementById("botonf");
var mercy = document.getElementById("botonm");

fight.addEventListener("click", function() {

    fight.style.transform = 'translate(20vw, 0%)'

    if(fight.style.transform = 'translate(20vw, 0%)'){
        fight.style.transform = 'translate(0vw, 0%)'

    }else if (fight.style.transform = 'translate(0vw, 0%)') {
        fight.style.transform = 'translate(-20vw, 0%)'
    }

    /*if(fight.style.transform = 'translate(-2vw,0)'){
        fight.style.transform = 'translate(0vw,0)'

    }else if(fight.style.transform = 'translate(0vw,0)'){
        fight.style.transform = 'translate(2vw,0)'

    }else{
        fight.style.transform = 'translate(-2vw,0)'
    }*/
    
})