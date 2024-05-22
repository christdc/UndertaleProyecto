var fight = document.getElementById("botonf");
var clicked = 0;
fight.addEventListener("click", function () {
  switch (clicked % 4) {
    case 0:
      fight.style.transform = "translate(20vw, 0%)";
      break;
    case 1:
      fight.style.transform = "translate(0vw, 0%)";

      break;
    case 2:
      fight.style.transform = "translate(-20vw, 0%)";
      break;

    case 3:
      fight.style.transform = "translate(0vw, 0%)";
      break;
  }

  clicked++;
});


var audio = document.getElementById("audio");
var mercy = document.getElementById("botonm");
function play(){
    audio.play()
}
