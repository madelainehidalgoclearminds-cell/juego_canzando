let canvas=document.getElementById("areaJuego")
let cxt=canvas.getContext("2d")

const ALTO_GATO=60
const ANCHO_GATO=30
const ALTO_COMIDA=23
const ANCHO_COMIDA=23
let gatoX =0
let comidaX=0
let comidaY= 0
let gatoY= canvas.height-ALTO_GATO
let puntaje=0
let tiempo=10
function dibujarIniciar(){
    setInterval(restarTiempo,1000)
    graficaComida()
    graficaGato()
}
function graficaGato(){
    graficarRectangulo(gatoX,gatoY,ANCHO_GATO,ALTO_GATO,"orange")
    
}
function graficaComida(){
    graficarRectangulo(comidaX,comidaY,ANCHO_COMIDA,ALTO_COMIDA,"brown")
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
    actualizarPantalla()
    detectarColision()
}function moverDerecha(){
    gatoX=gatoX+10
    actualizarPantalla()
    detectarColision()
}function moverArriba(){
    gatoY=gatoY-10
    actualizarPantalla()
    detectarColision()
}function moverAbajo(){
    gatoY=gatoY+10
    actualizarPantalla()
    detectarColision()
}
 function detectarColision(){
    if(comidaX+ANCHO_COMIDA> gatoX && comidaX < gatoX+ANCHO_GATO && comidaY+ALTO_COMIDA > gatoY && comidaY < gatoY+ALTO_GATO){
        actualizarPantalla()
        comidaX=generarAleatorio(0,canvas.width-ANCHO_COMIDA)
        comidaY=0
        puntaje=puntaje+1
        mostrarenSpam("puntos",puntaje)
        
    }
 }
 function restarTiempo(){
    tiempo=tiempo-1
    mostrarenSpam("tiempo",tiempo)
 }