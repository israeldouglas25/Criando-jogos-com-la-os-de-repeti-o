//Codigo do ator

let xAtor = 85;
let yAtor = 366;
let colisao = false;
let meusPontos = 0;

function mostraAtor(){
  image(imagemAtor,xAtor,yAtor,30,30);
}

function movimentaAtor(){
  if (keyIsDown(UP_ARROW)){
    yAtor -= 3;
  }
  if (keyIsDown(DOWN_ARROW)){
    if(podeSeMover()){
      yAtor += 3;
    }
    
  }
}

function verificaColisao(){
  //collideRectCircle(x1, y1, width1, height1, cx, cy, diameter)
  for(let i=0; i<imagemCarros.length; i++){
    colisao = collideRectCircle(xCarros[i], yCarros[i], comprimento, altura, xAtor, yAtor, 15)
    if(colisao){
      somDaColisao.play()
      voltarAtorPosicaoInicial();
      if(pontosMaiorQueZero()){
        meusPontos -= 1;
      }
            
    }
  }
}

function voltarAtorPosicaoInicial(){
  yAtor = 366;
}

function incluirPontos(){
  textAlign(CENTER);
  textSize(25);
  fill(0,0,255);
  text(meusPontos, width / 5, 28);
}

function marcaPonto(){
  if(yAtor < 15){
    meusPontos += 1;
    somDoPonto.play();
    voltarAtorPosicaoInicial();
  }
}

function pontosMaiorQueZero(){
  return meusPontos > 0
}

function podeSeMover(){
  return yAtor < 366;
}