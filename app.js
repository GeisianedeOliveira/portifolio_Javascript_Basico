//Criando um alerta:
alert("Obrigada por vir me ver! :)")

//Caixa de diálogo com entrada de texto:
prompt("Qual o seu nome?")

//Concatenando e retornando strings:
let turno = "Pela manhã";
let ação = "quando você acorda";
let parteDeVoce = "o teu sorriso";
let velocidade = "tão ligeiro";
let objetivo = "vem me desperta.";
let adjetivo = "Vagarosa, formosa menina";
let interprete = "(Liniker)."

console.log(turno + " " + ação + " " + parteDeVoce + " " + velocidade + " " + objetivo + " " + adjetivo + " " + interprete);

//Comparadação de dados:

    let idade = "8";
    let idade2 = 8;

    //Resultado será TRUE porque 2 sinais de igualdade compara as informações das variáveis ignorando os tipos (string/número).
    console.log(idade == idade2)

    let idade_1 = "8";
    let idade2_1 = 8;

    //Resultado será FALSE porque 3 sinais de igualdade analisa também os tipos das variáveis e nessa caso uma é string e a outra é número.
    console.log(idade_1 === idade2_1)

//

// length : Retorna o número de caracteres do elemento:
let iniciativa = "{Reprograma}"
console.log( "{Reprograma} tem: " + iniciativa.length + " caracteres")

//Retornar 3º caractere do elemento:
let país = "Brasil"
console.log("Terceiro caractere da palavra Brasil: " + país[3])

//Retornar quantidade de elemento da array:
let estados = ['Pernambuco', 'Rio de Janeiro', 'São Paulo'];
console.log("O array 'estados' tem : " + estados.length  + " elementos.")

//Retornar 2º de elemento da array:
console.log("O segundo elemento array 'estados' é : " + estados[1])


//Concatenando e retornando variáveis:
let pratoDoDia = "Fricassê";
let precoDoPratoDoDia = 24.90;
let frete = 5.00;
let nomeDoCliente = "Geisiane";

console.log("O total do pedido de " + nomeDoCliente + " é de " + (precoDoPratoDoDia + frete))

//Condicionais

let age = prompt("Quantos anos você tem?")

if(age > 18) {
    alert("Acesso autorizado!")
} else {
    //Se for menor idade o usuário será direcionar para 
    window.location.href = "https://br.peppapig.com/"
}
