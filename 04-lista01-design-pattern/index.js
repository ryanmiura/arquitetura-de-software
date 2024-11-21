const readline = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout,
});

const Contato = require('./Contato');
const GerenciadorContatos = require('./GerenciadorContatos');
const BuscaPorNome = require('./BuscaPorNome');

const gerenciador = new GerenciadorContatos();
const buscaPorNome = new BuscaPorNome();

// Exibe o menu de opções
function exibirMenu() {
    console.log('\nGerenciador de Contatos');
    console.log('1. Adicionar contato');
    console.log('2. Remover contato');
    console.log('3. Listar contatos');
    console.log('4. Buscar contato por nome');
    console.log('5. Sair');
    console.log('\nEscolha uma opção:');
}

// Adiciona um novo contato
function adicionarContato() {
    readline.question('Nome: ', nome => {
        readline.question('Telefone: ', telefone => {
            readline.question('Email: ', email => {
                const contato = new Contato(nome, telefone, email);
                gerenciador.adicionar(contato);
                console.log('Contato adicionado com sucesso!');
                exibirMenu();
            });
        });
    });
}

// Remove um contato existente
function removerContato() {
    readline.question('Nome do contato a ser removido: ', nome => {
        const contato = gerenciador.listar().find(c => c.nome === nome);
        if (contato) {
            gerenciador.remover(contato);
            console.log('Contato removido com sucesso!');
        } else {
            console.log('Contato não encontrado.');
        }
        exibirMenu();
    });
}

// Lista todos os contatos
function listarContatos() {
    const contatos = gerenciador.listar();
    if (contatos.length === 0) {
        console.log('Nenhum contato encontrado.');
    } else {
        contatos.forEach(contato => {
            console.log(`Nome: ${contato.nome}, Telefone: ${contato.telefone}, Email: ${contato.email}`);
        });
    }
    exibirMenu();
}

// Busca contatos por nome
function buscarContatoPorNome() {
    readline.question('Nome a ser buscado: ', nome => {
        const contatosEncontrados = gerenciador.buscar(buscaPorNome, nome);
        if (contatosEncontrados.length === 0) {
            console.log('Nenhum contato encontrado.');
        } else {
            contatosEncontrados.forEach(contato => {
                console.log(`Nome: ${contato.nome}, Telefone: ${contato.telefone}, Email: ${contato.email}`);
            });
        }
        exibirMenu();
    });
}


readline.on('line', opcao => {
    switch (opcao) {
        case '1':
            adicionarContato();
            break;
        case '2':
            removerContato();
            break;
        case '3':
            listarContatos();
            break;
        case '4':
            buscarContatoPorNome();
            break;
        case '5':
            readline.close();
            break;
        default:
            console.log('Opção inválida.');
            exibirMenu();
    }
});

exibirMenu();
