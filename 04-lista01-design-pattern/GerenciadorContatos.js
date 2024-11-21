const Contato = require('./Contato');

// Classe que gerencia uma lista de contatos (Composite)
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
