console.log('Trabalhando com condicionais');
const idadeComprador = 15;
const estaAcompanhada = false;
let temPassagemComprada = false;
const destino = 'Recife';

const listasDeDestinos = new Array(
    'Salvador',
    'São Paulo',
    'Rio de Janeiro'
);

console.log('\nDestinos possiveis:');
console.log(listasDeDestinos);

const podeComprar = idadeComprador >= 18 || estaAcompanhada == true

let contador = 0;
let destinoExiste = false;
while(contador<3){
    if (listasDeDestinos[contador] == destino){
        destinoExiste = true;
        break;
    }
    contador++;
}
console.log('Destino existe ', destinoExiste)

if(podeComprar && destinoExiste){
    console.log('Boa viagem!');
}else{
    console.log('Deu algum erro!');
}

for(contador=0; contador<listasDeDestinos.length; contador++){
    if (listasDeDestinos[contador] == destino){
        destinoExiste = true;
        break;
    }
}