import {getLista, adicionaNaLista, removeDaLista,limpaLista} from "../src/lista.js"

const nEntrada = document.querySelector("#entrada");
const btnAdicionar = document.querySelector("#adicionar");
const btnLimpar = document.querySelector("#limpar");
const olItens = document.querySelector("#itens");

atualizarListaOrdenada();

function atualizarListaOrdenada(){
    const lista = getLista();
    for(let i=0; i<lista.length; i++)
    {
        adicionaElementoNaLista(lista[i]);
    }
}


function adicionaElementoNaLista(texto){
    const li = document.createElement("li");
    li.textContent = texto;
    olItens.appendChild(li);
}
