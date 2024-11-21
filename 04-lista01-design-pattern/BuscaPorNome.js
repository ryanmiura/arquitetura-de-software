// Estratégia de busca por nome (Strategy)
// O padrão Strategy permite definir uma família de algoritmos (estratégias de busca),
// encapsulá-los e torná-los intercambiáveis.
// Isso permite que o algoritmo de busca varie independentemente do contexto
// em que ele é utilizado (GerenciadorContatos).
class BuscaPorNome {
    // Busca contatos pelo nome
    buscar(contatos, nome) {
        return contatos.filter(contato => contato.nome.toLowerCase().includes(nome.toLowerCase()));
    }
}

module.exports = BuscaPorNome;
