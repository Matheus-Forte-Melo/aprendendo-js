import { 
    tempoConversao, 
    temperaturaConversao, 
    distanciaConversao, 
    converterTempo, 
    converterTemperatura, 
    converterDistancia, 
    pegarKey, 
    pegarObjPeloTipo, 
    pegarFuncaoConversao 
} from './util.js';

let containerInputOutput = document.getElementById('interacao-container');
containerInputOutput.style.display = "none";

let conversoes = document.getElementById('conversoes');
let input = document.getElementById("input-conversao");
let btnInput = document.getElementById("btn-input-conversao");
let feedback = document.getElementById("feedback-conversao")
let eventoCriado = false;
let tipoConversaoSelecionada = ""; 
 
window.inputConversao = function() {
    const valor = input.value;
    let conversao = document.getElementById("conversoes").value;
    let valor_convertido;
    let funcaoConversao = pegarFuncaoConversao(tipoConversaoSelecionada.value);
   
    if (valor != null && conversao != "") {
        valor_convertido = funcaoConversao(conversao, valor);
        console.log(valor, valor_convertido)
        feedback.innerText = " Resultado: " + valor_convertido;
    }
}

window.teste = function(valor_conv, feedback) {
    let objConversaoSelecionado = pegarObjPeloTipo(tipoConversaoSelecionada.value);
    feedback.innerHTML = `Convertendo ${pegarKey(objConversaoSelecionado, conversoes.value).toLowerCase()}.`;

    if (containerInputOutput.style.display == "none") { 
        containerInputOutput.style.display = "inline";
    }

    console.log(valor_conv);
}   

function criarOptPadrao() { 
    let opcao_default = document.createElement('option');
    opcao_default.innerHTML = "---- Selecione uma Conversão ----";
    opcao_default.value = "N/D";
    opcao_default.setAttribute('disabled', true); 
    opcao_default.setAttribute('selected', true); 
    
    return opcao_default;
}

function configurarOpts(opt1, opt2, opt3, variavel_tipo) {
    let contador = 0;
    let feedbackConversao = document.getElementById('feedback-conversao');
    
    if (conversoes.innerHTML != null) { 
        conversoes.innerHTML = "";
    }

    conversoes.appendChild(criarOptPadrao());

    let optgroupTipo = document.createElement('optgroup');
    optgroupTipo.label = opt1;
    conversoes.appendChild(optgroupTipo);
    conversoes.style.display = 'inline';

    for (const tipo in variavel_tipo) {
        contador++;
        
        const novoOptgroup = configurarOptGroups(opt2, opt3, contador, conversoes);
        if (novoOptgroup) {
            optgroupTipo = novoOptgroup;
        }

        let opcaoConversao = document.createElement('option');
        opcaoConversao.innerHTML = tipo;
        opcaoConversao.value = variavel_tipo[tipo];
        optgroupTipo.appendChild(opcaoConversao);
    }   

    feedbackConversao.innerText = "Selecione uma conversão";

    if (!eventoCriado) {
        conversoes.addEventListener('change', function() {
            teste(conversoes.value, feedbackConversao);
        });

        eventoCriado = true;
    }    
}

function configurarOptGroups(opt2, opt3, contagem, conversoes) {
    let novoOptgroup = null;
    if (contagem == 3) {
        novoOptgroup = document.createElement('optgroup');
        novoOptgroup.label = opt2;
        conversoes.appendChild(novoOptgroup);
    } else if (contagem == 5) {
        novoOptgroup = document.createElement('optgroup');
        novoOptgroup.label = opt3;
        conversoes.appendChild(novoOptgroup);
    }
    return novoOptgroup;
}

window.displayConversoes = function() {
    containerInputOutput.style.display = "none";
    feedback.style.display = "inline"
    tipoConversaoSelecionada = document.getElementById('tipo-conversao');
    input.value = "";
    
    switch (tipoConversaoSelecionada.value) {
        case "tempo":
            configurarOpts("Segundos", "Minutos", "Horas", tempoConversao);
            break;
        case "medida":
            configurarOpts("Centimetros", "Metros", "Kilometros", distanciaConversao);
            break;
        case "temperatura":
            configurarOpts("Celcius", "Fahrenheit", "Kelvin", temperaturaConversao);
            break;
    }
}

input.addEventListener("keypress", function(event) {
    if (event.key == "Enter") {
        btnInput.click();
    }
});
