const Contato = require('./Contato');

// Classe que gerencia uma lista de contatos (Composite)
// O padrão Composite é utilizado para tratar objetos individuais (contatos)
// e grupos de objetos (lista de contatos) de forma uniforme.
// Isso permite adicionar e remover contatos de forma flexível,
// sem precisar se preocupar com a estrutura da lista.
class GerenciadorContatos {
    constructor() {
        this.contatos = [];
    }

    // Adiciona um contato à lista
    adicionar(contato) {
        this.contatos.push(contato);
    }

    // Remove um contato da lista
    remover(contato) {
        this.contatos = this.contatos.filter(c => c !== contato);
    }

    // Lista todos os contatos
    listar() {
        return this.contatos;
    }

    // Busca contatos usando uma estratégia específica
    buscar(estrategia, nome) {
        return estrategia.buscar(this.contatos, nome);
    }
}

module.exports = GerenciadorContatos;
