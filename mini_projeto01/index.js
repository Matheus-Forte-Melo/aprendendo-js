let input = document.getElementById('input-tarefa');
let btn_input = document.getElementById('add-tarefa-btn');
let main = document.getElementById('container-tarefas');
let id = 0;

function mudarIcone(pathElement, bool) {
    if (!bool) {
        pathElement.setAttribute('d', 'M128,24A104,104,0,1,0,232,128,104.11,104.11,0,0,0,128,24Zm0,192a88,88,0,1,1,88-88A88.1,88.1,0,0,1,128,216Z');
        pathElement.setAttribute('fill', '#000000');
    } else {
        pathElement.setAttribute('d', 'M128,24A104,104,0,1,0,232,128,104.11,104.11,0,0,0,128,24Zm45.66,85.66-56,56a8,8,0,0,1-11.32,0l-24-24a8,8,0,0,1,11.32-11.32L112,148.69l50.34-50.35a8,8,0,0,1,11.32,11.32Z');
        pathElement.setAttribute('fill', '#1baa08');
    }
}   

function deletar(id) {
    let item_tarefa = document.getElementById(id);
    item_tarefa.remove();
}

function tarefaOnOff(tarefa) {
    let pathElement = tarefa.querySelector('path'); // Selecionamos o PATH dentro da section tarefa para posteriormente alterar sua propriedades com sucesso
    if (!tarefa.concluida) {
        tarefa.classList.add("tarefa-concluida");
        mudarIcone(pathElement, true);
        tarefa.concluida = true;

        tarefa.parentNode.appendChild(tarefa) // Garente que quando clicado vá para o final
    } else {

        tarefa.classList.remove("tarefa-concluida");
        mudarIcone(pathElement, false);
        tarefa.concluida = false;
    }
}

function criaTarefa() {
    if (input.value.trim() != "") {
        id++;
        const novoItemTarefa = document.createElement('section'); // cria o elemento e as linha subsequentes configuram algumas propriedades, event listeners e classes
        novoItemTarefa.classList.add('tarefa');
        novoItemTarefa.id = id;
        novoItemTarefa.concluida = false;

        novoItemTarefa.addEventListener("click", function() {
            tarefaOnOff(novoItemTarefa);
        });

        novoItemTarefa.innerHTML = `
            <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="#000000" viewBox="0 0 256 256"><path d="M128,24A104,104,0,1,0,232,128,104.11,104.11,0,0,0,128,24Zm0,192a88,88,0,1,1,88-88A88.1,88.1,0,0,1,128,216Z"></path></svg>
            <p class="tarefa-p">${input.value}</p>
            <button onclick="deletar(${id})" class="btn-deletar">Deletar</button>
        `;

        main.appendChild(novoItemTarefa);  // bota o elemento no main
    }
    
    console.log("contador = " + id);
    input.value = "";
    input.focus();
}

// Adiciona o event listener para detectar a tecla Enter
input.addEventListener("keyup", function(event) { 
    if (event.key === "Enter") {
        btn_input.click();
    }
});
