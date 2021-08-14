let frutas = "ameixa,maçã,banana,abacaxi,laranja";

let array_frutas = frutas.split(",");

for( const fruta of array_frutas )
{
    console.log("Fruta: " + fruta);
}