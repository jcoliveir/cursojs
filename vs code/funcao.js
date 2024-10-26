//Função Padrâo ou Função Nominal

//function nomedaFuncao(){
//    console.log("Essa é uma função");
//}

//nomedaFuncao();

//function funcaoComParametro(nome, sobrenome) {
//    console.log("texto armazendo: ", nome);
//   console.log("texto sobrenome: ", sobrenome);
//}

//funcaoComParametro(5481, "Silva");


//function somaDoisNumeros(numero1, numero2) {
    //const resultado = numero1 + numero2;
    //return resultado;
//}

//const resultado = somaDoisNumeros(10, 15);
//console.log(resultado);
//console.log(somaDoisNumeros(17, 38));


//Função Atribuída - Expressão de Função
//const somaValores = function(n1, n2) {
 //   return n1 + n2;
//}
//console.log(somaValores(10, 8));

//function chamaOutraFuncao(fn) {
    //console.log("Irei invoncar a proxima função:");
    //fn();
//}

//const dizerOlaMundo = function() {
    //console.log("Olá Mundo");
//}

// Função com callback
// chamaOutraFuncao(dizerOláMundo);

// // Função Anônima
//chamaOutraFuncao(function() {
//    console.log("Essa função nunca foi atribuída para uma variável")
//});

// Função Flecha - Arrow Function
// Arrow Function de uma linha, sem parametro
//const arrowFn = () => console.log("OI");
// Arrow Function de uma linha, com 1 parametro
//const chamarNome = (nome) => console.log("Nome", nome);
//const chamaNome = nome => console.log("Nome", nome);

// Arrow Function de uma linha, com mais de 1 parametro
//const soma = (n1, n2) => n1+n2;
/**
 * function soma(n1, n2) {
 * return n1 + n2;
 * }
 */
 
//Arrow function de multiplas linha
//const funcaoMultipla = () => {
    //console.log(10);
    //return 1;
//}

//function soma(n1, n2) {
 //   return n1 + n2;
//}

//function subtracao(n1, n2) {
//    return n1 - n2;
//}

// EcmaSript 5 - ES6+ 2017
//const multiplicação = (n1, n2) => n1 * n2;

//soma(3, 6);
//soma(6, 1);
//soma(7, 1);

/**
 * Crie uma função chamada maiorNumero receba como parametro 2 numeros e
 * diga qual deles é o maior número
 */


//function maiorNumero(n1, n2) {
//    if (n1 > n2) {
//        console.log(`O ${n1} é maior que ${n2}`);
//    } else if (n1 < n2) {
//        console.log(`O ${n2} é maior que ${n1}`);
//    } else {
//        console.log(`O ${n1} é igual ao ${n2}`);
//    }
//}

//maiorNumero(4, 4);


/**
 * Crie uma função chamada de verificarNumeroPrimo.
 * passe um numero como parametro e diga se ele é primo ou não
 * 
 * Dica: utilizar break se necessario
 */
//let n = 0

//function verificarNumeroPrimo (numero) {
//    for (let i = 2; i < numero; i++){
//        if(numero % i ==0) {
//            console.log(`${numero} não é primo`);
//            break;
//        }
//
//    }

//}


//function verificarNumeroPrimo (numero) {
//    let ePrimo = true;
//    for (let i = 2; i < numero; i++){
//        if(numero % i ==0) {
//            ePrimo = false;
//            break;
//        }

//    }
//    if (ePrimo == true) {
//        console.log(`${numero} é primo`);
//    } else {
//        console.log(`${numero} não é primo`);
//    }

//}

//verificarNumeroPrimoSemRetorno(11)


/**
 * Criar 2 funções.
 * Uma função para transformar um numero no seu cubo.
 * Outra função para tranformar o seu numero no quadrado.
 * 
 * Rode uma lista de 1 até 10.
 * Se o numero for par, transforme no cubo.
 * Se for impar, transforme no quadrado.
 */

const cubo = (numero) => numero ** 3
const quadrado = (numero) => numero ** 2

for(let i = 1; i <=10; i++){
    if (i % 2 == 0) {
        console.log(cubo(i));
    }  else {
        console.log(quadrado(i));
    }
}