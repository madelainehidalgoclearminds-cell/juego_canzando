let canvas=document.getElementById("areaJuego")
let cxt=canvas.getContext("2d")
let gatoX =0

let comidaX=0
let comidaY= 0
const ALTO_GATO=60
const ANCHO_GATO=30
const ALTO_COMIDA=23
const ANCHO_COMIDA=23
let gatoY= canvas.height-ALTO_GATO
function dibujarIniciar(){
    graficaComida()
    graficaGato()
}
function graficaGato(){
    graficarRectangulo(gatoX,gatoY,ANCHO_GATO,ALTO_GATO,"orange")
    
}
function graficaComida(){
    graficarRectangulo(0,0,ANCHO_COMIDA,ALTO_COMIDA,"brown")
}
function graficarRectangulo(x,y,ancho,alto,color){
    cxt.fillStyle=color
    cxt.fillRect(x,y,ancho,alto)    
}
function limpiarCanvas(){
    cxt.clearRect(0,0,canvas.width,canvas.height)
}
function moverIzquierda(){
    gatoX=gatoX-10
    limpiarCanvas()
    graficaGato()
    graficaComida()
}