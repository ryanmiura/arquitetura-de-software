class Aluno {
    constructor(nome, login, RA) {
        this.nome = nome;
        this.login = login;
        this.RA = RA;
    }
}

class Turma {
    constructor(codigo, nota) {
        this.codigo = codigo;
        this.nota = nota;
    }

    aprovado() {
        if(this.nota >= 7) {
            return " ✅ Aprovado";
        }else{
            return " ❌ Reprovado";
        }
        
    }
}

class TurmaPresencial extends Turma {
    constructor(codigo, nota, frequencia) {
        super(codigo, nota);
        this.frequencia = frequencia;
    }

    aprovado() {
        if (this.nota >= 7 && this.frequencia >= 75){
            return " ✅ Aprovado";
        } else{
            return " ❌ Reprovado";
        }
    }
}

const aluno1 = new Aluno('João', 'joao123', '123456');
const turma1 = new Turma('ES27B', 8);
const turmaPresencial1 = new TurmaPresencial('ES46A', 8, 80);

const aluno2 = new Aluno('Paulo', 'paulo123', '123456');
const turma2 = new Turma('ES27B', 5);
const turmaPresencial2 = new TurmaPresencial('ES46A', 8, 67);


console.log(`Aluno: ${aluno1.nome}`);
console.log(`Turma: ${turma1.codigo} - Situação: ${turma1.aprovado()}`);
console.log(`Turma Presencial: ${turmaPresencial1.codigo} - Situação: ${turmaPresencial1.aprovado()}`);

console.log(`Aluno: ${aluno2.nome}`);
console.log(`Turma: ${turma2.codigo} - Situação: ${turma2.aprovado()}`);
console.log(`Turma Presencial: ${turmaPresencial2.codigo} - Situação: ${turmaPresencial2.aprovado()}`);