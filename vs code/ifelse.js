//const idade = 17

//if (idade >= 18) {
    //console.log("Você é um adulto.");
    //console.log("Seja bem-vindo a vida de pagar boletos")
//} else {
    //console.log("Você ainda não é adulto.");
//}

//Média dos alunos

//const readlineSync = require('readline-sync');
//const n1 = readlineSync.questionFloat('qual a primeira nota do aluno?');
//const n2 = readlineSync.questionFloat('qual a segunda nota do aluno?');
//const n3 = readlineSync.questionFloat('qual a terceira nota do aluno?');
//const n4 = readlineSync.questionFloat('qual a quarta nota do aluno?');

//const media = (n1+n2+n3+n4)/4;
//console.log("media", media.toFixed(2))

//if (media >= 6) {
    //console.log("Aprovado!.");
    //} else {
    //console.log("Reprovado.");
//}


/**Solicite o valor total da venda realizada por um funcionario.
*Aplique um desconto de 10% se a venda for menos de 3000
*ou aplique um desconto de 8%
*Exiba o novo valor a ser pago
*/


//const readlineSync = require('readline-sync');
//const precototal = readlineSync.questionFloat('qual o preco do produto?');
//let desconto = 0
//if (precototal < 3000) {
    //desconto = 10 / 100;
    //} else {
    //desconto = 8 / 100;
//}
//const valordedesconto = precototal * desconto;
//const preço = precototal - valordedesconto;

//console.log(`O Preço total à pagar é de: R$${preço}`)


//let valor = 100;
//const tipoUsuario = "VIP";

/**
 * VIP        +15
 * Especial   +10
 * Atenção    +5
 * Normal     +0
 */

//if(tipoUsuario == "VIP") {
    //valor = valor +15;
//} else if (tipoUsuario == "Especial") {
    //valor = valor + 10;
//} else if (tipoUsuario == "Atenção") {
    //valor = valor + 5
//} else {

//}

//console.log("Valor Final", valor)





/**Solicite o valor total da venda realizada por um funcionario.
*Até 5000, desconto de 3%.
*Até 10000, desconto de 5%.
*Até 15000, desconto de 7%.
*Acima, desconto de 9%.
*Exiba o novo valor a ser pago
*/


//const readlineSync = require('readline-sync');
//const precototal = readlineSync.questionFloat('qual o preco do produto?');
//let desconto = 0
//if (precototal < 5000) {
    //desconto = 3 / 100;
    //} else if (precototal < 10000) {
    //desconto = 5 / 100;
    //} else if (precototal < 15000) {
    //desconto = 7 / 100;
    //} else {
        //desconto = 9 / 100
    //}
//const valordedesconto = precototal * desconto;
//const preço = precototal - valordedesconto;

//console.log(`O Preço total à pagar é de: R$${preço}`)

/**
 * & ----- e
 * || ---- ou
 */


 //const idade = 15;
 //const sexo = "Masculino";
 
 //if (idade>= 18 && sexo == "Masculino") {
    //console.log("Bem vindo ao Exercito.");
 //} else{
    //console.log("Obrigado!");
 //}


 /**
  * Solicite a idade da pessoa.
  * Se ela possuir menos de 16 anos, informar que ela não pode tirar habilitação de motorista.
  * Se ela possuir entre 16 e 20 anos, informar que pode tirar habilitação, mas não pode beber
  * se ela possuir acima de 21 anos pode dirigir e beber
  */


 const readlineSync = require('readline-sync');
const idade = readlineSync.questionInt('Qual a sua idade?');

if (idade < 16) {
    console.log("Não pode tiara a habilitação e nem beber.");
 } else if (idade >= 16 && idade <= 20 ) {
    console.log("Pode tirar habilitação mas não pode beber");
 } else {
    console.log("Está habilitado a beber e dirigir");
}