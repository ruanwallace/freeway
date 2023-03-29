const galinha = document.getElementById("galinha");

const xGalinha = 140;
let yGalinha = 365;

const velocidadeGalinha = 0.8;

const larguraGalinha = 45;
const alturaGalinha = 35;

const setaParaCima = 38;
const setaParaBaixo = 40;

let andarParaCima = false;
let andarParaBaixo = false;

const linhaDeChegada = 68;

let meusPontos = 0;

const audioPonto = document.getElementById("ponto");

function posicionaGalinha() {
    pincel.drawImage(galinha, xGalinha, yGalinha, larguraGalinha, alturaGalinha);
}

function permiteGalinhaAndar(e) {
    switch (e.keyCode) {
        case setaParaCima:
            andarParaCima = true;
            break;
        
        case setaParaBaixo:
            andarParaBaixo = true;
            break;
    }
}

function moveGalinha() {
    if (andarParaCima) {
        yGalinha -= velocidadeGalinha;
    }
    if (andarParaBaixo) {
        yGalinha += velocidadeGalinha;
    }
}

function paraAGalinhaDeAndar() {
    andarParaCima = false;
    andarParaBaixo = false;
}

function limitaOFundo() {
    if (yGalinha + alturaGalinha > 400) {
        yGalinha = 400 - alturaGalinha;
    }
}

function galinhaVoltaParaOInicio() {
    yGalinha = 365;
}

function marcaPonto() {
    if (yGalinha + alturaGalinha < linhaDeChegada) {
        audioPonto.play();
        meusPontos += 1;
        galinhaVoltaParaOInicio();
    }
}

function perdePonto() {
    if (meusPontos > 0) {
        meusPontos -= 1;
    }
}

onkeydown = permiteGalinhaAndar;
onkeyup = paraAGalinhaDeAndar;