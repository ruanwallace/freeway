const tela = document.querySelector("canvas");
const pincel = tela.getContext("2d");

const estrada = document.getElementById("estrada");

const audioTrilha = document.getElementById("trilha");

const buttonPlay = document.getElementById("play");

let inicializado = false;

function mostraPontos() {
    pincel.fillStyle = "black";
    pincel.font = "30px Arial";
    pincel.fillText(meusPontos, 20, 66);
    pincel.strokeStyle = "#FFD700";
    pincel.strokeText(meusPontos, 20, 66);
}

function fundo() {
    pincel.drawImage(estrada, 0, 0);
    mostraPontos();
}

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

function iniciaOJogo() {
    if (!inicializado) {
        setInterval(atualiza, 4);
        inicializado = true;
        audioTrilha.play()
        buttonPlay.style.display = "none";
    }
}

fundo();

buttonPlay.onclick = iniciaOJogo;
