let inc_segundos = 1;
let segundos = 0;
let minutos = 0;
let horas = 0;

let intervalo;
let intervalo_comecou = false;
let cronometroHTML = document.getElementById('cronometro');



function incrementarTempo() {
    
    segundos = segundos + inc_segundos;
    
    if (segundos >= 60) {
        segundos = 0;
        minutos ++
    }

    if (minutos >= 60) {
        minutos = 0;
        segundos = 0;
        horas ++
    }
    
    if (minutos == 0 && horas == 0) {
        console.log(horas, minutos, segundos)
        cronometroHTML.innerHTML = segundos + "s";
    } else if (horas == 0) {
        cronometroHTML.innerHTML = minutos + "m " + segundos + "s";
    } else {
        cronometroHTML.innerHTML = horas + "h " + minutos + "m " + segundos + "s";
    };
    
};

function comecarContagem() {

    if (!intervalo_comecou){
        console.log("ativou ")
        intervalo_comecou = true;
        intervalo = setInterval(incrementarTempo, 200);
    };
}

function pararContagem() {
    clearInterval(intervalo)
    intervalo_comecou = false
}


function enviarValorCont() {
    let valor = document.getElementById('inputCont').value;
    

    if (Number(valor) <= 0) {
        inc_segundos = 1
        document.getElementById('feedback').innerHTML = "Porfavor insira um número válido"
    } else {
        inc_segundos = Number(valor)
        document.getElementById('feedback').innerHTML = "O contador incrementará por " + inc_segundos
    };
    

    

    console.log("setou valor")
}   

// SetTimeout é tipo um freeze, executa uma função só depois dos segundos determinados
// SetInterval seta um intervalo que uma funcao ficará se repetindo