// Funções

// function funcao(parametros){
//     return alguma_coisa   
// }

// Podemos invocar uma função no HTML usando os parâmetros de inputs, como onclick

function outputInnerHTML(valor, id_html){
    document.getElementById(id_html).innerHTML = valor
}

function rickRoll(){
    document.getElementById("p1").innerHTML = "Never gonna give you up, never gonna let you down, never gonna run around and desert you!"
}

outputInnerHTML("Olá a todos! Estou sendo passado por via de uma função bem legal", "p1")

function regraDeTresSimples(valor1, valor2, valor3, diretamenteProporcional){
    /*
    
        Em uma regra de três, usamos 3 valores para descobrir UM, o valor X, a função funciona dessa forma.

        valor1 - valor2
        valor3 - valorX

    */
    let valorX;

    if (diretamenteProporcional == true){
        valorX = (valor2 * valor3) / valor1;
        
    }
    else {
        valorX = (valor1 * valor2) / valor3;
    };

    return valorX;
}

// Inversamente proporcional
console.log(regraDeTresSimples(12, 6, 24, false));

/* 

Digamos que 12 pedreiros constroem uma casa em 6 meses, se tiverem 24 pedreiros, construiriam em x meses. que é o valor retornado

Essas grandezas são inversamente proporcionais, então devemos colocar False no parâmetro de diretamente proporicional para que o cálculo seja concluido corretamente, basta a você analisar isso


*/

// Diretamente proporcional 
console.log(regraDeTresSimples(3.79, 1, 17.05, true).toFixed(2));

// Se um kilo 3.79 reais compra 1 kg de kiwis, quantos kilos de kiwis podemos comprar com 17.32 reais