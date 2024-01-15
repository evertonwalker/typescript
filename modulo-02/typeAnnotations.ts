// --> Variáveis [ Type Annotations ]
let nome: string = "Everton walker";
console.log(nome);

// --> Arrays [ Type Annotations ]
let animais: string[] = ["Elefante", "gato", "cachorro"];
console.log(animais);

// --> Objetos [ Type Annotations ]
let carro: {
  nome: string;
  modelo: string;
  preco: number;
};
carro = { nome: "Carro bom", modelo: "Fusca", preco: 100000 };
console.log(carro);

// --> Functions [ Type Annotations ]
function multiplicarNumeros(num1: number, num2: number) {
  return num1 * num2;
}
console.log(multiplicarNumeros(5, 5));
