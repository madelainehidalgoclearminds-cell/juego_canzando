let canvas=document.getElementById("areaJuego")
let cxt=canvas.getContext("2d")
function dibujarPersonaje(){
    cxt.fillStyle="red"
    cxt.fillRect(canvas.width/2,canvas.height-60,30,60)
}