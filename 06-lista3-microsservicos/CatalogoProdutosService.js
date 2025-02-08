class CatalogoProdutosService {
    constructor() {
        this.produtos = [
            { id: 1, nome: 'Produto A', preco: 20, estoque: 10 },
            { id: 2, nome: 'Produto B', preco: 30, estoque: 5 },
            { id: 3, nome: 'Produto C', preco: 50, estoque: 2 }
        ];
    }

    getProduto(id) {
        const produto = this.produtos.find(p => p.id === id);
        if (produto) {
            console.log(`[CatalogoProdutosService] Produto ${produto.nome} encontrado.`);
            return produto;
        } else {
            console.log(`[CatalogoProdutosService] Produto com ID ${id} não encontrado.`);
            return null;
        }
    }

    verificarEstoque(id, quantidade) {
        const produto = this.getProduto(id);
        if (!produto) {
            return false;
        }
        if (produto.estoque >= quantidade) {
            console.log(`[CatalogoProdutosService] Estoque disponível para o produto ${produto.nome}.`);
            return true;
        } else {
            console.log(`[CatalogoProdutosService] Estoque insuficiente para o produto ${produto.nome}.`);
            return false;
        }
    }

    baixarEstoque(id, quantidade) {
        const produto = this.getProduto(id);
        if (produto && this.verificarEstoque(id, quantidade)) {
            produto.estoque -= quantidade;
            console.log(`[CatalogoProdutosService] Estoque do produto ${produto.nome} atualizado. Novo estoque: ${produto.estoque}`);
            return true;
        } else {
            console.log(`[CatalogoProdutosService] Não foi possível baixar o estoque do produto ${produto.nome}.`);
            return false;
        }
    }
}

module.exports = CatalogoProdutosService;
