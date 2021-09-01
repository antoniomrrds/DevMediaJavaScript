// const data = new Date();
// const diaDaSemana = data.getDay();
// let diaExtenso = "";

// switch(diaDaSemana) {
//   case 0: diaExtenso = 'Domingo'; break;
//   case 1: diaExtenso = 'Segunda-feira'; break;
//   case 2: diaExtenso = 'Terça-feira'; break;
//   case 3: diaExtenso = 'Quarta-feira'; break;
//   case 4: diaExtenso = 'Quinta-feira'; break;
//   case 5: diaExtenso = 'Sexta-feira'; break;
//   case 6: diaExtenso = 'Sábado'; break;
// }

// console.log(diaExtenso);

let a = 1;
let b = 3;

[a, b] = [b, a];
console.log(`novo Valor da variavel A : ${a}`); // 3
console.log(`novo Valor da variavel B : ${b}`); // 1





let frase = "Tudo o que um sonho precisa para ser realizado é alguém que acredite que ele possa ser realizado.";
let posicao = frase.indexOf("sonho");

console.log(posicao);

let texto = "Brasil Espanha Canadá Irlanda Suíça";
let paises = texto.split(" ");

console.log(paises);

let nome = " Diego ";
let resultado = nome.trim();
console.log(resultado);