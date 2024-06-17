const lista = ["Matheus", "Forte de Melo", 18];

// Podemos fazer listas constantes, mas ainda podemos alterar seus conteudos! mas não seu tipo

// lista = 10 -> Erro
lista[2] = 10; // Reatribuindo um valor -> Permitido

console.log(lista);

// Podemos criar vãos na nossa lista atribuindo novos valores em indíces distantes. Por exemplo, na nossa lista, temos os indices 0, 1 e 2 ocupados.

lista[6] = "Solteiro";

console.log(lista)

// Output -> ['Matheus', 'Forte de Melo', 10, empty × 3, 'Solteiro']
// Acontece pois temos 3 espaços vazios entre o índice 2 e o índice 6


const tamLista = lista.length; // Método built-in para pegar o tamanho da lista

lista.push("CPF"); 
lista[tamLista] = "RG"

console.log(lista)

// Existem essas duas formas de colocar um valor no último índice da lista

// Um console.log dessa lista exibiria: ['Matheus', 'Forte de Melo', 10, empty × 3, 'Solteiro', 'RG'], Porém, e se quissésimos formatar de uma forma melhor? temos um método igual ao do python aqui.

console.log(lista.join(", "))

// Método para saber se uma array é uma array:

console.log(Array.isArray(lista))



// ==================== Testes Avulsos Join ==========================

const info = document.getElementById('infos'); 

info.innerHTML = lista; // Quando fazemos isso ele já dá um join automático,mas podemos reformatar do modo que quisermos
info.innerHTML = lista.join("<br>");
 
// Método igual o python para remover ultimo valor

lista.pop();
console.log(lista);

// Método para remover primeiro valor, redefinindo os demais índices

lista.shift();
console.log(lista);

// Método para adicionar um novo valor no começo da lista, redefindo os demais índices

lista.unshift("Nome removido!");
console.log(lista);

// Método para remover QUALQUER valor, conforme o índice, sem redefinir os demais indíces, deixado um espaço em branco

delete lista[1];
console.log(lista)

lista[1] = "Matheus" // Atribuindo o mesmo valor deletado pq sim

// Método para adicionar novos valores redefinindo os índices na frente deles (se não sobrescrevidos)

lista.splice(2, 0, "Forte de Melo", false) 
// A partir do índice 2, adicionar campos "Forte de Melo" e false, sem sobrescrever nenhum elemento -> 0
console.log(lista)

// Concatenação de Listas

const frutas = ["Maça", "Banana", "Abacate"];
const legumes = ["Brócolis", "Alface", "Alho-Poró"];
const proteinas = ["Queijo Parmesão", "Peito de Frango", "Bisteca"];

const lista_compras = frutas.concat(legumes, proteinas); // Quantas listas quisermos

console.log(lista_compras);

// Ordem alfabética

lista_compras_sorted = lista_compras.sort()
console.log(lista_compras_sorted)
console.log(lista_compras_sorted.reverse()) // Bota a lista ao contrário

// Para dar sort em números, precisamos fazer uma gambiarra

const nums = [6, 126, 2, 16, -12, 0];

// nums.sort() -> Isso não funciona do jeito que queremos

console.log(nums.sort((a, b) => a - b)); // Crescente
// Para fazer decrescente é só fazer o reverse

function getMax(array){
    return Math.max.apply(null, array); // Chama Math, pega os números maximos
};

    function getMin(array){
        return Math.min.apply(null, array); // Não esquecer do null
    };

console.log("Maior número da lista 'nums': " + getMax(nums)) ;
console.log("Menor número da lista 'nums': " + getMin(nums));

function filtragemNums(value, index, array) { // Alterar filtragem conforme comparação necessária
    return value < 10;
};

console.log(nums.filter(filtragemNums))

console.log(lista.slice(0,4)) // Mostrar valores entre os índices 0 e 4 
console.log(lista.slice(4)) // Mostrar valores a partir do índice 4 até o final da array.

console.log(proteinas.slice(0, 2));