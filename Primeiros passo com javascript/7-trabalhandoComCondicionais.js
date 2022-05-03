console.log('Trabalhando com condicionais');
const estaAcompanhada = false;
const temPassagemComprada = true

const listasDeDestinos = new Array(
    'Salvador',
    'São Paulo',
    'Rio de Janeiro'
);

idadeComprador = 15;
console.log('\nDestinos possiveis:');

if(idadeComprador >= 18 || estaAcompanhada){
    console.log('Comprador é maior de idade');    
    listasDeDestinos.splice(1,1);
}else{
    console.log('Não é maior de idade');
}

console.log("\nEmbarque:");
if(idadeComprador >=18 && temPassagemComprada){
    console.log("Boa viagem");
}else{
    console.log("Você não pode embarcar");
}

console.log(listasDeDestinos);