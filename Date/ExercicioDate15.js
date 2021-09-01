// - Crie um código para verificar se o ano é bissexto:
// - Crie a variável hoje que recebe a data atual.
// - Crie a variável ano que recebe o ano armazenado na variável hoje.

const hoje = new Date();

const ano = hoje.getFullYear();
console.log(ano)
if ( ano % 4 == 0 ) {
  console.log( 'Ano bissexto' );
} else {
  console.log( 'Não é ano bissexto' );
}