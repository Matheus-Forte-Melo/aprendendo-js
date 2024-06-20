const tempoConversao = {
    "Segundos para Minuto": "s/m",
    "Segundos para Hora": 's/h',
    "Minutos para Segundo": 'm/s',
    "Minutos para Hora": 'm/h',
    "Hora para Segundos": 'h/s',
    "Hora para Minutos": 'h/m'
};

const temperaturaConversao = {
    "Celsius para Fahrenheit": "C/F",
    "Celsius para Kelvin": "C/K",
    "Fahrenheit para Celsius": "F/C",
    "Fahrenheit para Kelvin": "F/K",
    "Kelvin para Celsius": "K/C",
    "Kelvin para Fahrenheit": "K/F"
};

const distanciaConversao = {
    "Centímetros para Metros": "cm/m",
    "Centímetros para Quilômetros": "cm/km",
    "Metros para Centímetros": "m/cm",
    "Metros para Quilômetros": "m/km",
    "Quilômetros para Centímetros": "km/cm",
    "Quilômetros para Metros": "km/m"
};

let containerInputOutput = document.getElementById('interacao-container');
containerInputOutput.style.display = "none" // Ele aparece por fração de segundona tela, mais facil seria criar um elemento no first time e depois começar a faze-lo aparecer e desaparecer 

let input = document.getElementById("input-conversao");
let btnInput = document.getElementById("btn-input-conversao");
let eventoCriado = false;
let tipoConversaoSelecionada = "";

function converterTempo(tipo, valor) {
    switch (tipo) {
        case "s/m": return valor / 60;
        case "s/h": return valor / 3600;
        case "h/s": return valor * 3600;
        case "h/m": return valor * 60;
        case "m/s": return valor * 60;
        case "m/h": return valor / 60;
        default: return null;
    }
}

function converterTemperatura(tipo, valor) {
    switch (tipo) {
        case "C/F": return (valor * 1.8) + 32;
        case "C/K": return valor + 273;
        case "F/C": return (valor - 32) / 1.8;
        case "F/K": return (valor - 32) * 5 / 9 + 273;
        case "K/C": return valor - 273;
        case "K/F": return (valor - 273) * 1.8 + 32;
        default: return null;
    }
}

function converterDistancia(tipo, valor) {
    switch (tipo) {
        case "cm/m": return valor / 100;
        case "cm/km": return valor / 100000;
        case "m/cm": return valor * 100;
        case "m/km": return valor / 1000;
        case "km/m": return valor * 1000;
        case "km/cm": return valor * 100000;
        default: return null;
    }
}

function inputConversao(){
    const valor = input.value;
    let conversao = document.getElementById("conversoes").value

    console.log("Botão apertado");
    if (valor != null && conversao != "") {
        console.log(converterDistancia(conversao, valor))
        console.log(valor)
    }
    
}

function teste(valor_conv, feedback) {
    feedback.innerHTML = `Convertendo ${tipoConversaoSelecionada.value}`;

    if (containerInputOutput.style.display == "none") { // Só ativa se necessário
        containerInputOutput.style.display = "inline";
    };

    console.log(valor_conv);
}   

function criarOptPadrao() { 
    // Toda vez eu crio de volta, se eu parar de criar toda vez, teoricamente poderia usar a mihna solucao de valor anterior - Resolvido, mas seria interessante fazer ele não criar de volta toda vez

    let opcao_default = document.createElement('option')
    opcao_default.innerHTML = "---- Selecione uma Conversão ----"
    opcao_default.value = "N/D"
    opcao_default.setAttribute('disabled', true); 
    opcao_default.setAttribute('selected', true); 
    
    return opcao_default
}

function configurarOpts(opt1, opt2, opt3, variavel_tipo) {
    let contador = 0;
    let conversoes = document.getElementById('conversoes'); // "Of" itera sobre os indices 
    let feedbackConversao = document.getElementById('feedback-conversao')
    
    if (conversoes.innerHTML != null) {
        conversoes.innerHTML = ""
    }

    conversoes.appendChild(criarOptPadrao());

    let optgroupTipo = document.createElement('optgroup');
    optgroupTipo.label = opt1;
    conversoes.appendChild(optgroupTipo);
    conversoes.style.display = 'inline';

    // Fim configs iniciais --------------------------------

    for (const tipo in variavel_tipo) {
        contador++;
        
        // Atualize o optgroupTipo com o novo optgroup se necessário
        const novoOptgroup = configurarOptGroups(opt2, opt3, contador, conversoes);
        if (novoOptgroup) { // Checa se nao está vazio
            optgroupTipo = novoOptgroup;
        }

        let opcaoConversao = document.createElement('option');
        opcaoConversao.innerHTML = tipo;
        opcaoConversao.value = variavel_tipo[tipo];
        optgroupTipo.appendChild(opcaoConversao);
    }   

    /* Configurações de Feedback e Event Listener */

    console.log(tipoConversaoSelecionada.value)
    feedbackConversao.innerText = "Selecione uma conversão"

    if (!eventoCriado) {
        conversoes.addEventListener('change', function() {
            teste(conversoes.value, feedbackConversao);
        });

        eventoCriado = true
    }    
   
}

function configurarOptGroups(opt2, opt3, contagem, conversoes) {
    let novoOptgroup = null; // Nunca estará recriando o let pois são bloco diferentes em diferentes etapas da iteração
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

function displayConversoes() {
    containerInputOutput.style.display = "none"
    tipoConversaoSelecionada = document.getElementById('tipo-conversao');
    
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
    };

}

input.addEventListener("keypress", function(event) {
    if (event.key == "Enter") {
        btnInput.click()
    }
})
    
