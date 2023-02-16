// Relacionado com a pintura do fundo.
const tela = document.querySelector("canvas");
const pincel = tela.getContext("2d");

// Imagem da estrada
const estrada = document.getElementById("estrada");

// Áudio da trilha sonora do jogo
const audioTrilha = document.getElementById("trilha");

// Botão para começar o jogo
const buttonPlay = document.getElementById("play");

// Mostra se o jogo está iniciado
let inicializado = false;

// Exibe a marcação de pontos na parte superior esquerda da tela
function mostraPontos() {
    pincel.fillStyle = "black";
    pincel.font = "30px Arial";
    pincel.fillText(meusPontos, 20, 66);
    pincel.strokeStyle = "#FFD700";
    pincel.strokeText(meusPontos, 20, 66);
}

// Cria a tela
function fundo() {
    pincel.drawImage(estrada, 0, 0);
    mostraPontos();
}

// Carrega as funções
function atualiza() {
    fundo();
    posicionaCarros();
    posicionaGalinha();
    moveCarros();
    moveGalinha();
    limitaOFundo();
    colisaoComAGalinha();
    marcaPonto();
}

// Associado a um botão, assim que é pressionado, o botão some e o jogo é inicializado
function iniciaOJogo() {
    if (!inicializado) {
        setInterval(atualiza, 4);
        inicializado = true;
        audioTrilha.play()
        buttonPlay.style.display = "none";
    }
}

// Desenha a tela
fundo();

// Botão para iniciar o jogo
buttonPlay.onclick = iniciaOJogo;
