
//1️⃣ Objeto simples (sem interface)
const usuario = {
  nome: "Daniel",
  idade: 30,
  ativo: true
};

console.log(usuario.nome);


//2️⃣ Interface — o contrato do objeto
interface Usuario {
  nome: string;
  idade: number;
  ativo: boolean;
}

//3️⃣ Objeto tipado com interface
const usuarioTipado: Usuario = {
  nome: "Daniel",
  idade: 30,
  ativo: true
};

console.log(usuarioTipado);

//4️⃣ Função recebendo objeto tipado
function statusUsuario(usuario: Usuario): string {
  if (usuario.ativo) {
    return "Usuário ativo";
  }
  return "Usuário inativo";
}

console.log(statusUsuario(usuarioTipado));


//5️⃣ Interface com mais contexto (vida real)

//Interface
interface Funcionario {
  nome: string;
  salario: number;
  ativo: boolean;
}

//Objeto
const funcionario: Funcionario = {
  nome: "Carlos",
  salario: 2500,
  ativo: true
};

//Função
function avaliarFuncionario(func: Funcionario): string {
  if (!func.ativo) {
    return "Funcionário inativo";
  }

  if (func.salario < 2000) {
    return "Salário baixo";
  }

  return "Salário ok";
}

console.log(avaliarFuncionario(funcionario));



// 🧪 Exercício 1
// Cria uma interface Produto com:
// nome
// preco
// emEstoque
// Depois cria um objeto desse tipo.

interface Produto{
    nome: string;
    preco: number;
    emEstoque: boolean;
}

const Produto2: Produto = {
    nome: "Notebook",
    preco: 3500,
    emEstoque: true
};
console.log(Produto2);

// 🧪 Exercício 2
// Cria uma função que:
// recebe um Produto
// retorna "Disponível" ou "Indisponível"

function ProdutoDisponivel(produto: boolean) {
    if (produto === false) {
        console.log('Produto Indisponível')
    } else {
        console.log('Produto Disponível')
    }
}

ProdutoDisponivel(Produto2.emEstoque);