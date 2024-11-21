// Estratégia de busca por nome (Strategy)
class BuscaPorNome {
    // Busca contatos pelo nome
    buscar(contatos, nome) {
        return contatos.filter(contato => contato.nome.toLowerCase().includes(nome.toLowerCase()));
    }
}

module.exports = BuscaPorNome;
