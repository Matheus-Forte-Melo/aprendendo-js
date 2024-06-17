/* JSON é um método que permite enviar dados de forma eficiente transformando-os em texto */
/* Podemos transformar JSON para um objeto JS, um dict em Python ou um hash */

let objetoHTML = document.getElementById("objeto");
let jsonHTML = document.getElementById("json");

const franquia = {
    nome: "Portal",
    qnt_jogos: 2,
    media_imdbQntJogos: 9.075
};

objetoHTML.innerHTML = franquia; // Não se pode exibir pois esta em formato "Object" e não texto
console.log(franquia)

jsonHTML.innerHTML = JSON.stringify(franquia); // Aqui esta em formato de texto


/* Transformando de volta para Objeto para usar no JS */

console.log(JSON.stringify(franquia).nome); // Aqui esta em formato de texto o que significa que dá undefined se eu tentar usar qualquer método do objeto

const str_json = '{"nome": "Portal"}'
let JSON_convertido = JSON.parse(str_json);

console.log(JSON_convertido.nome) // Agora é possivel
console.log(JSON_convertido)

/* Mexendo com uma API você sempre estará mexendo com JSON */

// const nome = "Melo";
// const frase = `Ei, já falei que meu nome é ${nome} ein? MEU NOME É ${nome.toLocaleUpperCase()}`
// console.log(frase)







