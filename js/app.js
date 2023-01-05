//_____________________________AULA 4 - FUNÇOES _________________________________________

// const output = document.querySelector('#output');

// var mensagem = '';

// for (var i = 0; i < 1001; i++) {
//     mensagem += 'indice: ' + i + '<br>';
// }

// output.innerHTML = mensagem;

//________________________________________________________________________________________

//pedir o usuario para digitar um numero e mostrar a tabuada de 1 a 1000.
//Deve ter a possibilidade do usuario tb digitar outro numero e tambem de limpar a tabuada
const output = document.querySelector('#output');

function criarTabuada() {
    alert('mostrar tabuada');

    //perguntar o numero para o usuario
    let numero = prompt('digite um número');
    //converter o numero
    numero = parseFloat(numero);

    //criar uma variavel que servira de indice
    var i = 1;

    //enquanto indice <= 1000
    //concatena na variavel mensagem
    var mensagem = '';

    for (var i = 0; i < 1001; i++) {
        mensagem += 'indice: ' + i + '<br>';
    }

    //mostra mensagem no output
    output.innerHTML = mensagem;
}

criarTabuada();


function limparTabuada() {

}






//Aula 2.1 - Variáveis
// var nome = prompt('Qual é o seu nome?');

// alert ('Bem-vindo, ' + nome + '!');

//_______________________________________02.01 - EXERCICIOS__________________________________________


// const kiku = prompt('O que vc acha de estudar TI?');

// alert('Eu acho um ' + kiku);



//____________________________________________________________________________________________

//Aula 02.02 - Conversão

//pedir para o usuário digitar um numero
// let numberOne = prompt('give me a number');
// // Aqui eu transformo minha variável para número, pois o browser sempre vai entender o que o que o usuário digita como texto.
// numberOne = parseFloat(numberOne);

// //pedir para o usuário digitar outro numero
// let numberTwo = prompt('Give me another number');
// numberTwo = parseFloat(numberTwo);

// // mostrar a soma
// alert(numberOne + numberTwo);

//________________________________________02.02 - EXERCICIOS__________________________________________


// let n1 = prompt('digite primeiro numero');
// n1 = parseInt(n1);

// let n2 = prompt ('digite o segundo numero');
// n2 = parseInt(n2);

// alert("a subtração é: " + (n1-n2));
// alert("a multiplicação é: " + (n1*n2));
// alert("a divisão é: " + (n1/n2));
// alert("a soma é: " + (n1+n2));


//________________________________________02.03 - EXERCICIOS__________________________________________

// let n1 = prompt('digite um número ');
// n1 = parseFloat(n1);

// let n2 = prompt('digite outro número ');
// n2 = parseFloat(n2);

// let media = (n1 + n2) / 2;

// alert(media);

//________________________________________02.03.02 - EXERCICIOS__________________________________________

// % é usado para mostrar a sobra de uma divisão - ex: 3 % 2 = 1 && 15 % 2 = 1
// ** é usado para a exponenciação = 3 ** 3  = 27
//

//Aqui N termina valendo 3 - incremento
// var n = 2; 
// n++; -- Aqui ele pega a variá n, soma 1 e atribui o resultado ao n.
// alert (n);

//Aqui N termina valendo 1 - decremento
// var n = 2; 
// n--; -- Aqui ele pega a variá n, subtrai 1 e atribui o resultado ao n.
// alert (n);

//________________________________________02.03.03 - EXERCICIOS__________________________________________
//____________________________Exercicio Proposto _____________________________________________________

//pedir para o usuário digitar um numero

//converter em numero inteiro

//pedir para o usuário digitar outro numero

//converter em numero inteiro

/* mostrar alert com o seguinte texto
o resto da divisão de (n1) por (n2) é: (resultado);*/

/* mostrar alert com o seguinte texto
o numero (n1) elevado a (n2) é: (resultado2);
*/

// let n1 = prompt('give me a number');
// n1 = parseInt(n1);

// let n2 = prompt('give me another number');
// n2 = parseInt(n2);

// let resultado = n1 % n2;
// let resultado2 = n1 ** n2;

// alert('o resto da divisão de ' + (n1)+ ' por ' + (n2) + ' é: ' + (resultado));
// alert('o numero ' + (n1)+ ' elevado a ' + (n2) + ' é: ' + (resultado2));


//________________________________________02.04 - EXERCICIOS__________________________________________
//____________________________________Operadores de comparação________________________________________

