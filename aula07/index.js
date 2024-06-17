
// Operadores aritiméticos

let resultadoSoma, resultadoSubtracao, resultadoMultiplicacao, resultadoDivisao;

resultadoSoma = 5 + 15;
resultadoSubtracao = 10 - 15;
resultadoMultiplicacao = 10 * 5;
resultadoDivisao = 10 / 2;

document.getElementById('soma').innerHTML = "5 + 15 = " + resultadoSoma;
document.getElementById('subtracao').innerHTML = "10 - 15 = " + resultadoSubtracao;
document.getElementById('multiplicacao').innerHTML =  "10 * 5 = " + resultadoMultiplicacao;
document.getElementById('divisao').innerHTML = "10 / 2 = " + resultadoDivisao;

let contadorInc = 5, contadorDec = 5;

// Podemos incrementar e decrementar de duas formas (Três, no caso)

contadorInc += 1; // contadorInc = contadorInc + 1
contadorDec -=1; // contadorDec = contadorDec - 1

// valor2 += valor2 | valor = valor1 + valor2 
// /= e *= | Também existem

console.log("Valor original é 5, pós incremento usando '+= 1': " + contadorInc);
console.log("Valor original é 5, pós decremento usando '-= 1': " + contadorDec);

contadorInc ++;
contadorDec --;

console.log("Valor original é 4, pós incremento usando '++': " + contadorInc);
console.log("Valor original é 6, pós decremento usando '--': " + contadorDec);

let a, b, c, d, e, f;

a = 10;
b = 2;
c = 0;
d = -2;
e = "10";
f = "0";

document.getElementById('igual').innerHTML = "10 é igual a 10 -> " + (a == a);
document.getElementById('igualTipo').innerHTML = "'10' é igual a 10 -> " + (a === f);
document.getElementById('diferente').innerHTML = "0 é diferente de -2 -> " + (c != d);
document.getElementById('diferenteTipo').innerHTML = "'0' é diferente de 0 -> " + (c !== f);
document.getElementById('maiorQue').innerHTML = "0 é maior que -2 -> " + (c > d);
document.getElementById('menorQue').innerHTML = "0 é menor que -2 -> " + (c < d);   
document.getElementById('maiorOuIgualA').innerHTML = "10 é menor ou igual a 10 -> " + (a >= a);
document.getElementById('menorOuIgualA').innerHTML = "2 é menor ou igual a -2 -> " + (b <= d);

// Condicão ternaria variavel = (condicao) ? valor se verdade : valor se falso;

let banana;
banana = 9;

console.log((banana > 10) ? "Eita porran que bananão" : "Pequeno para caralho")

let altura = 186;

console.log((altura >= 170 && altura <= 190))



// Operadores lógicos || e && // OR e AND
// !(condicao) -> negação, inverte a condição

