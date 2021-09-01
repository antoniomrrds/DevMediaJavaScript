const serie = 8;
let mensalidade = 0;

if ( serie <= 3 ) {
  mensalidade = 1000;
} else if ( serie <= 6 ) {
  mensalidade = 1200;
} else {
  mensalidade = 1300;
}

console.log(mensalidade);