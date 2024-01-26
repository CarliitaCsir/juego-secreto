let numeroSecreto= 0; 
let intentos=0; 
let listaNumerosSorteados=[];
let numeroMaximo=10;
function asignarTextoElemento(elemento, texto){
    let elementoHTML = document.querySelector(elemento); 
    elementoHTML.innerHTML=texto; 
} 
function verificarIntento(){
   let numeroDeUsuario= parseInt(document.getElementById('valorUsuario').value); 
   
   if(numeroDeUsuario===numeroSecreto){
    asignarTextoElemento('p',`Acertaste el numero en ${intentos} ${(intentos===1) ?'vez': 'veces'} `); 
   document.getElementById('reiniciar').removeAttribute('disabled');
  } else {
    if (numeroDeUsuario>numeroSecreto) {
      asignarTextoElemento('p', 'El numero secreto es menor'); 
    } else{
      asignarTextoElemento('p', 'El numero secreto es mayor');
    } 
    intentos++;
    limpiarCaja();
   }
}  
function limpiarCaja() {
  document.querySelector('#valorUsuario').value=''; 
  
} 
function condicionesIniciales() {
  asignarTextoElemento('h1','Juego del numero secreto'); 
  asignarTextoElemento('p', `Indique un numero del 1 al ${numeroMaximo}`); 
  numeroSecreto= generarNumeroSecreto(); 
  intentos=1;
  
}
function generarNumeroSecreto() {
  let numeroGenerado= Math.floor(Math.random()*numeroMaximo)+1; 
  console.log(numeroGenerado); 
  console.log(listaNumerosSorteados); 
  if (listaNumerosSorteados.length=== numeroMaximo) {
   asignarTextoElemento('p','Ya se sortearon todos los numeros posibles');
  } else{
     // si el numero generado esta incluido en la lista hacemos una operacion 
  if (listaNumerosSorteados.includes(numeroGenerado)) {
    return generarNumeroSecreto();
  } else{
    listaNumerosSorteados.push(numeroGenerado);
    return numeroGenerado;
  }
  }
 
}
function reiniciarJuego() { 
  //Limpiar Caja 
  limpiarCaja(); 
  //iNDICAR MENSAJE DE INTERVALO DE NUMEROS 
  //Generar el numero aleatoria 
  //Inicializar el numero de intentos 
  condicionesIniciales(); 
  //Deshabilitar el boton de nuevo juego 
  document.querySelector('#reiniciar').setAttribute('disabled', 'true');
  
}
condicionesIniciales();
