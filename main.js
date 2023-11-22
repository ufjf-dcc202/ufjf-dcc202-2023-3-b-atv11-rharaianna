import {getLista, adicionaNaLista, removeDaLista,limpaLista} from "../src/lista.js"

const pEntrada = document.querySelector("#entrada");
const btnAdicionar = document.querySelector("#adicionar");
const btnLimpar = document.querySelector("#limpar");
const olItens = document.querySelector("#itens");

atualizarListaOrdenada();
btnAdicionar.addEventListener('click',adicionaItemDaEntrada);


function atualizarListaOrdenada(){
    const lista = getLista();
    olItens.innerHTML="";
    for(let i=0; i<lista.length; i++)
    {
        adicionaElementoNaLista(lista[i]);
    }
}

function adicionaItemDaEntrada(){
    const valor = pEntrada.textContent;
    adicionaNaLista (valor);
    pEntrada.textContent = "";
    atualizarListaOrdenada();
}
function adicionaElementoNaLista(texto){
    const li = document.createElement("li");
    li.textContent = texto;
    olItens.appendChild(li);
}
