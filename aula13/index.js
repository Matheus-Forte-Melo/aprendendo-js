// forma tracional

for (let i=0; i < 1001; i ++) {
    document.body.append(i + ", ")

    if (i == 1000) {
        document.body.append(i + ".")
    }

}

const ano_min = 1900;

for (let ano = 2024; ano > ano_min; ano --) {
    console.log(ano)
}

const lista_compras = ["Tomate", "Alface", "Ovos", "Arroz", "Bife", "Filé", "Atum", "Farinha", "Açucar", "Sal Grosso"];

for (let i = 0; i < lista_compras.length; i++) {
    console.log(lista_compras[i])
}

console.log("========================")

const lista_carros = ["Gol", "Celta", "Range Rover", "Strada"];

for (const carro of lista_carros) {
    console.log(carro)
}


console.log("========================")

const busca = "Filé";

for (let i = 0; i < lista_compras.length; i++) {
    if (lista_compras[i] == busca){
        console.log("O produto '" + busca.toLowerCase() + "' está localizado no índice " + i + " da lista.")
        break;
    }
}

console.log("========== Forma Alternativa ==========")

for (const produto of lista_compras) {
    
    if (produto == busca){
        console.log("O produto '" + busca.toLowerCase() + "' está localizado no índice " + lista_compras.indexOf(produto) + " da lista.")
        break;
    }
};

// For in e For Of são diferentes, um itera sobre os valores e o outro sobre os índices