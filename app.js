alert("Obrigada por vir me ver! :)")

let turno = "Pela manhã";
let ação = "quando você acorda";
let parteDeVoce = "o teu sorriso";
let velocidade = "tão ligeiro";
let objetivo = "vem me desperta.";
let adjetivo = "Vagarosa, formosa menina";
let interprete = "(Liniker)."

console.log(turno + " " + ação + " " + parteDeVoce + " " + velocidade + " " + objetivo + " " + adjetivo + " " + interprete);

let idade = "8";
let idade2 = 8;

//Resultado será TRUE porque 2 sinais de igualdade compara asinformações das variáveis ignorando os tipos (string/número).
console.log(idade == idade2)

let idade_1 = "8";
let idade2_1 = 8;

//Resultado será FALSE porque 3 sinais de igualdade analisa também os tipos das variáveis e nessa caso uma é string e a outra é número.
console.log(idade_1 === idade2_1)

let pratoDoDia = "Fricassê";
let precoDoPratoDoDia = 24.90;
let frete = 5.00;
let nomeDoCliente = "Geisiane";

console.log("O total do pedido de " + nomeDoCliente + " é de " + (precoDoPratoDoDia + frete))