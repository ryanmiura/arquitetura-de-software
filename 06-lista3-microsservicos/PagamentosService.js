class PagamentosService {
    constructor() {
        this.saldo = 100; // Saldo inicial para simulação
    }

    processarPagamento(pedido, pedidosService) {
        if (pedido.total > this.saldo) {
            console.log(`[PagamentosService] Saldo insuficiente para o pagamento do pedido ${pedido.id}.`);
            pedidosService.atualizarStatus(pedido.id, 'pendente');
            return false;
        } else {
            this.saldo -= pedido.total;
            console.log(`[PagamentosService] Pagamento do pedido ${pedido.id} processado com sucesso. Saldo restante: ${this.saldo}`);
            pedidosService.atualizarStatus(pedido.id, 'pago');
            return true;
        }
    }
}

module.exports = PagamentosService;
