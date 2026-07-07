let canvas=document.getElementById("areaJuego")
let cxt=canvas.getContext("2d")
let gatoX =0
let gatoY= 0
let comidaX=0
let comidaY= 0
const ALTO_GATO=60
const ANCHO_GATO=30
const ALTO_COMIDA=23
const ANCHO_COMIDA=23

function dibujarIniciar(){
    graficaComida()
    graficaGato()
}
function graficaGato(){
    cxt.fillStyle="red"
    cxt.fillRect(canvas.width/2,canvas.height-ALTO_GATO,ANCHO_GATO,ALTO_GATO)
}
function graficaComida(){
    cxt.fillStyle="brown"
    cxt.fillRect(0,0,ALTO_COMIDA,ANCHO_COMIDA)
}