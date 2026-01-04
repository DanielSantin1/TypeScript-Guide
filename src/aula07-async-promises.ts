// src/aula07-async-promises.ts

function buscarNumero(): Promise<number> {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(10);
    }, 1000);
  });
}

async function executar(): Promise<void> {
  const valor = await buscarNumero();
  console.log(valor);
}

executar();

//4️⃣ Simulando uma API (mundo real)

interface Usuario {
  id: number;
  nome: string;
}

function buscarUsuarios(): Promise<Usuario[]> {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve([
        {
          id: 1,
          nome: "Ana",
          tipo: "ADMIN",
          podeExcluir: function (): boolean {
            throw new Error("Function not implemented.");
          },
        },
        {
          id: 2,
          nome: "João",
          tipo: "ADMIN",
          podeExcluir: function (): boolean {
            throw new Error("Function not implemented.");
          },
        },
      ]);
    }, 1000);
  });
}

//Consumindo a “API”
async function listarUsuarios(): Promise<void> {
  const usuarios = await buscarUsuarios();
  console.log("Usuários:", usuarios);
}

listarUsuarios();

//5️⃣ Tratando error (try / catch)
function buscarComError(): Promise<string> {
  return new Promise((_, reject) => {
    setTimeout(() => {
      reject("Error ao buscar dados");
    }, 1000);
  });
}
// Uso Correto do Try/Catch
async function executarComError(): Promise<void> {
  try {
    const resultado = await buscarComError();
    console.log(resultado);
  } catch (error) {
    console.error("Error capturado:", error);
  }
}

executarComError();

//Nunca confiar que a API sempre funcionará corretamente!

//6️⃣ Exemplo completo: Carregar funcionários e listar nomes
async function carregarFuncionarios(): Promise<void> {
  const funcionarios = await buscarUsuarios();

  const nomes = funcionarios.map((f) => f.nome);
  console.log(nomes);
}

carregarFuncionarios();

// 🧪 Exercício 1
// Cria uma função buscarProduto() que:
// retorna uma Promise
// resolve um objeto { nome, preco }

interface Produto {
  nome: string;
  preco: number;
}

function buscarProduto(): Promise<Produto> {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve({
        nome: "Teclado Mecânico",
        preco: 350,
      });
    }, 1000);
  });
}

//🧪 Exercício 2 — executarBusca() com async/await + try/catch

async function executarBusca(): Promise<void> {
  try {
    const produto = await buscarProduto();
    console.log("Produto encontrado:", produto);
  } catch (error) {
    console.error("Error ao buscar produto:", error);
  }
}

executarBusca();
