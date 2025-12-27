
//1️⃣ Função básica (parâmetros + retorno)
function soma(a: number, b: number): number {
  return a + b;
}

const resultadoSoma = soma(10, 5);
console.log("Soma:", resultadoSoma);

//2️⃣ Função sem retorno útil (void)
function mostrarMensagem(msg: string): void {
  console.log("Mensagem:", msg);
}

mostrarMensagem("Olá, TypeScript!");


//3️⃣ return vs console.log (regra de ouro)

//❌ Errado (mistura responsabilidades):
function calcularDobro1(n: number) {
  console.log(n * 2);
}
//✅ Certo:
function calcularDobro2(n: number): number {
  return n * 2;
}

console.log("Dobro:", calcularDobro2(4));


//4️⃣ Arrow Function (=>) — forma moderna
const calcularTriplo = (n: number): number => {
  return n * 3;
};

console.log("Triplo:", calcularTriplo(3));


//Forma curta (uma linha):
const calcularQuadruplo = (n: number): number => n * 4;


//5️⃣ Função com regra de negócio simples

function avaliarNota(nota: number): string {
  if (nota >= 7) {
    return "Aprovado";
  }
  return "Reprovado";
}

console.log(avaliarNota(8));
console.log(avaliarNota(5));


//Exercício: Função para calcular IMC (Índice de Massa Corporal)
function calcularIMC(peso: number, altura: number): number {
  return peso / (altura * altura);
}
const imc = calcularIMC(70, 1.75);
console.log("IMC:", imc.toFixed(2));

//Exercício: Função para converter Celsius em Fahrenheit
function celsiusParaFahrenheit(celsius: number): number {
    return (celsius * 9) / 5 + 32;
}

const fahrenheit = celsiusParaFahrenheit(25);
console.log("Fahrenheit:", fahrenheit.toFixed(2));

//Exercício: Função para verificar se um número é par ou ímpar
function ParImpar(numero:number): string {
    if(numero % 2 === 0){
        return "Par";
    }else{
        return "Ímpar";
    }   
}

console.log(ParImpar(10));
console.log(ParImpar(7));