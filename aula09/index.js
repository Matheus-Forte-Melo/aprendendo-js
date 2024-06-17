// pratica comum é definir objetos como const

const pessoa = { // Objeto Literal (Não faz parte de classe)
    nome: "Matheus",
    sobrenome: "Forte de Melo",
    nascimento: "15/02/2006",
    
    falar: function (){ // Podemos criar uma método para esse objeto
        alert(this.nome + " falou 'Olá!'") // this invez de SELF, para referenciar o proprio objeto
    },

    apresentarSe: function(){
        return "Olá! me chamo " + this.nome + " " + this.sobrenome + ". Fui nascido em " + this.nascimento + "."; 
    }

};



console.log(pessoa)
console.log(pessoa.nome)
console.log(pessoa.sobrenome)
console.log(pessoa.nascimento)

// pessoa.nome = "Rodrigo" Alteração de propriedade
// pessoa.idade = "18" Adicionando nova propriedade

// Podemos alterar os valores dentro de const objetos e até adicionar outros, escopo de bloco
// mas essa var não pode mudar seu tipo (virar um interger, por exemplo) ou
console.log(pessoa.apresentarSe())
pessoa.falar()