// 1️⃣ Array simples tipado

const numeros: number[] = [1, 2, 3, 4];

console.log(numeros);

//2️⃣ Array de objetos (mundo real)

interface Funcionario {
  nome: string;
  salario: number;
  ativo: boolean;
}

const funcionarios: Funcionario[] = [
  { nome: "Ana", salario: 3000, ativo: true },
  { nome: "João", salario: 1800, ativo: true },
  { nome: "Carlos", salario: 0, ativo: false },
];

//3️⃣ map — transformar dados

const nomes = funcionarios.map((f) => f.nome);

console.log("Nomes: ", nomes);

//Exemplo 2: reajuste de salário

const funcionariosReajuste = funcionarios.map((f) => ({
  ...f,
  salario: f.salario + 500,
}));

console.log(funcionariosReajuste);

//4️⃣ filter — selecionar dados

const ativos = funcionarios.filter((f) => f.ativo);

console.log("Ativos: ", ativos);

//Exemplo 2: salários maiores que 2000
const salarioAlto = funcionarios.filter((f) => f.salario >= 2000);

console.log("Salário >= 2000:", salarioAlto);

//5️⃣ find — encontrar UM item

const joao = funcionarios.find((f) => f.nome === "João");

console.log("João:", joao);

//🧩 6️⃣ Simulação de página dinâmica (mentalidade React)

const cards = funcionarios
  .filter((f) => f.ativo)
  .map((f) => `Funcionário: ${f.nome} - R$ ${f.salario}`);

console.log(cards);

//🧪 Exercício 1
// Cria um array com somente os funcionários inativos.

const inativos = funcionarios.filter((f) => !f.ativo);
console.log("Funcionários Inativos:", inativos);
