var colors = [
    "aliceblue", "antiquewhite", "aqua", "aquamarine", "azure", "beige", "bisque", "black", "blanchedalmond", "blue", "blueviolet", "brown", "burlywood", "cadetblue", "chartreuse", "chocolate", "coral", "cornflowerblue", "cornsilk", "crimson", "cyan", "darkblue", "darkcyan", "darkgoldenrod", "darkgray", "darkgrey", "darkgreen", "darkkhaki", "darkmagenta", "darkolivegreen", "darkorange", "darkorchid", "darkred", "darksalmon", "darkseagreen", "darkslateblue", "darkslategray", "darkslategrey", "darkturquoise", "darkviolet", "deeppink", "deepskyblue", "dimgray", "dimgrey", "dodgerblue", "firebrick", "floralwhite", "forestgreen", "fuchsia", "gainsboro", "ghostwhite", "gold", "goldenrod", "gray", "grey", "green", "greenyellow", "honeydew", "hotpink", "indianred", "indigo", "ivory", "khaki", "lavender", "lavenderblush", "lawngreen", "lemonchiffon", "lightblue", "lightcoral", "lightcyan", "lightgoldenrodyellow", "lightgray", "lightgrey", "lightgreen", "lightpink", "lightsalmon", "lightseagreen", "lightskyblue", "lightslategray", "lightslategrey", "lightsteelblue", "lightyellow", "lime", "limegreen", "linen", "magenta", "maroon", "mediumaquamarine", "mediumblue", "mediumorchid", "mediumpurple", "mediumseagreen", "mediumslateblue", "mediumspringgreen", "mediumturquoise", "mediumvioletred", "midnightblue", "mintcream", "mistyrose", "moccasin", "navajowhite", "navy", "oldlace", "olive", "olivedrab", "orange", "orangered", "orchid", "palegoldenrod", "palegreen", "paleturquoise", "palevioletred", "papayawhip", "peachpuff", "peru", "pink", "plum", "powderblue", "purple", "rebeccapurple", "red", "rosybrown", "royalblue", "saddlebrown", "salmon", "sandybrown", "seagreen", "seashell", "sienna", "silver", "skyblue", "slateblue", "slategray", "slategrey", "snow", "springgreen", "steelblue", "tan", "teal", "thistle", "tomato", "turquoise", "violet", "wheat", "white", "whitesmoke", "yellow", "yellowgreen"
];

function verificarTamanho() {
    const opcoesRadio = document.querySelectorAll('input[name="tam_benga"]'); 
    // Selecionando todos os inputs com nome tam_benga

    let tamanho_selecionado;

    for (const opcaoRadio of opcoesRadio) {
        if (opcaoRadio.checked) {
            tamanho_selecionado = opcaoRadio.value;
            localStorage.setItem("tamanho_selecionado", opcaoRadio.value);
            // localStorage.setItem("radiobox_selecionada", opcaoRadio); -> LocalStorage so armazena Strings
            break;
        };
    };

    outputResposta(tamanho_selecionado);

    // Pego todos os elementos radio com name "tam_benga", itero sobre eles checando se estão selecionados, se estão, atribui seu valor à variável tamanho selecionado
}

function carregarTamanhoLC(){
    let tamanho_selecionado = localStorage.getItem("tamanho_selecionado");
    const opcoesRadio = document.querySelectorAll('input[name="tam_benga"]')
    outputResposta(tamanho_selecionado)

    if (tamanho_selecionado) {
        for (const opcaoRadio of opcoesRadio) {
            if (opcaoRadio.value == tamanho_selecionado) {
                opcaoRadio.checked = true;
                break;
            }
        };
    };

    console.log(opcoesRadio)
    
};

function outputResposta(tamanho_selecionado) {
    const p_resultado = document.getElementById('resultado');
    switch (tamanho_selecionado) {
        case '0-3cm':
            p_resultado.innerHTML = "Iiiiih que pauzinho mixurucaaaa, vai a merda com esse polenguinho ai vai 😑"
        break;
        
        case '4-7cm':
            p_resultado.innerHTML = "Faltou fermento foi? 😔"
        break;

        case '8-12cm':  
            p_resultado.innerHTML = "Opa, confundi com um lapis, mas ta tudo certo 😅"
        break;

        case '13-15cm':
            p_resultado.innerHTML = "Opa hihihihi🤭😏. "
        break;

        case '16-20cm':
            p_resultado.innerHTML = "Quer conversar? Em um lugar privado? 😈'"
        break;
    };
};

function validarInputCor() {
    let input_bruto = document.getElementById('input_cor').value.toLowerCase();
    let input_formatado = input_bruto.replace(/\s/g, '');
    
    console.log(input_formatado)

    if (!(colors.includes(input_formatado))) {
        document.getElementById('feedback').innerHTML = "Essa cor não faz parte das cores padrões do HTML, se estiver digitando um valor hexadecimal, certifique-se de que ele está certo."
    } else {
        document.getElementById('feedback').innerHTML = "Tudo certo!"
    };

    if (input_formatado == '' || input_formatado == 'null')
        document.getElementById('feedback').innerHTML = "Valores nulos não são cores, imbecil."
    }


const url_cor = new URLSearchParams(window.location.search);
let input_cor = url_cor.get('input_cor').toLowerCase().replace(/\s/g, '').trim();

document.body.style.backgroundColor = input_cor;

console.log(localStorage.getItem("tamanho_selecionado"));

