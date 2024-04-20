const form = document.getElementById('lista-tarefa');
const nomeTarefa = document.getElementById('nome-tarefa');

tarefas = [];

linhas = '';

form.addEventListener('submit', function (e) {
    e.preventDefault();

    addTarefa();
    atualizaTarefa();

})

function addTarefa() {
    const inputTarefa = document.getElementById('nome-tarefa');

    tarefas.push(inputTarefa.value);

    let linha = '<tr>';

    linha += `<td>${inputTarefa.value}</td>`;
    linha += '</tr>';

    linhas += linha;

    inputTarefa.value = '';

}

function atualizaTarefa() {
    const corpoTabela = document.querySelector('tbody');
    corpoTabela.innerHTML = linhas;
}

/*

document.addEventListener('DOMContentLoaded', function() {
    const tabelaTarefas = document.getElementById('tabela-tarefas');

    tabelaTarefas.addEventListener('click', function(e) {
        if (e.target.tagName === 'TD') {
            e.target.classList.toggle('riscado');
        }
    });
});

*/
$(document).ready(function () {
    $('#tabela-tarefas').on('click', 'td', function () {
        $(this).toggleClass('riscado');
    });
});