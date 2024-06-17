// Eventos

// São ações disparadas pela interação dos usuários na página. Disparado quando um certa ação é feita em um elemento

/*

Disparos:

onclick ->  Quando recebe um click
ondbclick ->  Quando recebe doubleclick
onmouseover -> Quando o mouse está sobre o elemento
onmouseout -> "" é movido para fora do elemento
onmousemove -> "" é movido no elemento
onmouseup -> Quando o click do mouse é liberado
onmousedown -> "" o clique do mouse é pressionado
onfocus -> "" o elemento recebe foco (i.e input ou quando apertamos tab)
onchange > Quando há mudança no conteúdo (ou no value: i.e select, input, radiobox)
onblur -> Quando elemento perde o foco 
onkeydown -> Quando a tecla é pressionada
onkeyup -> Quando a tecla é solta sobre 
onkeypress -> Quando a tecla é pressionada e solta  
onload -> Quando o body terminar de ser carregado
onresize -> Quando a janela for redimerencionada
*/ 

// document.getElementById("id").style.(elemento de estilo) = "valor"


let contador = 0;
const contadorHTML = document.getElementById("contador");

function incrementar(){
    contador += 1;
    console.log(contador)
    contadorHTML.innerHTML = contador;
};

function decrementar(){
    contador -= 1;
    console.log(contador)
    contadorHTML.innerHTML = contador;
};

function resetContador(){
    contador = 0;
    contadorHTML.innerHTML = contador;
};

let indiceCor = 0;
const listaCor = ["yellow", "orange", "red", "pink", "purple", "teal", "green", "lightgreen", "white"];

function mudarCor(){
    
    let divCor = document.getElementById("divCor");

    if (indiceCor >= listaCor.length - 1){
        indiceCor = 0;
    } else {
        indiceCor += 1;
    };

    console.log(indiceCor)

    divCor.style.backgroundColor = listaCor[indiceCor];

}

const divLouca = document.getElementById('divLouca')
const keyWords = ["Never", "Gonna", "Give", "You", "Up", "Let", "Down", "Run", "Around", "Desert", "Make", "Cry", "Say", "Goodbye", "Tell", "Lie", "Hurt", "Known", "Each", "Other", "Rules"];


function adicionarTexto() {
    let indiceTexto = Math.floor(Math.random() * 21);
    console.log(indiceTexto);
    divLouca.append(keyWords[indiceTexto] + " ");
}

const estadoMouse = document.getElementById('estadoMouse');


function mouseBaixo(){
    estadoMouse.innerHTML = "Você pressionou o botão do mouse";
}

function mouseCima(){
    estadoMouse.innerHTML = "Você soltou o botão do mouse";
}

function mostrarTecla(){
   input = document.getElementById('text').value;
   document.getElementById('tecla').innerHTML = " " + input[input.length -1]
   document.getElementById('texto_escrito').innerHTML = input
}

/* ----- Teste nada haver ------*/ 


const url_q = new URLSearchParams(window.location.search);
q = url_q.get('q')

document.getElementById("resultado_input").innerHTML  = q   


/*Podemos atribuir a variáveis elementos do documento html e usar a varíavel para referenciá-lo
let p = document.getElementsById("id");
p.InnerHTML = "Ola!"; */

// O body não precisa ser setado pq  body é padrão, então podemosu usar:
// document.body.style = "yellow"

// document.getElementById("id").append = "Valor " Invez de setar o valor usando o inner HTML, ele ADICIONA
// Setar -> .innerHTML = ""
// Adicionar -> .append

// Quando trabalharmos com inputs, para mexer com os valores de dentro inseridos pelo usuário, usamos .value
// document.getElementById("id").value = ""


// W.I.P
// Fazer um input evento que dá console.log nas telcas pressionadas pegando o value do input