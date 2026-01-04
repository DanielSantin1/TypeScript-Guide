// AULA 05 — CLASSES
// Classes são usadas para representar entidades com dados + comportamento

class Funcionario {
  nome: string;
  salario: number;
  ativo: boolean;

  constructor(nome: string, salario: number, ativo: boolean) {
    this.nome = nome;
    this.salario = salario;
    this.ativo = ativo;
  }

  avaliarSalario(): string {
    if (!this.ativo) {
      return "Funcionário inativo";
    }

    if (this.salario < 2000) {
      return "Salário baixo";
    }

    return "Salário ok";
  }

  aplicarAumento(percentual: number): number {
    return this.salario + (this.salario * percentual) / 100;
  }
}

// Criando objetos a partir da classe
const funcionario1 = new Funcionario("Ana", 3000, true);
const funcionario2 = new Funcionario("João", 1800, true);
const funcionario3 = new Funcionario("Carlos", 0, false);

console.log(funcionario1.avaliarSalario());
console.log(funcionario2.avaliarSalario());
console.log(funcionario3.avaliarSalario());

console.log("Novo salário Ana:", funcionario1.aplicarAumento(10));
