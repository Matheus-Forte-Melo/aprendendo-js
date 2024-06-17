class Jogo {
    constructor(titulo, developer, ano_lancamento) {
        this.titulo = titulo
        this.developer = developer
        this.ano_lancamento = ano_lancamento
        this.distribuitadora = null // Deve ser add depois
    }

    formatarInfos() {
        return "The game " + this.titulo + ", developed by " + this.developer + ",C  was released in " + this.ano_lancamento
    }
}


const jogo = {
    titulo: "Half-Life",
    developer: "Valve",
    ano_lancamento: "1998"
}

const instanciaJogo = new Jogo("Half-Life 2", "Valve", "2004")

console.log(Jogo)
console.log(instanciaJogo.formatarInfos())
console.log(jogo)

/* Manipulação de datas com a classe date */

let data_completa = new Date();

console.log(data_completa)
console.log(data_completa.getDay()) /* Para pega o indice da semana */
console.log(data_completa.getMonth()) /* Pega o indice do mes, o que no possibilita fazer o seguinte*/

const arraySemana = ["Domingo", "Segunda Feira", "Terça Feira", "Quarta Feira", "Quinta Feira", "Sexta Feira", "Sábado"];
const arrayMeses = ["Janeiro", "Fevereiro", "Março", "Março", "Abril", "Junho", "Julho", "Agosto", "Setembro", "Outubro", "Novembro", "Dezembro"];

let data_semana = arraySemana[data_completa.getDay()];
console.log(data_semana);
let data_mes = arrayMeses[data_completa.getMonth()];
console.log(data_mes);

/* Métodos que não precisam de formatação pois já vem no formato */ 
console.log(data_completa.getFullYear())
console.log(data_completa.getHours())
console.log(data_completa.getMinutes())
console.log(data_completa.getSeconds())
console.log(data_completa.getMilliseconds())

/* Formatação automática */
console.log(data_completa.toLocaleDateString())
console.log(data_completa.toLocaleString('pt-br', {timestyle: 'short'}))
console.log(data_completa.toTimeString())
console.log(data_completa.toJSON());

/*Comparações e Cálculos com datas e tempo*/

let diferencaDatas = new Date(1990, 5, 15, 5, 20, 12) - data_completa
console.log(Math.ceil(diferencaDatas / (24 * 60 * 60 * 1000) * -1));

let data_pComparacao = new  Date(2010, 2, 35, 2, 25, 12)

if (data_pComparacao > data_completa) {
    console.log("A data: " + data_pComparacao.toLocaleDateString() + " é mais recente que " + data_completa.toLocaleDateString())
}
else {
    console.log("A data: " + data_completa.toLocaleDateString() + " é mais recente que " + data_pComparacao.toLocaleDateString())
}