class PedidosService {
    constructor() {
        this.pedidos = [];
        this.ultimoId = 0;
    }

    criarPedido(usuarioId, itens) {
        if (!usuarioId || !itens || itens.length === 0) {
            console.log(`[PedidosService] Não foi possível criar o pedido. Dados inválidos.`);
            return null;
        }

        this.ultimoId++;
        const pedido = {
            id: this.ultimoId,
            usuarioId: usuarioId,
            itens: itens,
            total: 0,
            status: 'pendente'
        };

        this.pedidos.push(pedido);
        console.log(`[PedidosService] Pedido ${pedido.id} criado para o usuário ${usuarioId}.`);
        return pedido;
    }

    calcularTotal(pedido, catalogoProdutosService) {
        let total = 0;
        for (const item of pedido.itens) {
            const produto = catalogoProdutosService.getProduto(item.produtoId);
            if (produto) {
                total += produto.preco * item.quantidade;
            } else {
                console.log(`[PedidosService] Produto com ID ${item.produtoId} não encontrado no catálogo.`);
                return null;
            }
        }
        pedido.total = total;
        console.log(`[PedidosService] Total do pedido ${pedido.id} calculado: ${total}.`);
        return total;
    }

    atualizarStatus(pedidoId, status) {
        const pedido = this.pedidos.find(p => p.id === pedidoId);
        if (pedido) {
            pedido.status = status;
            console.log(`[PedidosService] Status do pedido ${pedido.id} atualizado para ${status}.`);
            return true;
        } else {
            console.log(`[PedidosService] Pedido com ID ${pedidoId} não encontrado.`);
            return false;
        }
    }

    getPedido(pedidoId) {
         const pedido = this.pedidos.find(p => p.id === pedidoId);
         if(pedido){
            console.log(`[PedidosService] Pedido ${pedidoId} encontrado.`);
            return pedido;
         } else {
            console.log(`[PedidosService] Pedido com ID ${pedidoId} não encontrado.`);
            return null;
         }
    }
}

module.exports = PedidosService;
