// Imagem da galinha
const galinha = document.getElementById("galinha");

// Posição da galinha
const xGalinha = 140;
let yGalinha = 365;

// Velocidade da galinha
const velocidadeGalinha = 0.8;

// Tamanho da galinha
const larguraGalinha = 45;
const alturaGalinha = 35;

// Code das arrows do teclado
const setaParaCima = 38;
const setaParaBaixo = 40;

// Variáveis que move a galinha
let andarParaCima = false;
let andarParaBaixo = false;

// Posição que marca ponto assim que a galinha passa
const linhaDeChegada = 68;

// Variável que guarda os meus pontos
let meusPontos = 0;

// Áudio da marcação de ponto
const audioPonto = document.getElementById("ponto");

// Posiciona a imagem da galinha e adiciona o seu tamanho
function posicionaGalinha() {
    pincel.drawImage(galinha, xGalinha, yGalinha, larguraGalinha, alturaGalinha);
}

// Muda o valor da variável que move a galinha, permitindo o movimento dela
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

// Move a galinha, incrementando ou decrementando o Y.
function moveGalinha() {
    if (andarParaCima) {
        yGalinha -= velocidadeGalinha;
    }
    if (andarParaBaixo) {
        yGalinha += velocidadeGalinha;
    }
}

// Muda o valor das variáveis, fazendo com que a galinha pare de se mover
function paraAGalinhaDeAndar() {
    andarParaCima = false;
    andarParaBaixo = false;
}

// Evita que a galinha ultrapasse o limite da estrada
function limitaOFundo() {
    if (yGalinha + alturaGalinha > 400) {
        yGalinha = 400 - alturaGalinha;
    }
}

// Retorna a galinha para a sua posição Y de origem
function galinhaVoltaParaOInicio() {
    yGalinha = 365;
}

// Adiciona ponto assim que a galinha passa a linha de chegada
function marcaPonto() {
    if (yGalinha + alturaGalinha < linhaDeChegada) {
        audioPonto.play();
        meusPontos += 1;
        galinhaVoltaParaOInicio();
    }
}

// Subtrai 1 ponto
function perdePonto() {
    if (meusPontos > 0) {
        meusPontos -= 1;
    }
}

// Usa a função "permiteGalinhaAndar" assim que as setas do teclado são pressionadas
onkeydown = permiteGalinhaAndar;
// Usa a função "paraAGalinhaDeAndar" assim que as setas do teclado deixam de ser pressionadas
onkeyup = paraAGalinhaDeAndar;