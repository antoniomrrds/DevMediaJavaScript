let numeros = [1, 2, 5, 8, 14];

const calcula_media = (numeros) => {

    total_numeros = numeros.length;
    soma_numeros = 0;

    for ( const numero of numeros ){
        soma_numeros = soma_numeros + numero;
    }

    let media = soma_numeros / total_numeros;

    return media;
}

let media = calcula_media(numeros);

console.log("A média dos números é: " + media);