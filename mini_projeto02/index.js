const conversaoTempo = {"Segundos para Minuto": "s/m", "Segundos para Hora": 's/h', "Minutos para Segundo": 'm/s' , "Minutos para Hora": 'm/h', "Hora para segundos": 'm/h', "Hora para minutos": 'm/h'};

const conversaoTemperatura = {"Celsius para Fahrenheit": "C/F", "Celsius para Kelvin": "C/K", "Fahrenheit para Celsius": "F/C", "Fahrenheit para Kelvin": "F/K", "Kelvin para Celsius": "K/C", "Kelvin para Fahrenheit": "K/F"};
    
const conversaoDistancia = {"Centímetros para Metros": "cm/m", "Centímetros para Quilômetros": "cm/km", "Metros para Centímetros": "m/cm", "Metros para Quilômetros": "m/km", "Quilômetros para Centímetros": "km/cm", "Quilômetros para Metros": "km/m"};


function conversoesTempo(tipo, valor) {
    switch (tipo) {
        case "s/m":
            return valor / 60;

        case "s/h":
            return (valor / 60) / 60 

        case "h/s":
            return valor / 60;

        case "h/m":
            return (valor * 60) 

        case "m/s":
            return valor * 60;

        case "m/h":
            return valor / 60; 
    }
}

function conversoesTemperatura(tipo, valor) {
    switch (tipo) {
        case "C/F":
            return (valor * 1.8) + 32;
        case "C/K":
            return (valor + 273);

        case "F/C":
            return (valor - 32) / 1.8;

        case "F/K":
            return (valor - 32) * 5/9 + 273; 

        case "K/C":
            return (valor - 273);

        case "K/F":
            return (valor - 273) * 1.8 + 32; 
    }
}

function conversoesDistancia(tipo, valor) {
    switch (tipo) {
        case "cm/m":
            return valor / 10;
        case "cm/km":
            return valor / 100;

        case "m/cm":
            return valor * 100;

        case "m/km":
            return valor / 1000; 

        case "km/m":
            return valor * 1000;

        case "km/cm":
            return valor * 100000; 
    }
}

console.log(conversoesDistancia("km/cm", 3));

function configurarOpts(opt1, opt2, opt3, variavel_tipo) {
    let contador = 0;
    let elementoSelectOpcoes = document.getElementById('conversoes'); // "Of" itera sobre os indices

    if (elementoSelectOpcoes.innerHTML != null) {
        elementoSelectOpcoes.innerHTML = ""
    }

    let optgroupTipo = document.createElement('optgroup');
    optgroupTipo.label = opt1;
    elementoSelectOpcoes.appendChild(optgroupTipo);
    elementoSelectOpcoes.style.display = 'inline';
    // Fim configs iniciais --------------------------------

    for (const tipo in variavel_tipo) {
        contador++;
        
        // Atualize o optgroupTipo com o novo optgroup se necessário
        const novoOptgroup = configurarOptGroups(opt2, opt3, contador, elementoSelectOpcoes);
        if (novoOptgroup) { // Checa se nao está vazio
            optgroupTipo = novoOptgroup;
        }

        let opcaoConversao = document.createElement('option');
        opcaoConversao.innerHTML = tipo;
        opcaoConversao.value = variavel_tipo[tipo];
        optgroupTipo.appendChild(opcaoConversao);
    }   
}

function configurarOptGroups(opt1, opt2, contagem, elemento_select_opcoes) {
    let novoOptgroup = null; // Nunca estará recriando o let pois são bloco diferentes em diferentes etapas da iteração
    if (contagem == 3) {
        novoOptgroup = document.createElement('optgroup');
        novoOptgroup.label = opt1;
        elemento_select_opcoes.appendChild(novoOptgroup);
    } else if (contagem == 5) {
        novoOptgroup = document.createElement('optgroup');
        novoOptgroup.label = opt2;
        elemento_select_opcoes.appendChild(novoOptgroup);
    }
    return novoOptgroup;
}

function displayConversoes() {
    let tipoConversao = document.getElementById('tipo-conversao');
    

    switch (tipoConversao.value) {
        case "tempo":
            configurarOpts("Segundos", "Minutos", "Horas", conversaoTempo);
            break;
        case "medida":
            configurarOpts("Centimetros", "Metros", "Kilometros", conversaoDistancia);
            break;
        case "temperatura":
            configurarOpts("Celcius", "Fahrenheit", "Kelvin", conversaoTemperatura);
            break;
    };

}
    
