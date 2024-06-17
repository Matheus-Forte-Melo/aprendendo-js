/*
  Variáveis em JS

  var -
  let - 
  const - Constante, não muda o valor
*/ 

var Roberto_carlos = "Esse cara sou eu";
console.log(Roberto_carlos);

// Declarações
var a, b, c;
// Pode declarar varias variaveis dessa forma

a = 2;
b = 2;
c = a + b;

console.log(c);

// Undefined
// NaN -> Not a Number

var nome, sobreNome, idade;

nome = "Matheus"; sobreNome = "Forte de Melo";
nomeCompleto = nome + " " + sobreNome
idade = 40
informacoes = "Nome: " + nome + " | Sobrenome = " + sobreNome + " | Nome Completo: " + nomeCompleto + " | Idade: " + idade

console.log(informacoes)

document.getElementById("nome").innerHTML= "Nome = " + nomeCompleto

// Em js a concatenação é com +

// let não deixa redeclarar porém não é sensivel a redeclaração de escopo
var x = 50;
console.log("Primeira declaração var -> " + x);
var x = 40;
console.log("Redeclaração var -> " + x);

// Por exemplo, isso aqui da erro
console.log("=========================");
// let z = 40;
// console.log("Primeira declaração ->" + y)
// let z = 45;
// console.log("Redeclaração ->" + y)

// Outro exemplo

var x = 10;
console.log("Declaração var no escopo mundial -> " + x);

// Outro escopo
{
    var x = 2;
    console.log("Redeclaração var em outro escopo -> " + x);
}
// Redeclaramos a mesma, pois var é em escopo global


console.log("=========================")

var x = "Nada";

console.log("Valor da variável var criada -> " + x);

x = "Algo";

console.log("Reatribuição do valor da var -> " + x);

{
    x = "Algo só que mais privado, eu acho";
}

console.log("Reatribuição do valor da var de um escopo mais limitado -> " + x);    

console.log("=========================")

let yx = "Nothing";

console.log("Valor da variável let criada -> " + yx);

yx = "Something";

console.log("Reatribuição do valor da let -> " + yx);

{
    yx = "Something, but more private... i think";
}

console.log("Reatribuição do valor da let de um escopo mais limitado -> " + yx);   

console.log("=========================")

let yxz = 5;

console.log("Valor da variável let criada -> " + yxz);

//let yxz = 4;
//console.log("Reatribuição do valor da let -> " + yxz); ERRO

{
    let yxz = 3;
    console.log("Printando pós redeclaração de dentro do escopo -> " + yxz)
}

console.log("Printando pós redeclaração (que aconteceu dentro do escopo) de fora do escopo -> " + yxz);  