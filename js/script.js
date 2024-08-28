import {aleatorio, nome} from './aleatorio.js';
import {perguntas} from './perguntas.js';
  
const caixaPrincipal = document.querySelector(". caixa-principal");
const caixaPerguntas = document.querySelector(".caixa-perguntas");
const caixaAlternativas = document.querySelector(".caixa-alternativas");
const caixaResultado = document.querySelector(".caixa-resultado");
const textoResultado = document.querySelector(".texto-resultado");
const botaoJogarNovamente = document.querySelector(".novamente-btn");
const botaoIniciar = document.querySelector(".iniciar-btn");
const telaInicial = document.querySelector(".tela-inicial");

let atual = 0;
let perguntasAtual;
let historiaFinal = "";

botaoIniciar.addEventListener('click', iniciaJogo);

function iniciaJogo() {
     atual = 0;
     historiaFinal = "";
     telaInicial.Style.display = 'none';
     caixaPerguntas.classList.remove("mostrar");
     caixaAlternativas.classList.remove("mostrar");
     caixaResultado.classList.remove("mostrar");
     mostrarPerguntas();
}

function mostrarPerguntas(){
    if (atual >=perguntas.length) {
        mostraResultado();
        return;
    }
    perguntaAtual = perguntas[atual];
    caixaPerguntas.textContent = perguntaAtual.enunciado;
    caixaAlternativas.textContent = "";
    mostraAlternativas();
}

function mostraAlternativas(){
    for (const alternativa of perguntaAtual.alternativas){
        const botaoAlternativas = document.createElement("button");
        botaoAlternativas.textContent = alternativa.texto;
    }
}