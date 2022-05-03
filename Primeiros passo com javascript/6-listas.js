console.log('Trabalhando com listas');

// const salvador = 'Salvador';
// const saopaulo = 'São Paulo';
// const rioDeJaneiro = 'Rio de Janeiro';

const listasDeDestinos = new Array(
    'Salvador',
    'São Paulo',
    'Rio de Janeiro'
);
listasDeDestinos.push('Curitiba'); //Adicionando um item na lista
console.log(listasDeDestinos);

listasDeDestinos.splice(2,1);
console.log(listasDeDestinos);
listasDeDestinos.push('Recife');
console.log(listasDeDestinos);
console.log(listasDeDestinos[3]);