"use strict"

function pegarElementos(tagEl){
    const ELEMENTO = document.getElementsByTagName(tagEl);

    return ELEMENTO
}

function addEvento(el, evento, funcao){
    return el.addEventListener(evento, funcao)
}

function criarEl(nomeEl){
    return document.createElement(nomeEl);
}

const OBJ_PEGANDO_ELEMENTO = {
    wrapper: pegarElementos('div'),
    elInputTarefa: pegarElementos('input'),
    listaDeTarefas: pegarElementos('ul'),
    elBtnAddTarefa: pegarElementos('button'),
    pegarBtnLimparLista: pegarElementos('button'),
}

const CRIANDO_BTN_LIMPAR_LISTA = criarEl('button')

addEvento(OBJ_PEGANDO_ELEMENTO.elBtnAddTarefa[0], 'click', addTarefa)

addEvento(CRIANDO_BTN_LIMPAR_LISTA, 'click', limparLista)


let textoDigitado = ''

function addTarefa(){
    textoDigitado = OBJ_PEGANDO_ELEMENTO.elInputTarefa[0].value

    const EL_CHECKBOX = '<input type="checkbox" id="tarefa">'

    const EL_NOME_TAREFA = `<label for="tarefa">${textoDigitado}</label>`

    if(textoDigitado === ''){
        alert('Escreva uma tarefa')

    }else{
        OBJ_PEGANDO_ELEMENTO.listaDeTarefas[0].appendChild(criarEl('li')).innerHTML = `${EL_CHECKBOX}${EL_NOME_TAREFA}`
    }
    
    if(pegarElementos('li').length != 0){
        OBJ_PEGANDO_ELEMENTO.wrapper[0].appendChild(CRIANDO_BTN_LIMPAR_LISTA).innerText = 'Limpar'
    }
    
    OBJ_PEGANDO_ELEMENTO.elInputTarefa[0].value = ''
}

function limparLista(){
    const TAREFA = document.querySelectorAll('li');
    
    for(let i = 0; i < TAREFA.length; i++){
        OBJ_PEGANDO_ELEMENTO.listaDeTarefas[0].removeChild(TAREFA[i])
    }

    if(pegarElementos('li').length === 0){
        OBJ_PEGANDO_ELEMENTO.wrapper[0].removeChild(OBJ_PEGANDO_ELEMENTO.pegarBtnLimparLista[1])
    }
}