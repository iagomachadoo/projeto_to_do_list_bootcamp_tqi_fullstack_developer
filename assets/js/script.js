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

const EL_INPUT_TAREFA = pegarElementos('input')

const EL_BTN_ADICIONAR_TAREFA = pegarElementos('button')

const LISTA_DE_TAREFAS = pegarElementos('ul')

addEvento(EL_BTN_ADICIONAR_TAREFA[0], 'click', addTarefa)

let textoDigitado = ''

function addTarefa(){
    textoDigitado = EL_INPUT_TAREFA[0].value

    const EL_CHECKBOX = '<input type="checkbox" id="tarefa">'

    const EL_NOME_TAREFA = `<label for="tarefa">${textoDigitado}</label>`

    if(textoDigitado === ''){
        alert('Escreva uma tarefa')

    }else{
        LISTA_DE_TAREFAS[0].appendChild(criarEl('li')).innerHTML = `${EL_CHECKBOX}${EL_NOME_TAREFA}`
    }
    
    EL_INPUT_TAREFA[0].value = ''
}

