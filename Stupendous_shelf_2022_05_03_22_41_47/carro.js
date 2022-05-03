//Codigo do carro

let xCarros = [500,500,500,500,500,500];
let yCarros = [40,96,150,210, 270,318];
let velocidadeCarros = [2,3,4,5,3.5,2.7];
let comprimento = 50;
let altura = 40;

function mostraCarro(){
  for(let i=0; i<imagemCarros.length; i++){
    image(imagemCarros[i],xCarros[i],yCarros[i],comprimento,altura);
  }
}

function movimentaCarro(){
  for(let i=0; i<imagemCarros.length; i++){
    xCarros[i] -= velocidadeCarros[i];
  }
}

function posicaoInicial(){
  for(let i=0; i<imagemCarros.length; i++){
    if(passouTela(xCarros[i])){
      xCarros[i] = 500;
    }
  }
}
function passouTela(xCarro){
  return xCarro < -50;
}