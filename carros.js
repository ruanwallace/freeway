const carroVermelho = document.getElementById("carro1");
const carroCinza = document.getElementById("carro2");
const carroAzul = document.getElementById("carro3");

const carros = [carroVermelho, carroCinza, carroAzul, carroCinza, carroVermelho, carroAzul];

const velocidades = [1.5, 1.7, 1.9, 1.6, 2.2, 1.8];

let xCarros = [700, 700, 700, 700, 700, 700];
const yCarros = [73, 122, 170, 224, 268, 317];

const larguraCarro = 60;
const alturaCarro = 39;

const xInicialCarros = 700;

const audioColisao = document.getElementById("colisao");

function posicionaCarros() {
    for (let i = 0; i < carros.length; i++) {
        pincel.drawImage(carros[i], xCarros[i], yCarros[i], larguraCarro, alturaCarro);
    }
}

function voltaOsCarrosParaXInicial(i) {
    if (xCarros[i] + larguraCarro < -20) {
        xCarros[i] = xInicialCarros;
    }
}

function moveCarros() {
    for (let i = 0; i < carros.length; i++) {
        xCarros[i] -= velocidades[i];
        
        voltaOsCarrosParaXInicial(i);
    }
}

function parametroDosCarros(contador) {
    return yCarros[contador] + alturaCarro > yGalinha &&
    yCarros[contador] < yGalinha + alturaGalinha &&
    xCarros[contador] + larguraCarro > xGalinha &&
    xCarros[contador] < xGalinha + larguraGalinha;
}

function colisaoComAGalinha() {
    for (let i = 0; i < carros.length; i++) {
        if (parametroDosCarros(i)) {
            audioColisao.play();
            perdePonto();
            galinhaVoltaParaOInicio();
        }
    }
}