// ==   igualdade (valor)
// !=   diferente (valor)
// ===  igualdade (valor e tipo)
// !==  diferente (valor e tipo)
// >    maior
// >=   maior ou igual
// <    menor
// <=   menor ou igual


//Pedir para o usuario digitar dois numeros e mostrar um boolean indicando se a media for maior que 5;

// let n1 = prompt('give me a number');
// n1 = parseFloat(n1);

// let n2 = parseFloat(prompt('give me another number'));

// let media = (n1 + n2) / 2;

// alert(media > 5);


//pedir usuario pra digitar dois numeros e retornar um boolean true se a media for menor que 10

// let n1 = parseFloat(prompt('input a number'));

// let n2 = parseFloat(prompt('input another number'));

// let result = (n1 + n2) / 2;

// alert( result < 10 );


//________________________________________02.05 - EXERCICIOS__________________________________________
//____________________________________________Condicionais____________________________________________


/*Pedir para o usuario digitar dois numeros e mostrar uma mensagem informando se foi aprovado ou nao. 
A nota de corte é 5.*/

// let n1 = parseFloat(prompt('input a number'));

// let n2 = parseFloat(prompt('input another number'));

// let media = (n1 + n2) / 2;


// if(media > 5){
//     //bloco da verdade
//     alert('Parabéns! Você foi aprovado');


// } else{
//     //bloco mentira
//     alert('Desculpe, mas não foi dessa vez');
// }



//____________________________Exercicio Proposto _____________________________________________________

// //fazer jogador digitar um numero

// let player1 = parseInt(prompt('input a number'));

// // fazer jogador digitar outro numero
// let player2 = parseInt(prompt('input a number'));

// //se forem iguais, mostrar mensagem 'empate'

// if(player1 === player2){
//     alert('empate!');

// } else {
//     //sortear um numero entre 0 e 1
//     let desempate = parseInt (Math.random()*2);

// // se o numero sorteado for 0, ganha quem escolher o numero MENOR
//     if(desempate === 0){
//         if (player1 < player2){
//             alert(desempate + 'ganhou o jogador 1')
//         } else{
//             alert(desempate + 'ganhour o jogador 2')
//         }
//     // se o numero sorteado for 1, ganha quem escolher o numero MAIOR
//     } else {
//         if(player1 > player2){
//             alert(desempate + 'ganhou o jogador 1')
//         } else{
//             alert(desempate + 'ganhour o jogador 2')
//         }
//     }
// }



//MEU OUTRO JOGO QUE COLOCA COMO GANHADOR QUEM ESCOLHEU O PRIMEIRO NUMERO MAIOR
// if(player1 == player2){
//     alert('empate!');

//     let desempate = parseInt (Math.random()*2);

//     if(desempate == 1){
//         alert(desempate + ' ganha quem escolher o numero MAIOR')
//     } else {
//         alert(desempate + ' ganha quem escolher o numero MENOR')
//     }

// } else {
//     if(player1 > player2){
//         alert( player1 + ' é maior que ' + player2 + ' player 1 ganhour');
//     } else{
//         alert( player2 + ' é maior que ' + player1 + ' player 2 ganhour');
//     }

// }


//________________________________________02.06 - EXERCICIOS__________________________________________

// let n1 = parseFloat(prompt('input a number'));

// let n2 = parseFloat(prompt('input another number'));

// let media = (n1 + n2) / 2;


// if(n1 > 0 && n2 > 0 && media > 5 ){
//     //bloco da verdade
//     alert('Parabéns! Você foi aprovado');


// } else{
//     //bloco mentira
//     alert('Desculpe, mas não foi dessa vez');
// }


//____________________________Exercicio Proposto _____________________________________________________
// var n1 = prompt('digite um número');
// n1 =  parseFloat(n1);

// var n2 = parseFloat(prompt('digite outro número'));

// var media = (n1 + n2) / 2;


// if(media <= 5 || n1 === 0 || n2 === 0){
//     alert("Descupe, mas não foi dessa vez");
// } else {
//     alert("Parabéns! Você foi aprovado");
// }


//____________________________Exercicio Proposto _____________________________________________________

// //fazer jogador1 digitar um numero
// var nJogador1 = parseInt(prompt('numero do jogador 1'));

// //fazer jogador2 digitar outro numero
// var nJogador2 = parseInt(prompt('numero do jogador 2'));

