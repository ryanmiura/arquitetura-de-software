class AutenticacaoService {
    constructor() {
        this.usuarios = [
            { id: 1, nome: 'usuario1', senha: 'senha1' },
            { id: 2, nome: 'usuario2', senha: 'senha2' }
        ];
    }

    login(nome, senha) {
        const usuario = this.usuarios.find(u => u.nome === nome && u.senha === senha);
        if (usuario) {
            console.log(`[AutenticacaoService] Usuário ${nome} autenticado.`);
            return usuario.id;
        } else {
            console.log(`[AutenticacaoService] Falha na autenticação para o usuário ${nome}.`);
            return null;
        }
    }
}

module.exports = AutenticacaoService;
