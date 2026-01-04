// AULA 06 — ENUMS E UNION TYPES
// Usados para controlar valores possíveis e evitar erros

// UNION TYPE — conjunto limitado de valores
type StatusUsuario = "ATIVO" | "INATIVO" | "BLOQUEADO";

function podeAcessarSistema(status: StatusUsuario): boolean {
  return status === "ATIVO";
}

console.log(podeAcessarSistema("ATIVO"));
console.log(podeAcessarSistema("BLOQUEADO"));

// ENUM — usado para estados mais estruturados
enum StatusPedido {
  PENDENTE = "pendente",
  PAGO = "pago",
  CANCELADO = "cancelado",
}

function mensagemStatusPedido(status: StatusPedido): string {
  switch (status) {
    case StatusPedido.PENDENTE:
      return "Pedido aguardando pagamento";
    case StatusPedido.PAGO:
      return "Pedido pago com sucesso";
    case StatusPedido.CANCELADO:
      return "Pedido cancelado";
  }
}

console.log(mensagemStatusPedido(StatusPedido.PENDENTE));
console.log(mensagemStatusPedido(StatusPedido.PAGO));

// UNION + CLASSE (exemplo real)
type TipoUsuario = "ADMIN" | "CLIENTE";

class Usuario {
  constructor(public nome: string, public tipo: TipoUsuario) {}

  podeExcluir(): boolean {
    return this.tipo === "ADMIN";
  }
}

const admin = new Usuario("Daniel", "ADMIN");
const cliente = new Usuario("João", "CLIENTE");

console.log(admin.podeExcluir());
console.log(cliente.podeExcluir());
