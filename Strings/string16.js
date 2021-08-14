let frase_1 = "Eu não gosto de TEATRO";
let frase_2 = "Eu gosto de jogar FUTEBOL";

let frase_formatada_1 = frase_1.toLowerCase();
console.log(frase_formatada_1);

let frase_formatada_2 = frase_2.toLowerCase();
console.log(frase_formatada_2);

let programador_1 = "FLÁVIA";
let programador_2 = "flávia";

if(programador_1 == programador_2.toUpperCase())
{
    console.log("iguais");
} else {
    console.log("diferentes");
}