// //se forem iguais, mostrar mensagem 'empate'
// if (nJogador1 === nJogador2) {
//         alert('voces empataram');
// } else {
//         //sortear um numero entre 0 e 1
//         var nSorteado = parseInt(Math.random() * 2);
//         // se o numero sorteado for 0, ganha quem escolher o numero MENOR
//         if ((nSorteado == 0 && nJogador1 < nJogador2) || (nSorteado == 1 && nJogador1 > nJogador2)) {
//                 alert(nSorteado + 'ganhou o jogador 1');
//                 //se o numero sorteado for 1, ganha quem escolher o numero MAIOR
//         } else {
//                 alert(nSorteado + 'ganhou o jogador 2')
//         }
// }

//________________________________________02.06__________________________________________

// let n = parseInt(prompt('digite um numero'));

// switch (n){
//     case 1: 
//     alert('umbigo');
//     break;
//     case 2: 
//     alert('doisdeira');
//     break;
//     case 3: 
//     alert('trestosterona');
//     break;
//     default:
//         alert('Digite um numero de 1 a 3');
// }





//_____________________________AULA 3 - REPETIÇÕES _________________________________________





// let numero = parseFloat(prompt('Digite um numero'));
// let indice = 1;

// while (indice <= 1000){
//     document.write(numero + ' x ' + indice + ' = ' + (numero* indice) + '<br>');

//     indice = indice + 1;
// }

// document.write('saiu do loop');


//______________desafio pessoal_______________________

//digite um numero

//divida ele por 0.65 até chegar a 0.00

// let numero = parseFloat(prompt('digite um numero'));

// let indice = 1;

// while ( indice <= numero){
//     // document.write(numero + ' x ' + indice + ' = ' + (numero* indice) + '<br>');
//     document.write(numero + ' / ' + indice + ' = ' + (numero+indice) + '<br>' );
//     indice = indice + 0.65;
// }

// documen.write('saiu do loop');

//WHILE LOOP

//Aqui defini a variável
// let numero = parseFloat(prompt('digite um numero'));

// for(var i = 0; i <= 100; i++){
//     document.write(numero + ' x ' + i + ' = ' + (numero * i) + '<br>');
// }

// document.write('saiu do loop');


//____________________________Exercicio Proposto _____________________________________________________

// Para esta tarefa reescreva o código da aula anterior, mas inserindo uma linha divisória sempre que mudar a dezena. Ou seja, entre o 10 e o 11, entre o 20 e o 21 e assim por diante.

// Dica: para escrever uma linha horizontal, use a tag <hr>

// let numero = parseFloat(prompt('digite um numero'));

// for (var i = 0; i <= 1000; i++) {
//     let decimal = i % 10;
//     if (decimal == 0 && i > 0) {
//         document.write(numero + ' x ' + i + ' = ' + (numero * i) + '<hr>');

//     } else {
//         document.write(numero + ' x ' + i + ' = ' + (numero * i) + '<br>');

//     }
// }

// document.write('saiu do loop');


//____________________________Exercicio Proposto _____________________________________________________
// Para este exercício, mostre na tela todos os anos a partir de 1004 até o ano 2017, pulando de quatro em quatro anos.

// Por exemplo:

// 1004

// 1008

//  1012

// E assim por diante.

// É como mostrar os anos bissextos, mas sem as regras para descobrir se um ano 
//é bissexto ou não. (vamos imaginar que se o ano é múltiplo de quatro, ele é bissexto).

// let anoInicial = 1004;
// let anoFinal = 2017;
// while (anoInicial <= anoFinal) {
//     document.write('ano' + anoInicial + '<br>');
//     anoInicial += 4;
// }
//________________________________colocando a linha_____________________________
// for (var i = anoInicial; i <= anoFinal; i++) {
//     let bissextos = i % 4;
//     if (bissextos === 0) {
//         document.write('ano' + i + '<hr>');
//     } else {
//         document.write('ano' + i + '<br>');
//     }
// }

//_______________________________________________________________________________
// let anoInicial = 1004;
// let anoFinal = 2017;


// while (anoInicial <= anoFinal) {
//     if (!(anoInicial % 100 === 0) || (anoInicial % 400 === 0)) {
//         document.write('ano' + anoInicial + '<br>');
//     } else {
//         document.write('ano' + anoInicial + ' nao é bissexto <br>');
//     }
//     anoInicial += 4;
// }