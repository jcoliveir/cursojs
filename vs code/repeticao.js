/**
 * for
 * while
 * do while - tem que ser executado pelo menos uma vez
 * 
 * FOR - Para
 * for (iniciador; condição; incrementação)
 * 
 * WHILE - Enquanto
 * while(condição)
 */


/**const tabuada = 5
console.log('tabuada do ${tabuada}');
for (let i = 0; i <= 10; i++) {
    console.log('${tabuada} x ${i} = ${tabuada * i}');
}

/**
 * Crie um laço de repetição, que irá executar de 1 até 10 exibir a soma dos seus valores entre 1 e 10
 *Resultado: 55
 * for (iniciador; condição; incrementação)
 */

 /**let soma = 0;
 for (let i = 1; i <= 10; i++) {
    soma = soma + i;
 }
 console.log("resultado:", soma);
 */

/**
 * While
 */
/**let i = 0;
while(i < 10) {
    console.log("Olá");
    console.log("Oi");

    i = i + 1; // i++
}
*/

/**i = 0
do{
    console.log("Tchau");
    console.log("Bye");

    i = i + 1; // i++
} while(i < 10)
*/

/**
 * solicite para usuário a senha de acesso ao sistema.
 * Enquanto a senha for diferente de senha123, peça a senha novamente.
 */

/**const readlineSync = require('readline-sync');
const senhacomparacao = "senha123";
let senha;

do{
    senha = readlineSync.question("Informe a senha");
} while(senha != senhacomparacao  )

console.log("Acesso Garantido.");
*/

/**Somar os números que o usuário digitar enquanto a soma for menor que 100 */
/**const readlineSync = require('readline-sync');
let soma = 0
let numero;

while (soma < 100) {
    numero = readlineSync.questionInt("Digite um numero:")
    soma = soma + numero;
    console.log("Soma:", soma);
}
*/

/**
 * Monte uma calculadora para realizar operações simples, sendo elas:
 * +      Soma
 * -      Subtração
 * *      Multiplicação
 * /      Divisão
 * S      Sair
 * 
 * Depois de selecionar a operação, solicite os numeros.
 */

/**const readline = require('readline-sync');
let opcao;
let numero1;
let numero2;
let resultado;
do{
    console.log("Escolha uma das opções abaixo:")
    console.log("+  Soma")
    console.log("-  Subtração")
    console.log("*  Multiplicação")
    console.log("/  Divisão")
    console.log("S  Sair")


    if (opcao == "+") {
        numero1 = readline.questionInt("Informe o primeiro numero:");
        numero2 = readline.questionInt("Informe o segundo numero:");
        resultado = numero1 + numero2;
        console.log('${numero1} + ${numero2} = ${resultado}\n\n')
    }else if (opcao == "-") {
        numero1 = readline.questionInt("Informe o primeiro numero:");
        numero2 = readline.questionInt("Informe o segundo numero:");
        resultado = numero1 + numero2;
        console.log('${numero1} - ${numero2} = ${resultado}\n\n')
    }else if (opcao == "*") {
        numero1 = readline.questionInt("Informe o primeiro numero:");
        numero2 = readline.questionInt("Informe o segundo numero:");
        resultado = numero1 + numero2;
        console.log('${numero1} * ${numero2} = ${resultado}\n\n')
    }else if (opcao == "/") {
        numero1 = readline.questionInt("Informe o primeiro numero:");
        numero2 = readline.questionInt("Informe o segundo numero:");
        resultado = numero1 + numero2;
        console.log('${numero1} / ${numero2} = ${resultado}\n\n')
    }
    
} while(opcao.toUpperCase != 'S')
*/