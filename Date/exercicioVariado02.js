const av1 = 1;
const av2 = 7;
const av3 = 5;

let media = (av1 + av2 + av3) / 3;
let status;

if(media>=6){

    status = "Parabéns você foi aprovado";
}else{

    status = "Ops! Infelizmente não foi dessa vez";
}


console.log(status);

