// Sem regex
console.log("\n Sem regex \n")
let texto = "A linguagem PHP é muito poderosa. Por isso amo PHP.";
let resultado = texto.replace("PHP", "JavaScript");
console.log(resultado);

// Com regex
console.log("\n Com regex \n")
let regex = /php/gi
let result = texto.replace(regex,'JavaScript')
console.log(result)
