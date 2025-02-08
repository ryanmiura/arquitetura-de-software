const AutenticacaoService = require('./AutenticacaoService');
const CatalogoProdutosService = require('./CatalogoProdutosService');
const PedidosService = require('./PedidosService');
const PagamentosService = require('./PagamentosService');

// Inicialização dos serviços
const autenticacaoService = new AutenticacaoService();
const catalogoProdutosService = new CatalogoProdutosService();
const pedidosService = new PedidosService();
const pagamentosService = new PagamentosService();

// Simulação do fluxo
const usuarioId = autenticacaoService.login('usuario1', 'senha1');

if (usuarioId) {
    // Simulação da criação de um pedido
    const itensDoPedido = [
        { produtoId: 1, quantidade: 2 },
        { produtoId: 2, quantidade: 1 }
    ];

    const pedido = pedidosService.criarPedido(usuarioId, itensDoPedido);

    if (pedido) {
        // Simulação do cálculo do total do pedido
        pedidosService.calcularTotal(pedido, catalogoProdutosService);

        // Simulação do processamento do pagamento
        pagamentosService.processarPagamento(pedido, pedidosService);

        const pedidoFinal = pedidosService.getPedido(pedido.id);

        if(pedidoFinal){
            console.log(`[index] Status final do pedido ${pedidoFinal.id}: ${pedidoFinal.status}`);
        }
    }
}
