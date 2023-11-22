const nEntrada = document.querySelector("#entrada");
const btnAdicionar = document.querySelector("#adicionar");
const btnLimpar = document.querySelector("#limpar");
const olItens = document.querySelector("#itens");

adicionaElementoNaLista("primeiro");
adicionaElementoNaLista("segundo");
adicionaElementoNaLista("terceiro");

function adicionaElementoNaLista(texto){
    const li = document.createElement("li");
    li.textContent = texto;
    olItens.appendChild(li);
}
