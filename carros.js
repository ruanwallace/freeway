// Variáveis com as imagens dos carros
const carroVermelho = document.getElementById("carro1");
const carroCinza = document.getElementById("carro2");
const carroAzul = document.getElementById("carro3");

// Lista dos carros
const carros = [carroVermelho, carroCinza, carroAzul, carroCinza, carroVermelho, carroAzul];

// Lista com as velocidades de cada carro
const velocidades = [1.5, 1.7, 1.9, 1.6, 2.2, 1.8];

// Posição dos carros
let xCarros = [700, 700, 700, 700, 700, 700];
const yCarros = [73, 122, 170, 224, 268, 317];

// Tamanho dos carros
const larguraCarro = 60;
const alturaCarro = 39;

// Posição Inicial dos carros
const xInicialCarros = 700;

// Áudio da colisão da galinha com os carros
const audioColisao = document.getElementById("colisao");

// Posiciona cada carro em sua respetiva posição
function posicionaCarros() {
    for (let i = 0; i < carros.length; i++) {
        pincel.drawImage(carros[i], xCarros[i], yCarros[i], larguraCarro, alturaCarro);
    }
}

// Cria o loop dos carros, fazendo com que eles voltem para a posição inicial toda vez que percorrem toda a extensão da estrada
function voltaOsCarrosParaXInicial(i) {
    if (xCarros[i] + larguraCarro < -20) {
        xCarros[i] = xInicialCarros;
    }
}

// Faz com que os carros se movam, decrementando a sua posição X
function moveCarros() {
    for (let i = 0; i < carros.length; i++) {
        xCarros[i] -= velocidades[i];
        
        voltaOsCarrosParaXInicial(i);
    }
}

// Esses são os parâmetros dos carros que definem as condições de colisão
function parametroDosCarros(contador) {
    return yCarros[contador] + alturaCarro > yGalinha &&
    yCarros[contador] < yGalinha + alturaGalinha &&
    xCarros[contador] + larguraCarro > xGalinha &&
    xCarros[contador] < xGalinha + larguraGalinha;
}

// Faz com que haja a colisão da galinha com os carros
function colisaoComAGalinha() {
    for (let i = 0; i < carros.length; i++) {
        if (parametroDosCarros(i)) {
            audioColisao.play();
            perdePonto();
            galinhaVoltaParaOInicio();
        }
    }
}